'ise client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import RadioBtn from '@/components/atoms/AllBtn/RadioBtn/RadioBtn';
import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col w-[1200px]'>
      <h1 className='text-left H0 text-gray-grayscale50 text-nowrap'>요청사항</h1>
      <hr className='text-gray-grayscale50 mt-25' />
      <h4 className='pl-12 pt-21 pb-17 H4 text-gray-grayscale50'>{'title'}</h4>
      <hr className='text-gray-grayscale30' />
      <div className='flex justify-between'>
        <div className='flex items-center text-gray-grayscale50'>
          <h5 className='pl-12 pr-39 pt-13 pb-13 H4'>작성자</h5>
          <h5 className='H4-caption'>{'name'}</h5>
        </div>
        <div className='flex items-center caption2 text-gray-grayscale40'>
          <h6 className='pr-19'>작성일</h6>
          <h6>{'date'}</h6>
        </div>
      </div>
      <hr className='text-gray-grayscale30 mb-23' />
      <div className='w-full h-450 overflow-auto scrollbar-table border border-gray-grayscale30 rounded-8 px-17 py-16'>
        {'content'}
      </div>
      <hr className='text-gray-grayscale30 my-23' />
      <div className='flex items-center'>
        <h4 className='H4 text-gray-grayscale50 pl-12 mr-32'>부재 시 방문동의 여부</h4>
        <h3 className={`H3 w-155 ${'isVisited' ? 'text-blue-blue30' : 'text-red-red20'}`}>
          {'isVisited' ? '동의' : '비동의'}
        </h3>
        <h4 className='H4 text-gray-grayscale50 mr-32'>공개 여부</h4>
        <h3 className={`H3 ${'isPublic' ? 'text-blue-blue30' : 'text-red-red20'}`}>{'isPublic' ? '동의' : '비동의'}</h3>
      </div>
      <div className='flex justify-center gap-181 mt-24 mb-45'>
        <RadioBtn
          isOn={'검토중' === '검토중'}
          setIsOn={function (isOn: boolean): void {
            throw new Error('Function not implemented.');
          }}
          label='검토중'
        />
        <RadioBtn
          isOn={'진행중' === '진행중'}
          setIsOn={function (isOn: boolean): void {
            throw new Error('Function not implemented.');
          }}
          label='진행중'
        />
        <RadioBtn
          isOn={'완료됨' === '완료됨'}
          setIsOn={function (isOn: boolean): void {
            throw new Error('Function not implemented.');
          }}
          label='완료됨'
        />
      </div>
      <div className='flex justify-center gap-24'>
        <BtnMidVariant label='등록' disabled={true} variant='blue' />
        <BtnMidVariant label='삭제' disabled={false} variant='red' />
      </div>
    </div>
  );
};

export default Page;
