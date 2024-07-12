'use client';
import React, { Fragment } from 'react';
import NoneList from '../../NoneList/NoneList';
import NoticeListBody from './NoticeListBody';
import { noticeResponseDataList } from '@/types/notice';

type NoticeListProps = {
  noticeLists: noticeResponseDataList[];
};

const NoticeList = ({ noticeLists }: NoticeListProps) => {
  const pinnedNotices = noticeLists.filter((notice) => notice.pinned);
  const unPinnedNotices = noticeLists.filter((notice) => !notice.pinned);

  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1200px] h-full'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
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
              <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </tr>
        </thead>

        {noticeLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-14' />
            {pinnedNotices.map((notice) => (
              <Fragment key={notice.notificationId}>
                {' '}
                <NoticeListBody
                  notificationId={notice.notificationId}
                  title={notice.title}
                  writer={notice.writer}
                  createdDate={notice.createdDate}
                  existFile={notice.existFile}
                  pinned={notice.pinned}
                />{' '}
                <tr className='h-14' />
              </Fragment>
            ))}
            {unPinnedNotices.map((notice) => (
              <Fragment key={notice.notificationId}>
                <NoticeListBody
                  notificationId={notice.notificationId}
                  title={notice.title}
                  writer={notice.writer}
                  createdDate={notice.createdDate}
                  existFile={notice.existFile}
                  pinned={notice.pinned}
                />{' '}
                <tr className='h-14' />
              </Fragment>
            ))}
          </tbody>
        ) : (
          <tbody className='h-full'>
            <NoneList colspan={6} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default NoticeList;
