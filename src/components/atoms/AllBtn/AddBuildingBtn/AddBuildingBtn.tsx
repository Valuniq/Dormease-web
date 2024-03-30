import React from 'react';
import AddBtnBuild from '../../../../../public/images/AddBtnBuild.svg';

const AddBuildingBtn: React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button
      {...props}
      className='group flex flex-col justify-center items-center w-381 h-241 rounded-8 bg-gray-grayscale5 hover:bg-gray-grayscale10 active:bg-gray-grayscale20'
    >
      <div className='flex justify-center items-center w-102 h-102 rounded-full bg-gray-grayscale10 group-hover:bg-gray-grayscale20 group-active:bg-gray-grayscale30'>
        <AddBtnBuild className='text-gray-grayscale30 group-hover:text-gray-grayscale40 group-active:text-gray-grayscale50' />
      </div>
      <h2 className='mt-21 w-142 py-5 rounded-full text-white bg-blue-blue30 group-hover:bg-blue-blue40 group-active:bg-blue-blue50'>
        건물 추가하기
      </h2>
    </button>
  );
};

export default AddBuildingBtn;
