import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import NoticeWrite from '@/components/organisms/Notice/NoticeWriting/NoticeWriting';
import React from 'react';

type Props = {
  title: string;
  setTitle: (title: string) => void;
  writer: string;
  setWriter: (Writer: string) => void;
  isPinned: boolean;
  setIsPinned: (isPinned: boolean) => void;
  fileLists: File[];
  handleAllDelete: () => void;
};

const page = ({ title, setTitle, writer, setWriter, isPinned, setIsPinned, fileLists, handleAllDelete }: Props) => {
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

export default page;
