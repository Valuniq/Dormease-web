'use client';
import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { usePointsDetail } from '@/apis/point';
import { useState } from 'react';

type Props = {
  type: 'BONUS' | 'MINUS';
  onSelectedChange: (selectedPoints: number[]) => void; // 선택된 상벌점 ID들을 부모 컴포넌트로 전달하는 함수
};
const PenaltyBox = ({ type, onSelectedChange }: Props) => {
  // 상벌점 내역 조회
  const { data: pointsDetailData } = usePointsDetail();
  const bonusPoints = pointsDetailData?.information.filter((item) => item.pointType === 'BONUS') || [];
  const minusPoints = pointsDetailData?.information.filter((item) => item.pointType === 'MINUS') || [];

  const [selectedPoints, setSelectedPoints] = useState<number[]>([]); // 선택된 상벌점 ID들을 저장

  const handleCheckboxChange = (pointId: number, isChecked: boolean) => {
    const updatedSelectedPoints = isChecked
      ? [...selectedPoints, pointId]
      : selectedPoints.filter((id) => id !== pointId);

    setSelectedPoints(updatedSelectedPoints);
    onSelectedChange(updatedSelectedPoints); // 선택된 상벌점 ID들을 부모 컴포넌트로 전달
  };

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
        {(type === 'BONUS' ? bonusPoints : minusPoints).map((i, index) => (
          <div key={index} className='box-border flex items-center  pl-28 h-45  mb-17'>
            <div className='w-10 h-10 rounded-full bg-gray-grayscale50 mr-8' />
            <MediumInputText placeholder={'내역을 입력하세요.'} input={i.content} />
            <div className='ml-28 w-50 flex justify-center items-center mr-20 whitespace-nowrap'>
              <h1 className='H4 align-center  text-gray-grayscale50'>{i.score}점</h1>
            </div>
            <Checkbox
              isChecked={selectedPoints.includes(i.pointId)}
              setIsChecked={(checked) => handleCheckboxChange(i.pointId, checked)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PenaltyBox;
