'use client';

import NoticeDetail from '@/components/organisms/Notice/NoticeDetail/NoticeDetail';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNoticeDetail } from '@/apis/Notifications';
import { faqDetailResponse, faqDetailResponseBlockResList, faqDetailResponseFileList } from '@/types/faq';
import { faqIdState } from '@/recoil/faq';
import FAQDetail from '@/components/organisms/FAQ/FAQDetail/FAQDetail';

const Page = () => {
  const router = useRouter();
  const id = useRecoilValue(faqIdState);
  const { data, error, isLoading } = useNoticeDetail(id);

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
      />
    </div>
  );
};

export default Page;
