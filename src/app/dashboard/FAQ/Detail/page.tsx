'use client';

import NoticeDetail from '@/components/organisms/Notice/NoticeDetail/NoticeDetail';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNoticeDetail } from '@/apis/Notifications';
import { faqDetailResponse, faqDetailResponseBlockResList, faqDetailResponseFileList } from '@/types/faq';
import { faqIdState } from '@/recoil/faq';
import FAQDetail from '@/components/organisms/FAQ/FAQDetail/FAQDetail';
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

  return (
    <div>
      <FAQDetail
        id={id}
        title={faqDetail.information.title}
        writer={faqDetail.information.writer}
        isPinned={faqDetail.information.pinned}
        fileLists={
          faqDetail.information.fileList?.map((file: faqDetailResponseFileList) => ({
            fileName: file.originalFileName,
            file: new File([], file.originalFileName),
          })) || []
        }
        content={
          faqDetail.information.blockResList?.map((block: faqDetailResponseBlockResList) => block.content).join('\n') ||
          ''
        }
        createdDate={faqDetail.information.createdDate}
        modifiedDate={faqDetail.information.modifiedDate}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Page;
