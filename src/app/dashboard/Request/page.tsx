'use client';
import RequestList from '@/components/organisms/Request/RequestList';
import React from 'react';

type Props = {
  onRequestClick: (index: number) => void;
  list: {
    index: number;
    title: string;
    name: string;
    date: string;
    progression: string;
  }[];
};

const Request = ({ onRequestClick, list }: Props) => {
  return (
    <div className='flex flex-col w-[1200px]'>
      <h1 className='text-center H0 text-gray-grayscale50 text-nowrap'>요청사항</h1>
      <RequestList list={list} onRequestClick={onRequestClick} />
    </div>
  );
};

export default Request;
