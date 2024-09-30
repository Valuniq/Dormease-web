import React from 'react';
import { useRecoilState } from 'recoil';
import { termReqIsActiveState, termReqListState } from '@/recoil/join'; // 경로 수정 필요
import BuildingPriceElement from './BuildingPriceElement';

const BuildingPrice = () => {
  const [termReqList] = useRecoilState(termReqListState);
  const [isActive] = useRecoilState(termReqIsActiveState);

  return (
    <>
      {termReqList.map((_, index) => (
        <BuildingPriceElement key={index} index={index} isActive={isActive[index]} />
      ))}
    </>
  );
};

export default BuildingPrice;
