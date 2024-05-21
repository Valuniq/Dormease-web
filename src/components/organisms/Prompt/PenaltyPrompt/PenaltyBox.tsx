'use client';
import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import { useRecoilState } from 'recoil';
import PromptOutBtn from '@/components/atoms/AllBtn/PromptOutBtn/PromptOutBtn';
import { useState } from 'react';
import { promptBonusState, promptClientBonusState, promptClientMinusState, promptMinusState } from '@/recoil';

type Props = {
  type: 'BONUS' | 'MINUS';
};

const PenaltyBox = ({ type }: Props) => {
  const [bonusLists, setBonusLists] = useRecoilState(promptBonusState);
  const [minusLists, setMinusLists] = useRecoilState(promptMinusState);
  const [tempBonusLists, setTempBonusLists] = useRecoilState(promptClientBonusState);
  const [tempMinusLists, setTempMinusLists] = useRecoilState(promptClientMinusState);

  const [hoveredPointId, setHoveredPointId] = useState<number>();
  const handleMouseEnter = (tempId: number) => {
    setHoveredPointId(tempId);
  };
  const handleMouseLeave = () => {
    setHoveredPointId(-999);
  };

  const addNewItem = () => {
    const newId = Date.now(); // 고유한 id 생성
    if (type === 'BONUS') {
      setTempBonusLists((prev) => [...prev, { pointId: newId, content: '', score: 0, pointType: 'BONUS' }]);
    } else {
      setTempMinusLists((prev) => [...prev, { pointId: newId, content: '', score: 0, pointType: 'MINUS' }]);
    }
  };

  const handleInputChange = (id: number, content: string, pointType: 'BONUS' | 'MINUS') => {
    if (pointType === 'BONUS') {
      setBonusLists((prev) => {
        const newLists = prev.map((item) => (item.pointId === id ? { ...item, content, pointType } : item));
        return newLists;
      });
      setTempBonusLists((prev) => {
        const newLists = prev.map((item) => (item.pointId === id ? { ...item, content, pointType } : item));
        return newLists;
      });
    } else {
      setMinusLists((prev) => {
        const newLists = prev.map((item) => (item.pointId === id ? { ...item, content, pointType } : item));
        return newLists;
      });
      setTempMinusLists((prev) => {
        const newLists = prev.map((item) => (item.pointId === id ? { ...item, content, pointType } : item));
        return newLists;
      });
    }
  };

  const handleInputNumberChange = (id: number, score: string, pointType: 'BONUS' | 'MINUS') => {
    let truncatedScore = score;
    if (score.length > 3) {
      truncatedScore = score.slice(0, 3);
    }
    if (pointType === 'BONUS') {
      setBonusLists((prev) => {
        const newLists = prev.map((item) =>
          item.pointId === id ? { ...item, score: parseInt(truncatedScore), pointType } : item,
        );
        return newLists;
      });
      setTempBonusLists((prev) => {
        const newLists = prev.map((item) =>
          item.pointId === id ? { ...item, score: parseInt(truncatedScore), pointType } : item,
        );
        return newLists;
      });
    } else {
      setMinusLists((prev) => {
        const newLists = prev.map((item) =>
          item.pointId === id ? { ...item, score: parseInt(truncatedScore), pointType } : item,
        );
        return newLists;
      });
      setTempMinusLists((prev) => {
        const newLists = prev.map((item) =>
          item.pointId === id ? { ...item, score: parseInt(truncatedScore), pointType } : item,
        );
        return newLists;
      });
    }
  };

  // 상/벌점 타입에 따른 라벨, 색상 가져오기
  const { label, color } =
    type === 'BONUS'
      ? { label: '상     점', color: 'bg-green-green20' }
      : { label: '벌     점', color: 'bg-red-red20' };

  const handleDelete = async (pointId: number) => {
    if (type === 'BONUS') {
      setBonusLists((prev) => prev.filter((item) => item.pointId !== pointId));
      setTempBonusLists((prev) => prev.filter((item) => item.pointId !== pointId));
    } else {
      setMinusLists((prev) => prev.filter((item) => item.pointId !== pointId));
      setTempMinusLists((prev) => prev.filter((item) => item.pointId !== pointId));
    }
  };
  return (
    <div className='flex flex-col items-center'>
      <div className={`H1 w-127 h-46 mb-33 ${color} rounded-20 flex items-center justify-center  text-white`}>
        {label}
      </div>
      <ul className='w-471'>
        {(type === 'BONUS' ? bonusLists.concat(tempBonusLists) : minusLists.concat(tempMinusLists)).map((i, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(i.pointId)}
            onMouseLeave={handleMouseLeave}
            key={index}
            className='box-border flex items-center pl-28 h-45 hover:bg-gray-grayscale10 hover-transition cursor-pointer mb-17 rounded-l-10 rounded-r-50  '
          >
            <div className='w-10 h-10 rounded-full bg-gray-grayscale50 mr-8' />
            <MediumInputText
              placeholder={'내역을 입력하세요.'}
              input={i.content || ''}
              setInput={(value) => handleInputChange(i.pointId, value, type)}
            />
            <div className='ml-16 flex items-center mr-20'>
              <TextBoxes
                input={i.score?.toString() || ''}
                setInput={(value) => handleInputNumberChange(i.pointId, value, type)}
                placeholder={'넘버'}
                type={'textBox7'}
              />
              <h1 className='H4 ml-12 text-gray-grayscale50'>점</h1>
            </div>
            {hoveredPointId === i.pointId && <PromptOutBtn onClick={() => handleDelete(i.pointId)} />}
          </div>
        ))}
      </ul>
      <button onClick={addNewItem} className={`${color} text-white w-130 h-31 rounded-8 mt-39 H4`}>
        + 내역 추가
      </button>
    </div>
  );
};

export default PenaltyBox;
