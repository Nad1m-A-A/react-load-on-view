# React Observe and Load

React Higher-Order Component (HOC) that tracks UI elements to dynamically fetch data, load images, or trigger animations based on visibility.

## Project Goal

This package is designed as both a utility and a learning tool. It comes with a companion demo site that showcases different use cases and implementation patterns.

### Learning Approach

The demo site presents 6 different cases, each demonstrating a unique way to use the package:

- **Case A**: Static data & basic animations
- **Case B**: Dynamic data loading with independent card animations
- **Case C**: Dynamic data with full section animations
- **Case D**: Dynamic data with custom card animations
- **Case E**: Direct hook usage (useElementObserver & useLazyLoadAssets)
- **Case F**: Standalone intersection observer hook

Each case builds upon the previous one, helping developers understand:

- Different ways to implement the package
- How to combine data loading with animations
- When to use the HOC vs direct hooks
- Best practices for performance and reusability

Visit the [demo site](https://github.com/Nad1m-A-A/react-load-on-view) to explore these cases and experiment with the code.
