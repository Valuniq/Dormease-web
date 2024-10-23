import React from 'react';

type Props = {
  colspan: number;
};

const NoneList = ({ colspan }: Props) => {
  return (
    <tr>
      <td colSpan={colspan} className='h-full'>
        <div className='flex justify-center items-center'>
          <h1 className='H1 text-gray-grayscale30'>리스트가 비었습니다.</h1>
        </div>
      </td>
    </tr>
  );
};

export default NoneList;
