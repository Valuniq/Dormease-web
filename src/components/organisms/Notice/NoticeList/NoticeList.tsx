import React from 'react';
import NoneList from '../../NoneList/NoneList';
import NoticeListBody from './NoticeListBody';
import { noticeLists } from '@/types/notice';

const NoticeList = ({ noticeLists }: noticeLists) => {
  const pinnedNotices = noticeLists && noticeLists.filter((notice) => notice.isPinned);
  const unPinnedNotices = noticeLists && noticeLists.filter((notice) => !notice.isPinned);
  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1200px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
          <tr className='text-gray-grayscale50'>
            <th className='H4'>번호</th>
            <th className='H4'>제목</th>
            <th className='H4'>작성자</th>
            <th className='H4'>등록일</th>
            <th className='H4'>첨부파일</th>
            <th className='H4'>조회수</th>
          </tr>
          <th colSpan={6}>
            <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
          </th>
        </thead>
        <tbody className='overflow-y-scroll'>
          <tr className='h-15' />
          {noticeLists && noticeLists.length > 0 ? (
            <>
              {/* 고정된 공지사항 먼저 렌더링 */}
              {pinnedNotices.map((notice) => (
                <>
                  <NoticeListBody
                    index={notice.index}
                    title={notice.title}
                    writer={notice.writer}
                    registrationDate={notice.registrationDate}
                    isExistedFile={notice.isExistedFile}
                    views={notice.views}
                    isPinned={notice.isPinned}
                  />
                  <tr className='h-15' />
                </>
              ))}
              {/* 고정되지 않은 공지사항 렌더링 */}
              {unPinnedNotices.map((notice) => (
                <>
                  <NoticeListBody
                    index={notice.index}
                    title={notice.title}
                    writer={notice.writer}
                    registrationDate={notice.registrationDate}
                    isExistedFile={notice.isExistedFile}
                    views={notice.views}
                    isPinned={notice.isPinned}
                  />
                  <tr className='h-15' />
                </>
              ))}
            </>
          ) : (
            <td className='h-500' colSpan={6}>
              <NoneList />
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeList;
