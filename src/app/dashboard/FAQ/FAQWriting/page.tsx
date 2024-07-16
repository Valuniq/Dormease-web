'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import NoticeWrite from '@/components/organisms/Notice/NoticeWriting/NoticeWriting';
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [isPinned, setIsPinned] = useState(false);
  const [fileLists, setFileLists] = useState([]);

  const handleAllDelete = () => {
    setFileLists([]);
  };
  return (
    <div className='flex flex-col items-center justify-center'>
      <NoticeWrite
        title={title}
        setTitle={setTitle}
        writer={writer}
        isPinned={isPinned}
        setIsPinned={setIsPinned}
        fileLists={[]}
        handleAllDelete={handleAllDelete}
      />
      <div className='mt-70'>
        <BtnMidVariant label={'등록'} disabled={false} variant={'blue'} />
      </div>
    </div>
  );
};

export default Page;
