'use client';
import React, { Fragment } from 'react';
import NoneList from '@/components/organisms/NoneList/NoneList';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { noticeResponseDataList } from '@/types/notice';
import NoticeListBody from './NoticeListBody';

type Props = {
  list: noticeResponseDataList[];
  isLoading: boolean;
  isEndReached: boolean;
  setSize: (size: number | ((size: number) => number)) => void;
};

const NoticeList = ({ list, isLoading, isEndReached, setSize }: Props) => {
  const pinnedNotices = list.filter((notice) => notice.pinned);
  const unPinnedNotices = list.filter((notice) => !notice.pinned);

  const lastElementRef = useInfiniteScroll({
    isLoading,
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

  return (
    <div className='w-fit h-[693px] overflow-y-scroll overflow-x-visible border-b border-gray-grayscale50'>
      <table className='w-[1200px] '>
        <thead className='w-full h-[36px] bg-white sticky top-0 z-10'>
          <tr className='text-gray-grayscale50'>
            <th className='H4'>번호</th>
            <th className='H4'>제목</th>
            <th className='H4'>작성자</th>
            <th className='H4'>등록일</th>
            <th className='H4'>첨부파일</th>
            <th className='H4'>조회수</th>
          </tr>
          <tr>
            <th colSpan={6}>
              <div className='w-full h-[18px] border-b border-gray-grayscale50' />
            </th>
          </tr>
        </thead>

        {list.length > 0 ? (
          <tbody>
            <tr className='h-[14px]' />
            {pinnedNotices.map((notice, index) => (
              <Fragment key={`${notice.notificationId}-pinned-${index}`}>
                <NoticeListBody
                  notificationId={notice.notificationId}
                  title={notice.title}
                  writer={notice.writer}
                  createdDate={notice.createdDate}
                  existFile={notice.existFile}
                  pinned={notice.pinned}
                />
                <tr className='h-[14px]' />
              </Fragment>
            ))}
            {unPinnedNotices.map((notice, index) => {
              if (index === unPinnedNotices.length - 1) {
                return (
                  <Fragment key={`${notice.notificationId}-unpinned-${index}`}>
                    <NoticeListBody
                      notificationId={notice.notificationId}
                      title={notice.title}
                      writer={notice.writer}
                      createdDate={notice.createdDate}
                      existFile={notice.existFile}
                      pinned={notice.pinned}
                      ref={lastElementRef}
                    />
                    <tr className='h-[14px]' />
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={`${notice.notificationId}-unpinned-${index}`}>
                    <NoticeListBody
                      notificationId={notice.notificationId}
                      title={notice.title}
                      writer={notice.writer}
                      createdDate={notice.createdDate}
                      existFile={notice.existFile}
                      pinned={notice.pinned}
                    />
                    <tr className='h-[14px]' />
                  </Fragment>
                );
              }
            })}
          </tbody>
        ) : (
          <tbody className='h-693'>
            <NoneList colspan={6} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default NoticeList;
