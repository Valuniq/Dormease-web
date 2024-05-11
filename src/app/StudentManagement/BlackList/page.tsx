'use client';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import ResignBtn from '@/components/atoms/AllBtn/ResignBtn/ResignBtn';
import BlackList from '@/components/organisms/BlackList/BlackList';

const page = () => {
  return (
    <div className='w-[1250px] flex flex-col items-center'>
      <h1 className='H0 text-gray-grayscale50 mb-8'>블랙리스트</h1>
      <div className='ml-auto mb-24'>
        <BtnMiniVariant label={'저장'} disabled={false} selected={false} variant={'blue'} />
      </div>
      <BlackList
        blackLists={[]}
        isAllChecked={false}
        setIsAllChecked={function (isAllChecked: boolean): void {
          throw new Error('Function not implemented.');
        }}
        isEdit={false}
        setIsEdit={function (isEdit: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
      <div className='ml-auto mt-24'>
        <ResignBtn label={'삭제하기'} />
      </div>
    </div>
  );
};

export default page;
