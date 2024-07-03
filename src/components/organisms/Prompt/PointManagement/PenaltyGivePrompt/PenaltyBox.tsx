'use client';
import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import { useRecoilValue } from 'recoil';
import { promptBonusState, promptMinusState } from '@/recoil';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';

type Props = {
  type: 'BONUS' | 'MINUS';
};

const PenaltyBox = ({ type }: Props) => {
  const bonusLists = useRecoilValue(promptBonusState);
  const minusLists = useRecoilValue(promptMinusState);

  // 상/벌점 타입에 따른 라벨, 색상 가져오기
  const { label, color } =
    type === 'BONUS'
      ? { label: '상     점', color: 'bg-green-green20' }
      : { label: '벌     점', color: 'bg-red-red20' };

  return (
    <div className='flex flex-col items-center'>
      <div className={`H1 w-127 h-46 mb-33 ${color} rounded-20 flex items-center justify-center  text-white`}>
        {label}
      </div>
      <ul className='w-471'>
        {(type === 'BONUS' ? bonusLists : minusLists).map((i, index) => (
          <div key={index} className='box-border flex items-center  pl-28 h-45  mb-17'>
            <div className='w-10 h-10 rounded-full bg-gray-grayscale50 mr-8' />
            <MediumInputText placeholder={'내역을 입력하세요.'} input={i.content} />
            <div className='ml-28 w-50 flex justify-center items-center mr-20 '>
              <h1 className='H4 align-center  text-gray-grayscale50'>{i.score}점</h1>
            </div>
            <Checkbox
              isChecked={false}
              setIsChecked={function (isChecked: boolean): void {
                throw new Error('Function not implemented.');
              }}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PenaltyBox;
