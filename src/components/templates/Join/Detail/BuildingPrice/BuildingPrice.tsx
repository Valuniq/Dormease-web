import React, { useState } from 'react';
import BuildingPriceSetting from './BuildingPriceElement';

const BuildingPrice = () => {
  // 각 BuildingPriceSetting에 대해 isActive 상태 관리
  const [buildingPriceSettings, setBuildingPriceSettings] = useState([
    { isActive: true },
    { isActive: false },
    { isActive: false },
    { isActive: false },
  ]);

  // isActive 상태 변경 핸들러
  const handleSetIsActive = (index: number, isActive: boolean) => {
    setBuildingPriceSettings((prevSettings) =>
      prevSettings.map((setting, i) => (i === index ? { ...setting, isActive } : setting)),
    );
  };

  return (
    <>
      {buildingPriceSettings.map((setting, index) => (
        <BuildingPriceSetting
          key={index}
          isActive={setting.isActive}
          setIsActive={(isActive: boolean) => handleSetIsActive(index, isActive)}
        />
      ))}
    </>
  );
};

export default BuildingPrice;
