import { useEffect, useState } from "react";

// Use import.meta.glob to load all modules in the assets folder.
const modules = import.meta.glob("/src/assets/**/*");

/**
 * Custom hook for lazy loading data from multiple files
 * @param {string[]} paths - Array of file paths to load
 * @param {boolean} inView - Whether the component is in view
 * @returns {Object} - Merged data from all files or error/loading state
 */
export default function useLazyLoadAssets(paths, inView) {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // Prevents multiple API calls
  const [hasAttemptedLoad, setHasAttemptedLoad] = useState(false);

  const shouldLoad =
    inView && Array.isArray(paths) && paths.length > 0 && !hasAttemptedLoad;

  useEffect(() => {
    if (!shouldLoad) return;
    let isMounted = true;
    const getAssets = async () => {
      setLoading(true);
      setError("");
      try {
        const results = await processPaths(paths);
        if (isMounted) {
          categorizeResults(results, setData);
          setHasAttemptedLoad(true);
        }
      } catch (error) {
        if (isMounted) {
          handleError(setError, setData, error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    getAssets();
    return () => {
      isMounted = false;
    };
  }, [paths, inView, hasAttemptedLoad]);

  return { data, error, loading };
}

/**
 * Processes each path using the modules mapping.
 * It checks if the resolved module is an image (string URL) or a data module.
 */
async function processPaths(paths) {
  return Promise.all(
    paths.map(async (path) => {
      // Ensure the path exists in the modules mapping.
      if (!modules[path]) {
        throw new Error(`${path} not found`);
      }

      // Resolve the module once.
      const resolvedModule = await modules[path]();
      // Check if the module export is a string (assuming it's an image URL).
      if (typeof resolvedModule.default === "string") {
        // Optionally, you can perform an additional regex check.
        if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(resolvedModule.default)) {
          return { src: resolvedModule.default };
        }
      }

      // For non-image modules (or if no image pattern is detected), return the module data.
      return resolvedModule.default || resolvedModule;
    })
  );
}

/**
 * Categorizes the results: if every result has a "src" property, we assume they're images.
 */
function categorizeResults(results, setData) {
  if (results.every((item) => item && item.src)) {
    setData({ images: results });
  } else {
    setData(mergeResults(results));
  }
}

/**
 * Merges results: images are accumulated in an array; other data is merged by key.
 */
function mergeResults(results) {
  return results.reduce((acc, resultItem) => {
    if (resultItem && resultItem.src) {
      acc.images = acc.images || [];
      acc.images.push(resultItem);
    } else if (typeof resultItem === "object") {
      // Merge data module properties (if they are objects)
      acc = { ...acc, ...resultItem };
    }
    return acc;
  }, {});
}

/**
 * Handles errors by setting error message and clearing data.
 */
function handleError(setError, setData, error) {
  setError(error.message || "Failed to load data");
  setData({});
}
