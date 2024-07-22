'use client';

import NoticeDetail from '@/components/organisms/Notice/Detail/NoticeDetail';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNoticeDetail } from '@/apis/Notifications';
import { faqDetailResponse, faqDetailResponseFileList } from '@/types/faq';
import { faqIdState } from '@/recoil/faq';
import FAQDetail from '@/components/organisms/FAQ/Detail/FAQDetail';
import { deleteFaq, useInfiniteFaq } from '@/apis/Faq';
import { FAQRoutes } from '@/constants/navigation';
import { BASE_URL } from '@/constants/path';
import { mutate } from 'swr';

const Page = () => {
  const router = useRouter();
  const id = useRecoilValue(faqIdState);
  const { data, error, isLoading } = useNoticeDetail(id);
  const { size } = useInfiniteFaq();

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

  const faqDetail = data as faqDetailResponse;

  // fileLists 데이터 변환
  const fileLists: faqDetailResponseFileList[] = faqDetail.information.fileList.map((file) => ({
    fileId: file.fileId,
    fileUrl: file.fileUrl,
    originalFileName: file.originalFileName,
  }));

  return (
    <div>
      <FAQDetail data={faqDetail} handleDelete={handleDelete} />
    </div>
  );
};

export default Page;
