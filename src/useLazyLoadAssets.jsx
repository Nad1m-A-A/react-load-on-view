import { useEffect, useState } from "react";

/**
 * Custom hook for lazy loading data from multiple files
 * @param {string[]} files - Array of file paths to load
 * @param {boolean} inView - Whether the component is in view
 * @returns {Object|null} - Merged data from all files or null if not loaded
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
    // Prevents memory leaks
    let isMounted = true;
    const getAssets = async () => {
      setLoading(true);
      setError("");
      let results;
      try {
        results = await processPaths(paths);
      } catch (error) {
        if (isMounted) {
          handleError(setError, setData, error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
      if (isMounted && results) {
        categorizeResults(results, setData);
        setHasAttemptedLoad(true);
      }
    };
    getAssets();

    return () => {
      isMounted = false;
    };
  }, [paths, inView, hasAttemptedLoad]);

  return { data, error, loading };
}

async function processPaths(paths) {
  return Promise.all(
    paths.map(async (path) => {
      if (isImage(path)) {
        return { src: path };
      } else {
        try {
          const result = await import(path);
          return result.default || result;
        } catch (error) {
          throw error;
        }
      }
    })
  );
}

function isImage(path) {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(path);
}

function categorizeResults(results, setData) {
  if (results.every((item) => item?.src)) {
    // Results are only images
    setData({ images: results });
  } else {
    // Results are mixed(files & images), or no images
    setData(mergeResults(results));
  }
}

function mergeResults(results) {
  return results.reduce((acc, resultItem) => {
    if (resultItem?.src) {
      acc.images = acc.images || [];
      acc.images.push(resultItem);
    } else {
      acc = { ...acc, ...resultItem };
    }
    return acc;
  }, {});
}

function handleError(setError, setData, error) {
  setError(error.message || "Failed to load data");
  setData({});
}
