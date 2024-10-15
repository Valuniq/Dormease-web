'use client';
import { useEffect } from 'react';

const useScrollToTop = (trigger: boolean) => {
  useEffect(() => {
    if (trigger) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [trigger]);
};

export default useScrollToTop;
