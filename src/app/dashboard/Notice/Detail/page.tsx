'use client';

import NoticeDetail from '@/components/organisms/Notice/Detail/NoticeDetail';
import { noticeIdState } from '@/recoil/notice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { noticeDetailResponse, noticeDetailResponseFileList } from '@/types/notice';
import { deleteNotice, useInfiniteNotifications, useNoticeDetail } from '@/apis/Notifications';
import { NoticeRoutes } from '@/constants/navigation';
import { mutate } from 'swr';
import { BASE_URL } from '@/constants/path';

const Page = () => {
  const router = useRouter();
  const id = useRecoilValue(noticeIdState);
  const { data, error, isLoading } = useNoticeDetail(id);
  const { size } = useInfiniteNotifications();

  const handleDelete = async () => {
    try {
      const response = await deleteNotice(id);
      const responseData = await response;

      if (response.ok || response.check) {
        console.log('Notice deleted successfully');
        console.log('Server response:', responseData); // 서버 응답 메시지 로그
        // 모든 페이지의 SWR 캐시를 무효화하여 갱신
        for (let i = 0; i < size; i++) {
          const key = `${BASE_URL}/api/v1/web/notifications/ANNOUNCEMENT?page=${i + 1}`;
          await mutate(key, undefined, { revalidate: true });
        }
        router.push(NoticeRoutes);
      } else {
        console.error('Notice 삭제 실패:', responseData);
      }
    } catch (error) {
      console.error('Notice 삭제 에러', error);
    }
  };
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

  // fileLists 데이터 변환
  const fileLists: noticeDetailResponseFileList[] = noticeDetail.information.fileList.map((file) => ({
    fileId: file.fileId,
    fileUrl: file.fileUrl,
    originalFileName: file.originalFileName,
  }));

  return (
    <div>
      <NoticeDetail data={noticeDetail} handleDelete={handleDelete} />
    </div>
  );
};

export default Page;
