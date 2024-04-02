import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
import TextBoxes from '../../../atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';

type Props = {
  type: 'bonus' | 'minus';
};

const PenaltyBox = ({ type }: Props) => {
  const getClassByType = (type: string) => {
    switch (type) {
      case 'bonus':
        return {
          label: '상  점',
          color: 'bg-green-green20',
        };
      case 'minus':
        return {
          label: '벌  점',
          color: 'bg-red-red20',
        };
      default:
        return {
          label: '상  점',
          color: 'bg-green-green20',
        };
    }
  };
  const { label, color } = getClassByType(type);
  return (
    <div className='flex flex-col items-center'>
      <div className={`w-127 h-46 mb-33 ${color} rounded-20 flex items-center justify-center  text-white`}>{label}</div>
      <ul>
        <li className='flex items-center'>
          <div className='w-10 h-10 rounded-full bg-gray-grayscale50 mr-8' />
          <MediumInputText placeholder={'내역을 입력하세요.'} input={''} setInput={() => console.log('test')} />
          <div className='ml-16 flex items-center'>
            <TextBoxes input={'test'} setInput={() => console.log('test')} placeholder={'넘버'} type={'textBox7'} />
            <h1 className='ml-12 text-gray-grayscale50'>점</h1>
          </div>
        </li>
      </ul>
      <button className={`${color} text-white w-130 h-31 rounded-8 mt-39`}>+ 내역 추가</button>
    </div>
  );
};

export default PenaltyBox;
