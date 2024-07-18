'use client';

import React from 'react';

type Props = {
  fileName: string;
  handleDelete: () => void;
};

const FileNameDeleteBtn = ({ fileName, handleDelete }: Props) => {
  const slicedFileName = fileName.length > 13 ? fileName.slice(0, 13) + '...' : fileName;
  return (
    <div className='pl-10 pr-3 py-5 h-23 rounded-20 bg-gray-grayscale10 flex items-center justify-between'>
      <div className='flex items-center justify-around'>
        <h1 className='mr-16 caption-2 text-gray-grayscale50 text-nowrap'>{slicedFileName}</h1>
        <div
          onClick={handleDelete}
          className='cursor-pointer w-15 h-15 rounded-[50%] bg-white flex items-center justify-center'
        >
          <h2 className='text-gray-grayscale40'>x</h2>
        </div>
      </div>
    </div>
  );
};

export default FileNameDeleteBtn;
