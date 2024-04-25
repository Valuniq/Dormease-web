import React from 'react';
import NoneList from '../NoneList/NoneList';
import FAQListBody, { Props as faqList } from './FAQListBody';

type Props = {
  FAQLists: faqList[];
};

const FAQList = ({ FAQLists }: Props) => {
  const pinnedFAQ = FAQLists.filter((faq) => faq.isPinned);
  const unPinnedFAQ = FAQLists.filter((faq) => !faq.isPinned);
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
          {FAQLists && FAQLists.length > 0 ? (
            <>
              {/* 고정된 FAQ 먼저 렌더링 */}
              {pinnedFAQ.map((notice) => (
                <>
                  <FAQListBody
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
              {/* 고정되지 않은 FAQ 렌더링 */}
              {unPinnedFAQ.map((notice) => (
                <>
                  <FAQListBody
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

export default FAQList;
