// src/components/InfiniteScroll.tsx
import React, { useEffect, ReactNode } from 'react';

/**
 * 무한 스크롤 컴포넌트
 * @param children - 렌더링할 자식 요소
 * @param isLoading - 데이터 로딩 중인지 여부
 * @param isReachingEnd - 마지막 페이지인지 여부
 * @param loadMore - 다음 페이지 데이터를 로드하는 함수
 */
interface InfiniteScrollProps {
  children: ReactNode;
  isLoading: boolean;
  isReachingEnd: boolean;
  loadMore: () => void;
}

const InfiniteScroll = ({ children, isLoading, isReachingEnd, loadMore }: InfiniteScrollProps) => {
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || isReachingEnd) return;

      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, isReachingEnd, loadMore]);

  return <>{children}</>;
};

export default InfiniteScroll;
