import AlertBtn from '@/components/atoms/AllBtn/AlertBtn/AlertBtn';
import CalendarInputText from '@/components/atoms/InputText/CalendarInputText/CalendarInputText';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import ColorDropDown from '@/components/atoms/Prompt/CalendarPrompt/ColorDropDown';
import Wave from '@public/images/Wave.png';
import Image from 'next/image';

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

const CalendarPrompt = ({ onCancel, onConfirm }: Props) => {
  return (
    <div className='flex flex-col items-start'>
      <h1 className='H1 mb-20'>기간 설정</h1>
      <div className='flex items-center'>
        <div className='flex items-center w-208 h-34 justify-between'>
          <TextBoxes input={''} setInput={() => console.log('test')} placeholder={'연도'} type={'textBox3'} />
          <TextBoxes input={''} setInput={() => console.log('test')} placeholder={'월'} type={'textBox7'} />
          <TextBoxes input={''} setInput={() => console.log('test')} placeholder={'일'} type={'textBox7'} />
        </div>
        <Image src={Wave} width={18} height={6} alt='wave' className='mx-26' />
        <div className='flex items-center w-208 h-34 justify-between'>
          <TextBoxes input={''} setInput={() => console.log('test')} placeholder={'연도'} type={'textBox3'} />
          <TextBoxes input={''} setInput={() => console.log('test')} placeholder={'월'} type={'textBox7'} />
          <TextBoxes input={''} setInput={() => console.log('test')} placeholder={'일'} type={'textBox7'} />
        </div>
      </div>
      <h1 className='H1 mt-20 mb-12'>제목 설정</h1>
      <CalendarInputText input={''} setInput={() => console.log('test')} placeholder={'Caption_calendar'} />
      <div className='mt-16 mb-12'>
        <ColorDropDown
          isOn={true}
          select={''}
          setSelect={() => console.log('test')}
          setIsOn={() => console.log('test')}
        />
      </div>
      <div>
        <textarea
          placeholder='내용을 입력하세요.'
          className='placehoder:caption-2 H4 focus:outline-none rounded-8 relative w-911 h-180 border-1 border-gray-grayscale30 p-8 placeholder:text-gray-grayscale30'
        />
      </div>
      <div className='mt-23 flex ml-auto'>
        <AlertBtn label={'취소'} onClick={onCancel} hoverColor={'gray'} />
        <AlertBtn label={'확인'} onClick={onConfirm} hoverColor={'blue'} />
      </div>
    </div>
  );
};

export default CalendarPrompt;
