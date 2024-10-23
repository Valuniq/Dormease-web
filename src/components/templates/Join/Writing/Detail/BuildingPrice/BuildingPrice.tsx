import React from 'react';
import { useRecoilState } from 'recoil';
import { termReqIsActiveState, termReqListState } from '@/recoil/join';
import BuildingPriceElement from './BuildingPriceElement';

const BuildingPrice = () => {
  const [termReqList] = useRecoilState(termReqListState);
  const [isActive, setIsActive] = useRecoilState(termReqIsActiveState);

  const toggleIsActive = (index: number) => {
    setIsActive((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      console.log(`Toggling isActive for index ${index}:`, updated);
      return updated;
    });
  };

  return (
    <>
      {termReqList.map((_, index) => (
        <BuildingPriceElement key={index} index={index} isActive={isActive[index]} onToggleActive={toggleIsActive} />
      ))}
    </>
  );
};

export default BuildingPrice;
