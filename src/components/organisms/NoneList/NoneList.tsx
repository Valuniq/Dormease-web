import React from 'react';

const NoneList = () => {
  return (
    <tr className='flex justify-center items-center h-full'>
      <td colSpan={4}>
        <h1 className='H1 text-gray-grayscale30'>리스트가 비었습니다.</h1>
      </td>
    </tr>
  );
};

export default NoneList;
