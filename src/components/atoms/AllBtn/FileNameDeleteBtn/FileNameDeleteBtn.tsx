import React from 'react';

type Props = {
  fileName: string;
  handleDelete: () => void;
};

const FileNameDeleteBtn = ({ fileName, handleDelete }: Props) => {
  const slicedFileName = fileName.length > 13 ? fileName.slice(0, 13) + '...' : fileName;
  return (
    <div className='w-190 h-23 rounded-20 bg-gray-grayscale10 px-10 flex items-center justify-between'>
      <h1 className='caption-2 text-gray-grayscale50 text-nowrap'>{slicedFileName}</h1>
      <div
        onClick={handleDelete}
        className='cursor-pointer
       w-15 h-15 rounded-[50%] bg-white flex items-center justify-center'
      >
        <h2 className='text-gray-grayscale40'>x</h2>
      </div>
    </div>
  );
};

export default FileNameDeleteBtn;
