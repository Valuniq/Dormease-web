'use client';

import AlertBtn from '@/components/atoms/AllBtn/AlertBtn/AlertBtn';
import CalendarInputText from '@/components/atoms/InputText/CalendarInputText/CalendarInputText';
import ColorDropDown from '@/components/organisms/Prompt/CalendarPrompt/ColorDropDown';
import Wave from '@public/images/Wave.png';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  contents: string;
  setContents: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  startDate: string;
  endDate: string;
  setSelectedDates: React.Dispatch<React.SetStateAction<{ start: string; end: string }>>;
  onCancel: () => void;
  onConfirm: () => void;
};

const MAX_LENGTH = 200; //편지 내용 글자수 제한

const CalendarPromptAdd = ({
  title,
  setTitle,
  contents,
  setContents,
  color,
  setColor,
  onCancel,
  onConfirm,
  startDate,
  endDate,
  setSelectedDates,
}: Props) => {
  const [isColordropdown, setIsColorDropdown] = useState(false);

  //내용 글자수 계산 & 내용 저장
  const onTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > MAX_LENGTH) {
      event.target.value = event.target.value.slice(0, MAX_LENGTH);
    }
    const target = event.target.value;
    setContents(target);
  };

  return (
    <div className='flex flex-col items-start bg-white pt-40 pb-79 pl-71 pr-58 shadow1 rounded-8'>
      <h1 className='H1 mb-20'>기간 설정</h1>
      <div className='flex items-center'>
        <input
          className='rounded-8 border border-gray-grayscale40 H4-caption outline-none px-14 py-5 text-gray-grayscale50 placeholder:text-gray-grayscale30'
          type='date'
          id='date'
          required
          value={startDate}
          onChange={(e) => {
            setSelectedDates((prev: { start: string; end: string }) => ({
              ...prev,
              start: e.target.value,
            }));
          }}
        />
        <Image src={Wave} width={18} height={6} alt='wave' className='mx-26' />
        <input
          className='rounded-8 border border-gray-grayscale40 H4-caption outline-none px-14 py-5 text-gray-grayscale50 placeholder:text-gray-grayscale30'
          type='date'
          id='date'
          required
          value={endDate}
          onChange={(e) => {
            setSelectedDates((prev: { start: string; end: string }) => ({
              ...prev,
              end: e.target.value,
            }));
          }}
        />
      </div>
      <h1 className='H1 mt-20 mb-12'>제목 설정</h1>
      <CalendarInputText input={title} setInput={setTitle} placeholder={'제목을 입력해주세요.'} />
      <div className='mt-16 mb-12'>
        <ColorDropDown
          isOn={isColordropdown}
          onColorDropdownClick={() => {
            setIsColorDropdown(!isColordropdown);
          }}
          select={color}
          setSelect={setColor}
          setIsOn={setIsColorDropdown}
        />
      </div>
      <div className='relative w-911 h-160'>
        <textarea
          placeholder='내용을 입력하세요.'
          className='placehoder:caption-2 resize-none H4 focus:outline-none rounded-8 w-full h-full border-1 border-gray-grayscale30 p-8 placeholder:text-gray-grayscale30'
          minLength={1}
          maxLength={MAX_LENGTH}
          onInput={onTextareaHandler}
          value={contents}
          spellCheck={false}
        />
        <span className='Caption2 text-gray-grayscale20 absolute bottom-0 right-0 pb-6 pr-10'>
          {contents.length}/200
        </span>
      </div>
      <div className='absolute right-0 bottom-23'>
        <AlertBtn label={'취소'} onClick={onCancel} hoverColor={'gray'} />
        <AlertBtn
          label={'등록'}
          onClick={() => {
            if (title !== '' && startDate !== '' && endDate !== '') {
              onConfirm();
            }
          }}
          hoverColor={'blue'}
        />
      </div>
    </div>
  );
};

export default CalendarPromptAdd;