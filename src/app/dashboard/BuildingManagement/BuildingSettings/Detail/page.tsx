'use client';

import { postBuildingSettingImage } from '@/apis/BuildingSetting';
import AddBuildingBtn from '@/components/atoms/AllBtn/AddBuildingBtn/AddBuildingBtn';
import AddRoomBtn from '@/components/atoms/AllBtn/AddRoomBtn/AddRoomBtn';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import BuildingSelectImageBtn from '@/components/atoms/AllBtn/BuildingSelectImageBtn/BuildingSelectImageBtn';
import BuildingSetBtn from '@/components/atoms/AllBtn/BuildingSetBtn/BuildingSetBtn';
import RoomBtn from '@/components/atoms/AllBtn/RoomBtn/RoomBtn';
import BuildingNameInputText from '@/components/atoms/InputText/BuildingNameInputText/BuildingNameInputText';
import BuildingSettingsList from '@/components/organisms/BuildingSettings/BuildingSettingsList';
import { buildingSettingIdState } from '@/recoil/buildingSetting';
import { BuildingSettingsDetailResponseFloorAndRoomNumberRes } from '@/types/building';
import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

const Page = () => {
  const buildingId = useRecoilValue(buildingSettingIdState);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [buildingInfo, setBuildingInfo] = useState<{ name: string; imageUrl: string | null }>({
    name: '',
    imageUrl: null,
  });
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(id) ? prevCheckedItems.filter((item) => item !== id) : [...prevCheckedItems, id],
    );
  };

  const [existingFloor, setExistingFloor] = useState<BuildingSettingsDetailResponseFloorAndRoomNumberRes[]>([
    {
      floor: 1,
      startRoomNumber: 1,
      endRoomNumber: 30,
    },
    {
      floor: 2,
      startRoomNumber: 1,
      endRoomNumber: 30,
    },
  ]); //기존에 있던 층

  const [newFloor, setNewFloor] = useState<BuildingSettingsDetailResponseFloorAndRoomNumberRes[]>([
    {
      floor: 3,
      startRoomNumber: 1,
      endRoomNumber: 30,
    },
  ]); //추가된 층

  const [selectedFloor, setSelectedFloor] = useState({
    floor: 2,
    startRoomNumber: 1,
    endRoomNumber: 30,
  }); //선택된 층

  const [selectFloor, setSelectFloor] = useState(0);
  const [selectFilter, setSelectFilter] = useState(0);
  const [completedFilter, setCompletedFilter] = useState<Number[]>([]);

  const handleSetFloorInput = (value: string) => {
    const newFloor = parseInt(value, 10);
    if (isNaN(newFloor)) return;

    setNewFloor((prev) => {
      const existingItemIndex = prev.findIndex((item) => item.floor === newFloor);
      if (existingItemIndex !== -1) {
        const updatedList = prev.map((item, index) =>
          index === existingItemIndex ? { ...item, floor: newFloor } : item,
        );
        return updatedList;
      } else {
        // 새 항목 추가
        return [...prev, { floor: newFloor, startRoomNumber: 1, endRoomNumber: 30 }];
      }
    });
  };

  const onAddPicture = () => {
    inputFileRef.current?.click();
  };

  //건물 이미지 변경
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log('파일이 선택되지 않았습니다.');
      return;
    }

    const file = e.target.files[0];

    const imageUrl = URL.createObjectURL(file);
    setBuildingInfo((prev) => ({
      ...prev,
      imageUrl: imageUrl,
    }));
    // const response = await postBuildingSettingImage(buildingId, file);
    // if (response.check) {
    //   setBuildingInfo((prev) => ({
    //     ...prev,
    //     imageUrl: imageUrl,
    //   }));
    // }
  };

  return (
    <div className='flex flex-col relative w-[1331px]'>
      <div className='flex justify-center w-full mb-30'>
        <BuildingNameInputText
          placeholder='건물명'
          input={buildingInfo.name}
          setInput={() => {
            setBuildingInfo((prev) => ({
              ...prev,
              name: buildingInfo.name,
            }));
          }}
        />
      </div>
      <div className='flex'>
        <div className='flex flex-col items-center'>
          <div className='w-381 h-241 flex items-center justify-center bg-gray-grayscale5 rounded-8'>
            {buildingInfo.imageUrl ? (
              <BuildingSelectImageBtn
                image={buildingInfo.imageUrl}
                name={buildingInfo.imageUrl}
                onClick={onAddPicture}
              />
            ) : (
              <AddBuildingBtn onClick={onAddPicture} />
            )}
            <input
              id='fileInput'
              type='file'
              accept='image/*'
              style={{ display: 'none', visibility: 'hidden' }}
              ref={inputFileRef}
              onChange={handleFileChange}
            />
          </div>
          <div className='mt-28 flex flex-col items-center'>
            <h3 className='H3 text-gray-grayscale50 text-center'>호실 개수</h3>
            <hr className='w-331 border-gray-grayscale50 mt-15 mb-8' />
            <div className='flex flex-col mr-15 gap-12'>
              {existingFloor.map((data, index) => {
                return (
                  <RoomBtn
                    key={index}
                    selected={selectedFloor === data}
                    floorInput={data.floor?.toString() || ''}
                    setFloorInput={(value) => handleSetFloorInput(value)}
                    endInput={data.endRoomNumber?.toString() || ''}
                    setEndInput={function (id: string): void {
                      throw new Error('Function not implemented.');
                    }}
                    isOne={index === 0}
                    pressOkBtn={true}
                    hovered={false}
                  />
                );
              })}
              {newFloor.map((data, index) => {
                return (
                  <RoomBtn
                    key={index}
                    selected={selectedFloor === data}
                    floorInput={data.floor?.toString() || ''}
                    setFloorInput={(value) => handleSetFloorInput(value)}
                    endInput={data.endRoomNumber?.toString() || ''}
                    setEndInput={function (id: string): void {
                      throw new Error('Function not implemented.');
                    }}
                    isOne={false}
                    pressOkBtn={false}
                    hovered={false}
                  />
                );
              })}
            </div>
            <div className='h-13'></div>
            <AddRoomBtn
              onClick={() =>
                setExistingFloor([
                  ...existingFloor,
                  { floor: parseInt(''), startRoomNumber: 1, endRoomNumber: parseInt('') },
                ])
              }
            />
          </div>
        </div>
        <div className='w-33'></div>
        <div>
          <div className='w-917 h-121 shadow2 rounded-7 bg-white items-center flex justify-between pl-40 pr-23 px-13 mb-30'>
            <h1 className='H1 text-blue-blue30'>필터</h1>
            <div>
              <div className='flex gap-22'>
                <BuildingSetBtn
                  label='남자/여자'
                  detail={false}
                  selected={selectFilter === 1}
                  done={completedFilter.includes(1)}
                />
                <BuildingSetBtn
                  label='호실 타입'
                  detail={false}
                  selected={selectFilter === 2}
                  done={completedFilter.includes(2)}
                />
                <BuildingSetBtn
                  label='열쇠 수령 여부'
                  detail={false}
                  selected={selectFilter === 3}
                  done={completedFilter.includes(3)}
                />
                <BuildingSetBtn
                  label='비활성화'
                  detail={false}
                  selected={selectFilter === 4}
                  done={completedFilter.includes(4)}
                />
              </div>
              <div className='h-53 flex gap-15 justify-end items-end '>
                {selectFilter === 1 ? (
                  <>
                    <BuildingSetBtn label='남자' detail={true} selected={false} />
                    <BuildingSetBtn label='여자' detail={true} selected={false} />
                  </>
                ) : selectFilter === 2 ? (
                  <>
                    <BuildingSetBtn label='1인실' detail={true} selected={false} />
                    <BuildingSetBtn label='2인실' detail={true} selected={false} />
                    <BuildingSetBtn label='3인실' detail={true} selected={false} />
                    <BuildingSetBtn label='4인실' detail={true} selected={false} />
                    <BuildingSetBtn label='5인실' detail={true} selected={false} />
                    <BuildingSetBtn label='6인실' detail={true} selected={false} />
                  </>
                ) : selectFilter === 3 ? (
                  <>
                    <BuildingSetBtn label='수령' detail={true} selected={false} />
                    <BuildingSetBtn label='미수령' detail={true} selected={false} />
                  </>
                ) : selectFilter === 4 ? (
                  <>
                    <BtnLargeVariant label='활성화' disabled={false} variant='green' />
                    <BtnLargeVariant label='비활성화' disabled={false} variant='red' />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <BuildingSettingsList list={[]} checkedItems={checkedItems} handleCheckboxChange={handleCheckboxChange} />
        </div>
      </div>
      <div className='flex justify-between items-start mt-21'>
        <BtnMidVariant label='등록' disabled={false} variant='blue' />
        <BtnMiniVariant label='저장' disabled={false} variant='blue' selected={false} />
      </div>
    </div>
  );
};

export default Page;
