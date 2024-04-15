import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';

export type Props = {
  name: string;
  studentId: string;
  gender: string;
  applicationBuilding: string;
  residence: string;
  // certifiedFile은 임시로 null로 해둠
  certifiedFile: File | null;
  prioritySelection: boolean;
  assignedBuilding: string | null;
  isPassed: boolean | null;
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
  return (
    <>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{name}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{studentId}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{gender}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{applicationBuilding}</h1>
      </td>
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
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{certifiedFile ? certifiedFile.name : '-'}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{prioritySelection ? 'O' : 'X'}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{assignedBuilding ? assignedBuilding : '-'}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{isPassed ? isPassed : '-'}</h1>
      </td>
      <td className='flex justify-center'>
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </td>
    </>
  );
};

export default ApplicantListBody;
