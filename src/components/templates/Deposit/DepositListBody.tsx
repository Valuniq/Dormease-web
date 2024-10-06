import React from 'react';

type Props = {
  dormitoryApplicationId: number;
  studentName: string;
  studentNumber: string;
  gender: string;
  resultDormitoryRoomTypeRes: string;
  dormitoryApplicationResult: string;
  selectedId: number[];
};

const resultText: { [key: string]: string } = {
  PASS: '합격',
  NON_PASS: '불합격',
  MOVE_PASS: '이동 합격',
  WAIT: '대기',
};

const DepositListBody = ({
  dormitoryApplicationId,
  studentName,
  studentNumber,
  gender,
  resultDormitoryRoomTypeRes,
  dormitoryApplicationResult,
  selectedId,
}: Props) => {
  return (
    <>
      <tr
        className={`table rounded-5 w-[1331px] H4-caption h-38 text-nowrap relative align-middle cursor-pointer ${selectedId.includes(dormitoryApplicationId) && 'bg-blue-blue15'}`}
      >
        <td className='w-[15%]'>{studentName}</td>
        <td className='w-[20%]'>{studentNumber}</td>
        <td className='w-[18%]'>{gender === 'MALE' ? '남성' : '여성'}</td>
        <td className='w-[32%]'>{resultDormitoryRoomTypeRes}</td>
        <td className='w-[15%]'>{resultText[dormitoryApplicationResult] || null}</td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default DepositListBody;
