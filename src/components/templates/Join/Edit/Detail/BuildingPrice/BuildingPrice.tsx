'use client';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { nowJoinApplicationState, termResIsActiveState, termResListState } from '@/recoil/join';
import BuildingPriceElement from './BuildingPriceElement';

const BuildingPrice = () => {
  const [applicationData] = useRecoilState(nowJoinApplicationState);
  const [termResList, setTermResList] = useRecoilState(termResListState);
  const [isActive, setIsActive] = useRecoilState(termResIsActiveState);

  useEffect(() => {
    if (applicationData) {
      const receivedTerms = applicationData.termResList;
      const updatedIsActive = receivedTerms.map((term, index) => term.termName !== '');

      const additionalTermsCount = 4 - receivedTerms.length;
      if (additionalTermsCount > 0) {
        const additionalTerms = Array.from({ length: additionalTermsCount }, (_, idx) => ({
          termId: -(idx + 1),
          termName: '',
          startDate: '',
          endDate: '',
          dormitoryTermResList: [{ dormitoryRoomTypeId: 0, dormitoryTermId: 0, price: 0 }],
        }));

        setTermResList([...receivedTerms, ...additionalTerms]);
        setIsActive([...updatedIsActive, ...Array(additionalTermsCount).fill(false)]);
      } else {
        setIsActive(updatedIsActive);
      }
    }
  }, [applicationData, setTermResList, setIsActive]);
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
      {termResList.map((_, index) => (
        <BuildingPriceElement key={index} index={index} isActive={isActive[index]} onToggleActive={toggleIsActive} />
      ))}
    </>
  );
};

export default BuildingPrice;
