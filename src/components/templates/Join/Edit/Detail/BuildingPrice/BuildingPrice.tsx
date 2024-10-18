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

      const updatedIsActive = receivedTerms.map((term, index) => isActive[index] || term.termName !== '');

      if (receivedTerms.length < 4) {
        const additionalTerms = Array.from({ length: 4 - receivedTerms.length }, (_, idx) => ({
          termId: idx + receivedTerms.length + 1,
          termName: '',
          startDate: '',
          endDate: '',
          dormitoryTermResList: [{ dormitoryRoomTypeId: 0, dormitoryTermId: 0, price: 0 }],
        }));

        setTermResList([...receivedTerms, ...additionalTerms]);

        const additionalIsActive = [...updatedIsActive, ...Array(4 - receivedTerms.length).fill(false)];

        if (JSON.stringify(isActive) !== JSON.stringify(additionalIsActive)) {
          setIsActive(additionalIsActive);
        }
      } else {
        if (JSON.stringify(isActive) !== JSON.stringify(updatedIsActive)) {
          setIsActive(updatedIsActive);
        }
      }
    }
  }, [applicationData, setTermResList, setIsActive, isActive]);

  return (
    <>
      {termResList.map((_, index) => (
        <BuildingPriceElement key={index} index={index} isActive={isActive[index]} />
      ))}
    </>
  );
};

export default BuildingPrice;
