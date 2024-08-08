import React from 'react';

type Props = {
  id: number;
  name: string;
  studentNumber: string;
  gender: string;
  applicationBuilding: string;
  assignedBuilding: string;
  isPass: string;
  selectedId: number[];
};

const DepositListBody = ({
  id,
  name,
  studentNumber,
  gender,
  applicationBuilding,
  assignedBuilding,
  isPass,
  selectedId,
}: Props) => {
  return (
    <>
      <tr
        className={`table rounded-5 w-[1331px] H4-caption h-38 text-nowrap relative align-middle cursor-pointer ${selectedId.includes(id) && 'bg-blue-blue15'}`}
      >
        <td className='w-[15%]'>{name}</td>
        <td className='w-[15%]'>{studentNumber}</td>
        <td className='w-[15%]'>{gender}</td>
        <td className='w-[20%]'>{applicationBuilding}</td>
        <td className='w-[20%]'>{assignedBuilding}</td>
        <td className='w-[15%]'>{isPass}</td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default DepositListBody;
