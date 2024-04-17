import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import React from 'react';

type Props = {
  name: string;
  schoolNumber: string;
  phoneNumber: string;
  bankName: string;
  accountNumber: string;
  period: string;
  exitDate: string;
  applicationDate: string;
  building: string;
  room: string;
  bedNumber: string;
  clickSchoolNumber: string;
  onStudentClick: (schoolNumber: string) => void;
};

const RefundListBody = ({
  name,
  schoolNumber,
  phoneNumber,
  bankName,
  accountNumber,
  period,
  exitDate,
  applicationDate,
  building,
  room,
  bedNumber,
  clickSchoolNumber,
  onStudentClick,
}: Props) => {
  return (
    <>
      <tr
        className='group w-full H4-caption h-38 text-nowrap align-middle cursor-pointer'
        onClick={() => onStudentClick(schoolNumber)}
      >
        <td
          className={`rounded-l-5 ${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {name}
        </td>
        <td
          className={`${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {schoolNumber}
        </td>
        <td
          className={`${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {phoneNumber}
        </td>
        <td
          className={`${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {bankName}
        </td>
        <td
          className={`${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {accountNumber}
        </td>
        <td
          className={`${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {period}
        </td>
        <td
          className={`${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {exitDate}
        </td>
        <td
          className={`${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {applicationDate}
        </td>
        <td
          className={`${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {building}
        </td>
        <td
          className={`${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {room}
        </td>
        <td
          className={`rounded-r-5 ${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'group-hover:bg-gray-grayscale10 group-active:bg-gray-grayscale20'}`}
        >
          {bedNumber}
        </td>
        <td>
          <BtnMiniVariant
            label='처리'
            disabled={!(clickSchoolNumber === schoolNumber)}
            selected={false}
            variant='blue'
          />
        </td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default RefundListBody;
