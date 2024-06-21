import { useEffect, useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  }).then((res) => res.json());

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // BASE_URL 설정

type PageInfo = {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalElements: number;
};

type ResponseData<T> = {
  pageInfo: PageInfo;
  dataList: T[];
};

// 제네릭을 사용하여 다양한 데이터 타입에 대해 사용할 수 있도록 설정
export const useInfiniteScroll = <T,>(endpoint: string, pageSize: number = 10) => {
  const getKey = (pageIndex: number, previousPageData: ResponseData<T> | null) => {
    if (previousPageData && pageIndex >= previousPageData.pageInfo.totalPage) return null;
    return `${BASE_URL}${endpoint}?page=${pageIndex + 1}`;
  };

  const { data, size, setSize, error } = useSWRInfinite<ResponseData<T>>(getKey, fetcher);

  const [items, setItems] = useState<T[]>([]);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.dataList.length === 0;
  const isReachingEnd = isEmpty || (data && data[size - 1]?.dataList.length < pageSize);

  const loadMoreRef = useIntersectionObserver(() => {
    if (!isLoadingMore && !isReachingEnd) {
      setSize(size + 1);
    }
  });

  useEffect(() => {
    if (data) {
      const allItems = data.map((page) => page.dataList).flat();
      setItems(allItems);
    }
  }, [data]);

  return { items, isLoadingMore: isLoadingMore ?? false, isReachingEnd: isReachingEnd ?? false, loadMoreRef, error };
};
