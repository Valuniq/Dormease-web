import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import React from 'react';

type Props = {
  index: number;
  title: string;
  startDate: string;
  endDate: string;
  getList: () => void;
};

const JoinApplicationSettingListBody = ({ index, title, startDate, endDate, getList }: Props) => {
  return (
    <>
      <tr key={index} className='mb-8'>
        <td className='H4 text-gray-grayscale50 px-4 py-2'>2024-1학기 명지대학교 사생 생활관 지원서 접수 안내</td>
        <td className='H4 text-gray-grayscale50 px-4 py-2'>24:00:00</td>
        <td className='H4 text-gray-grayscale50 px-4 py-2'>24:00:00</td>
        <td className=' px-4 py-2'>
          <BtnLargeVariant label={'가져오기'} disabled={false} variant={'blue'} />
        </td>
      </tr>
    </>
  );
};

export default JoinApplicationSettingListBody;
