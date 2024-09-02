import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';

export type Props = {
  name: string;
  studentId: string;
  gender: string;
  applicationBuilding: string;
  residence: string;
  // File은 임시로 null로 해둠
  certifiedFile: File | null;
  prioritySelection: File | null;
  assignedBuilding: string | null;
  isPassed: 'pass' | 'out' | 'movingPass';
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

const ApplicantListBody = ({
  name,
  studentId,
  gender,
  applicationBuilding,
  residence,
  certifiedFile,
  prioritySelection,
  assignedBuilding,
  isPassed,
  isChecked,
  setIsChecked,
}: Props) => {
  const statusText =
    isPassed === 'pass' ? '합격' : isPassed === 'out' ? '탈락' : isPassed === 'movingPass' ? '이동합격' : '-';
  const statusColor = isPassed === 'pass' ? 'text-blue-blue30' : isPassed === 'out' ? 'text-red-red20' : '';
  return (
    <tr className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{studentId}</td>
      <td className='text-center'>{gender}</td>
      <td className='text-center'>{applicationBuilding}</td>
      <td className='text-center flex justify-center'>
        <div className='w-286'>
          <h1
            className=' H4-caption text-gray-grayscale50'
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {residence}
          </h1>
        </div>
      </td>
      <td className='text-center'>{certifiedFile ? certifiedFile.name : '-'}</td>
      <td className='text-center'>{prioritySelection ? 'O' : 'X'}</td>
      <td className='text-center'>{assignedBuilding && assignedBuilding.length > 0 ? assignedBuilding : '-'}</td>
      <td className={`text-center ${statusColor}`}>{statusText}</td>
      <td className='flex justify-center'>
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </td>
    </tr>
  );
};

export default ApplicantListBody;