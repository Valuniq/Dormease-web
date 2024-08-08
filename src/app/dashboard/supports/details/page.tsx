'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNoticeDetail } from '@/apis/Notice';
import { supportDetailResponse, supportDetailResponseFileList } from '@/types/support';

import { deleteFaq, useInfiniteSupport } from '@/apis/Support';
import { FAQRoutes } from '@/constants/navigation';
import { BASE_URL } from '@/constants/path';
import { mutate } from 'swr';
import { supportIdState } from '@/recoil/support';
import SupportDetail from '@/components/templates/Support/Detail/SupportDetail';

const Page = () => {
  const router = useRouter();
  const id = useRecoilValue(supportIdState);
  const { data, error, isLoading } = useNoticeDetail(id);
  const { size } = useInfiniteSupport();

  const handleDelete = async () => {
    try {
      const response = await deleteFaq(id);
      const responseData = await response;

      if (response.ok || response.check) {
        console.log('FAQ deleted successfully');
        console.log('Server response:', responseData);
        // 모든 페이지의 SWR 캐시를 무효화하여 갱신
        for (let i = 0; i < size; i++) {
          const key = `${BASE_URL}/api/v1/web/notifications/FAQ?page=${i + 1}`;
          await mutate(key, undefined, { revalidate: true });
        }
        router.push(FAQRoutes);
      } else {
        console.error('FAQ 삭제 실패:', responseData);
      }
    } catch (error) {
      console.error('FAQ 삭제 에러', error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load faq detail</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const faqDetail = data as supportDetailResponse;

  // fileLists 데이터 변환
  const fileLists: supportDetailResponseFileList[] = faqDetail.information.fileList.map((file) => ({
    fileId: file.fileId,
    fileUrl: file.fileUrl,
    originalFileName: file.originalFileName,
  }));

  return (
    <div>
      <SupportDetail data={faqDetail} handleDelete={handleDelete} />
    </div>
  );
};

export default Page;
