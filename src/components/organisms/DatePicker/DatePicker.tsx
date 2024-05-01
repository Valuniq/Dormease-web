import React from 'react';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';

type Props = {
  startDate: Date;
  endDate: Date;
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
  handlePosting: () => void;
};

const DatePicker = ({ startDate, endDate, setStartDate, setEndDate, handlePosting }: Props) => {
  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = new Date(event.target.value);
    setStartDate(newStartDate);
  };
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = new Date(event.target.value);
    setEndDate(newEndDate);
  };
  return (
    <div className='flex items-center w-631 h-52 rounded-8 bg-gray-grayscale10 px-21 justify-between'>
      <h1 className='H4 text-gray-grayscale50'>룸메이트 신청기간</h1>
      <input
        value={startDate ? startDate.toISOString().split('T')[0] : ''}
        onChange={handleStartDateChange}
        type='date'
        className='w-133 h-34 rounded-8 bg-white outline-none px-8 box-border'
      />
      <h2 className='H4 text-gray-grayscale50'>~</h2>
      <input
        value={endDate ? endDate.toISOString().split('T')[0] : ''}
        onChange={handleEndDateChange}
        type='date'
        className='w-133 h-34 rounded-8 bg-white outline-none px-8 box-border'
      />
      <BtnMiniVariant onClick={handlePosting} label={'게시'} disabled={false} selected={false} variant={'blue'} />
    </div>
  );
};

export default DatePicker;
