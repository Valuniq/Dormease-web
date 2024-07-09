'use client';
import { faqResponseDataList } from '@/types/faq';
import React from 'react';
import NoneList from '../NoneList/NoneList';
import FAQListBody from './FAQListBody';

type faqListProps = {
  faqLists: faqResponseDataList[];
};

const FAQList = ({ faqLists }: faqListProps) => {
  const pinnedFAQ = faqLists && faqLists.filter((faq) => faq.pinned);
  const unPinnedFAQ = faqLists && faqLists.filter((faq) => !faq.pinned);
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
          <tr>
            <th colSpan={6}>
              <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </tr>
        </thead>

        {faqLists && faqLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {/* 고정된 FAQ 먼저 렌더링 */}
            {pinnedFAQ.map((faq) => (
              <>
                <FAQListBody
                  notificationId={faq.notificationId}
                  title={faq.title}
                  writer={faq.writer}
                  createdDate={faq.createdDate}
                  existFile={faq.existFile}
                  // views={faq.views}
                  pinned={faq.pinned}
                />
                <tr className='h-15' />
              </>
            ))}
            {/* 고정되지 않은 FAQ 렌더링 */}
            {unPinnedFAQ.map((faq) => (
              <>
                <FAQListBody
                  notificationId={faq.notificationId}
                  title={faq.title}
                  writer={faq.writer}
                  createdDate={faq.createdDate}
                  existFile={faq.existFile}
                  // views={faq.views}
                  pinned={faq.pinned}
                />
                <tr className='h-15' />
              </>
            ))}
          </tbody>
        ) : (
          <tbody className='h-full '>
            <NoneList colspan={6} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default FAQList;
