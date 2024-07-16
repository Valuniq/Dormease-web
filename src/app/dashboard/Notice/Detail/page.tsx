'use client';

import NoticeDetail from '@/components/organisms/Notice/NoticeDetail/NoticeDetail';
import { noticeIdState } from '@/recoil/notice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { noticeDetailResponse, noticeDetailResponseFileList, noticeDetailResponseBlockResList } from '@/types/notice';
import { useNoticeDetail } from '@/apis/Notifications';

const Page = () => {
  const router = useRouter();
  const id = useRecoilValue(noticeIdState);
  const { data, error, isLoading } = useNoticeDetail(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load notice detail</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const noticeDetail = data as noticeDetailResponse;

  return (
    <div>
      <NoticeDetail
        title={noticeDetail.information.title}
        writer={noticeDetail.information.writer}
        isPinned={noticeDetail.information.pinned}
        fileLists={
          noticeDetail.information.fileList?.map((file: noticeDetailResponseFileList) => ({
            fileName: file.originalFileName,
            file: new File([], file.originalFileName),
          })) || []
        }
        content={
          noticeDetail.information.blockResList
            ?.map((block: noticeDetailResponseBlockResList) => block.content)
            .join('\n') || ''
        }
        createdDate={noticeDetail.information.createdDate}
        modifiedDate={noticeDetail.information.modifiedDate}
      />
    </div>
  );
};

export default Page;
