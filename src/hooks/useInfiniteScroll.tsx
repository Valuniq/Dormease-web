import { useRef, useCallback, useEffect } from 'react';

interface UseInfiniteScrollProps {
  isLoading: boolean;
  isEndReached: boolean;
  onIntersect: () => void;
}

const useInfiniteScroll = ({ isLoading, isEndReached, onIntersect }: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isEndReached) {
          onIntersect();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, isEndReached, onIntersect],
  );

  useEffect(() => {
    return () => observer.current?.disconnect();
  }, []);

  return lastElementRef;
};

export default useInfiniteScroll;
