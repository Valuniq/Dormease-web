'use client';
import dynamic from 'next/dynamic';
import React, { forwardRef } from 'react';
import PledgeWritingEx from '@public/images/PledgeWritingEx.png';
import Image from 'next/image';

const QuillComponent = dynamic(() => import('@/lib/Quill/QuillComponent'), { ssr: false });

type Props = {
  setEditorHtml: (content: string) => void;
};

const PledgeWriting = forwardRef<HTMLDivElement, Props>(({ setEditorHtml }, ref) => {
  return (
    <div className='w-full grid gap-28'>
      <h1 className='H1 text-blue-blue30'>입사 서약서 작성</h1>
      <div className='flex items-start justify-between h-466'>
        <QuillComponent width='822px' height='466px' setEditorHtml={setEditorHtml} />
        <div className='flex flex-col items-end'>
          <Image width={360} height={466} src={PledgeWritingEx} alt='PledgeWritingEx' />
          <h3 className='caption-3 text-gray-grayscale50 mt-8'>*APP 예시화면</h3>
        </div>
      </div>
    </div>
  );
});

PledgeWriting.displayName = 'PledgeWriting';

export default PledgeWriting;
