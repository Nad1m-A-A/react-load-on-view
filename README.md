# React Load on View

React Higher-Order Component (HOC) that tracks UI elements to dynamically fetch data, load images, or trigger animations based on visibility.

[![GitHub](https://img.shields.io/badge/GitHub-View%20on%20GitHub-blue?logo=github)](https://github.com/Nad1m-A-A/react-load-on-view)
[![Demo](https://img.shields.io/badge/Demo-View%20Demo-green?logo=react)](https://github.com/Nad1m-A-A/react-load-on-view/tree/main/react-load-on-view-application)
[![Vite](https://img.shields.io/badge/Requires-Vite-yellow)](https://vitejs.dev/)

> **Important**: This package is designed specifically for Vite-based projects and requires certain configurations. See the [Vite Configuration](#important-vite-specific-configuration) section.

## Features

- 🔍 Intersection Observer integration
- 🎨 Animation triggers on visibility
- 📦 Lazy loading of data
- 🌳 Tree-shakeable exports
- ⚡ Optimized bundle size

## Installation

```bash
npm install react-load-on-view
# or
yarn add react-load-on-view
```

## Usage

### Basic Animation Example

```jsx
import { withViewObserver } from "react-load-on-view";

function MyComponent() {
  return <div>This will animate when scrolled into view</div>;
}

const AnimatedComponent = withViewObserver(MyComponent, {
  animate: true,
  threshold: 0.3,
  afterWrapperIsVisibleClass: "visible_wrapper",
  initialWrapperClass: "invisible_wrapper",
});
```

### Lazy Loading Example

```jsx
import { withViewObserver } from "react-load-on-view";

function DataComponent({ data, loading, error }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Access images */}
      {data.images && data.images.map((img) => <img src={img.src} />)}
      {/* Access other data */}
      {data.someContent && <p>{data.someContent}</p>}
    </div>
  );
}

const LazyLoadedComponent = withViewObserver(DataComponent, {
  lazyLoad: true,
  paths: ["/path/to/image.webp", "/path/to/data.js"],
  animate: true,
});
```

### Using Individual Hooks

```jsx
import { useElementObserver, useLazyLoadAssets } from "react-load-on-view";

function CustomComponent() {
  const { ref, inView } = useElementObserver({
    rootMargin: "50px",
    threshold: 0.5,
  });

  const { data, loading, error } = useLazyLoadAssets(
    ["/path/to/image.webp", "/path/to/data.js"],
    inView
  );

  return (
    <div ref={ref}>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data.images && <img src={data.images[0].src} alt="" />}
    </div>
  );
}
```

## API

### withViewObserver

```jsx
withViewObserver(WrappedComponent, options);
```

#### Options

| Option                       | Type     | Default             | Description                            |
| ---------------------------- | -------- | ------------------- | -------------------------------------- |
| `animate`                    | boolean  | false               | Whether to apply animation classes     |
| `afterWrapperIsVisibleClass` | string   | "visible_wrapper"   | Class to apply when visible            |
| `initialWrapperClass`        | string   | "invisible_wrapper" | Initial class when not visible         |
| `rootMargin`                 | string   | "0px"               | Margin around the root element         |
| `threshold`                  | number   | 0                   | Visibility threshold (0-1)             |
| `root`                       | Element  | null                | Root element for intersection observer |
| `triggerOnce`                | boolean  | true                | Whether to trigger only once           |
| `lazyLoad`                   | boolean  | false               | Whether to enable lazy loading         |
| `paths`                      | string[] | []                  | Paths to assets to lazy load           |

### useElementObserver

```jsx
const { ref, inView } = useElementObserver(options);
```

#### Options

| Option        | Type    | Default | Description                            |
| ------------- | ------- | ------- | -------------------------------------- |
| `rootMargin`  | string  | "0px"   | Margin around the root element         |
| `threshold`   | number  | 0       | Visibility threshold (0-1)             |
| `triggerOnce` | boolean | true    | Whether to trigger only once           |
| `root`        | Element | null    | Root element for intersection observer |

### useLazyLoadAssets

```jsx
const { data, error, loading } = useLazyLoadAssets(paths, inView);
```

#### Parameters

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `files`   | string[] | Array of file paths to load    |
| `inView`  | boolean  | Whether the element is in view |

## Animation Control

### Default vs Special Animations

The package provides two ways to apply animations:

1. **Default Animation Classes**:

```jsx
const AnimatedComponent = withViewObserver(MyComponent, {
  animate: true,
  afterWrapperIsVisibleClass: "general-animation",
  initialWrapperClass: "invisible-wrapper",
});
```

2. **Special Animation Override**:

```jsx
// The special_animation prop takes precedence over afterWrapperIsVisibleClass
<AnimatedComponent special_animation="stagger-1" />
```

This is particularly useful for creating staggered animations:

```jsx
function StaggeredList({ items }) {
  return items.map((item, i) => (
    <AnimatedComponent key={i} special_animation={`stagger-${i}`} />
  ));
}
```

## CSS Example

```css
.invisible_wrapper {
  opacity: 0;
}

.visible_wrapper {
  animation: fade_in 2s ease-in-out;
}

/* Scale and opacity transition */
.unclear {
  opacity: 0.1;
  transform: scale(0.9);
  transition: 0.5s;
}

.clear {
  transform: scale(1);
  animation: clear 0.5s ease-in-out;
}

/* Staggered animation */
.stagger-0,
.stagger-1 {
  opacity: 0;
  animation: stagger 1s ease-out forwards;
}

.stagger-1 {
  animation-delay: 0.4s;
}
```

## Browser Support

This package uses the Intersection Observer API. For browsers that don't support it, you'll need to include a polyfill:

```jsx
import "intersection-observer";
```

## Changelog

### [1.0.0] - 2024-03-04

- Initial release
- Added withViewObserver HOC
- Added useElementObserver hook
- Added useLazyLoadAssets hook
- Added tree-shaking support
- Added minification support

## License

MIT

## Author

Nad1m-A-A

## TypeScript Support

This package includes TypeScript declarations. You can use it in TypeScript projects without any additional setup:

```tsx
import { withViewObserver } from "react-load-on-view";

interface MyComponentProps {
  title: string;
  // Your props here
}

// TypeScript will understand the additional props from lazy loading
function MyComponent({
  title,
  data,
  loading,
  error,
}: MyComponentProps & { data?: any; loading?: boolean; error?: string }) {
  return <div>{title}</div>;
}

const EnhancedComponent = withViewObserver(MyComponent, {
  lazyLoad: true,
  paths: ["/path/to/data.json"],
});

// TypeScript will understand this prop is available
<EnhancedComponent title="Hello" special_animation="fade-in" />;
```

The package exports the following types:

- `WithViewObserverOptions` - Options for the HOC
- `UseElementObserverOptions` - Options for the observer hook
- `LazyLoadProps` - Extra props added to components with lazyLoad enabled

## Important: Vite-Specific Configuration

This package is specifically designed for projects using **Vite** as the build tool.

### Required Vite Configuration

To ensure all assets are properly loaded, you must modify your `vite.config.js` to disable asset inlining:

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0 // This ensures all assets are processed as files
  }
});
```

### Asset Path Requirement

The package expects dynamically imported assets to be located within the `/src/assets/` directory:

```jsx
// This glob pattern is used internally
const modules = import.meta.glob("/src/assets/**/*");
```

Therefore, all files referenced in `paths` must be placed in this directory structure:
