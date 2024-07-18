'use client';
import React, { Fragment } from 'react';
import NoneList from '@/components/organisms/NoneList/NoneList';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { faqResponseDataList } from '@/types/faq';
import FAQListBody from './FAQListBody';

type Props = {
  list: faqResponseDataList[];
  isLoading: boolean;
  isEndReached: boolean;
  setSize: (size: number | ((size: number) => number)) => void;
};

const FAQList = ({ list, isLoading, isEndReached, setSize }: Props) => {
  const pinnedFAQ = list.filter((faq) => faq.pinned);
  const unPinnedFAQ = list.filter((faq) => !faq.pinned);

  const lastElementRef = useInfiniteScroll({
    isLoading,
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

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

        {list.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-14' />
            {pinnedFAQ.map((faq, index) => (
              <Fragment key={index}>
                <FAQListBody
                  notificationId={faq.notificationId}
                  title={faq.title}
                  writer={faq.writer}
                  createdDate={faq.createdDate}
                  existFile={faq.existFile}
                  pinned={faq.pinned}
                />
                <tr className='h-14' />
              </Fragment>
            ))}
            {unPinnedFAQ.map((faq, index) => {
              if (index === unPinnedFAQ.length - 1) {
                return (
                  <Fragment key={index}>
                    <FAQListBody
                      notificationId={faq.notificationId}
                      title={faq.title}
                      writer={faq.writer}
                      createdDate={faq.createdDate}
                      existFile={faq.existFile}
                      pinned={faq.pinned}
                      ref={lastElementRef}
                    />
                    <tr className='h-14' />
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={index}>
                    <FAQListBody
                      notificationId={faq.notificationId}
                      title={faq.title}
                      writer={faq.writer}
                      createdDate={faq.createdDate}
                      existFile={faq.existFile}
                      pinned={faq.pinned}
                    />
                    <tr className='h-14' />
                  </Fragment>
                );
              }
            })}
          </tbody>
        ) : (
          <tbody className='h-full'>
            <NoneList colspan={6} />
          </tbody>
        )}
      </table>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default FAQList;
