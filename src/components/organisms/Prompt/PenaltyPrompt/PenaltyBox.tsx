'use client';
import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import { penaltyPromptBonusList, penaltyPromptMinusList } from '@/recoil';
import { useRecoilState } from 'recoil';

type Props = {
  type: 'bonus' | 'minus';
  addTextBox: () => void;
};

const PenaltyBox = ({ type, addTextBox }: Props) => {
  const [bonusLists, setBonusLists] = useRecoilState(penaltyPromptBonusList);
  const [minusLists, setMinusLists] = useRecoilState(penaltyPromptMinusList);

  const getClassByType = (type: string) => {
    switch (type) {
      case 'bonus':
        return {
          label: '상     점',
          color: 'bg-green-green20',
          lists: bonusLists,
        };
      case 'minus':
        return {
          label: '벌     점',
          color: 'bg-red-red20',
          lists: minusLists,
        };
      default:
        return {
          label: '상  점',
          color: 'bg-green-green20',
          lists: bonusLists,
        };
    }
  };
  const { label, color, lists } = getClassByType(type);

  return (
    <div className='flex flex-col items-center'>
      <div className={`H1 w-127 h-46 mb-33 ${color} rounded-20 flex items-center justify-center  text-white`}>
        {label}
      </div>
      <ul>
        {lists.map((i, index) => (
          <li key={index} className='flex items-center mb-19'>
            <div className='w-10 h-10 rounded-full bg-gray-grayscale50 mr-8' />
            <MediumInputText
              placeholder={'내역을 입력하세요.'}
              input={i.content || ''}
              setInput={() => console.log(`${i}번째 input`)}
            />
            <div className='ml-16 flex items-center'>
              <TextBoxes
                input={i.score?.toString() || ''}
                setInput={() => console.log(`${i}번째 input`)}
                placeholder={'넘버'}
                type={'textBox7'}
              />
              <h1 className='H4 ml-12 text-gray-grayscale50'>점</h1>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={addTextBox} className={`${color} text-white w-130 h-31 rounded-8 mt-39 H4`}>
        + 내역 추가
      </button>
    </div>
  );
};

export default PenaltyBox;
