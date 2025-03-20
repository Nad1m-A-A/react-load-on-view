import { ComponentType, ReactElement, HTMLAttributes } from "react";

// withViewObserver types
interface WithViewObserverOptions {
  animate?: boolean;
  afterWrapperIsVisibleClass?: string;
  initialWrapperClass?: string;
  rootMargin?: string;
  threshold?: number;
  root?: Element | null;
  triggerOnce?: boolean;
  lazyLoad?: boolean;
  paths?: string[];
}

interface LazyLoadProps {
  data?: any;
  error?: string;
  loading?: boolean;
  special_animation?: string;
  [key: string]: any;
}

export function withViewObserver<P>(
  WrappedComponent: ComponentType<P & LazyLoadProps>,
  options?: WithViewObserverOptions
): ComponentType<
  P & {
    special_animation?: string;
    style?: HTMLAttributes<HTMLDivElement>["style"];
  }
>;

// useElementObserver types
interface UseElementObserverOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
  root?: Element | null;
}

interface UseElementObserverResult {
  ref: React.RefObject<HTMLElement>;
  inView: boolean;
}

export function useElementObserver(
  options?: UseElementObserverOptions
): UseElementObserverResult;

// useLazyLoadAssets types
interface UseLazyLoadAssetsResult {
  data: any;
  error: string;
  loading: boolean;
}

export function useLazyLoadAssets(
  paths: string[],
  inView: boolean
): UseLazyLoadAssetsResult;
