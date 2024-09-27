import React from 'react';
import BuildingPriceSetting from './BuildingPriceElement';

const BuildingPrice = () => {
  const buildingPriceSettings = [{ isActive: true }, { isActive: false }, { isActive: false }, { isActive: false }];
  return (
    <>
      {buildingPriceSettings.map((setting, index) => (
        <BuildingPriceSetting
          key={index}
          isActive={setting.isActive}
          setIsActive={(isActive: boolean) => {
            console.log(`Building ${index + 1} isActive:`, isActive);
          }}
        />
      ))}
    </>
  );
};

export default BuildingPrice;
