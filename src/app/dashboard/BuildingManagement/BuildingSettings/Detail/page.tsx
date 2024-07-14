'use client';

import { postBuildingSettingImage, useBuildingDetail } from '@/apis/BuildingSetting';
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
import {
  BuildingSettingDetailResponseInformation,
  BuildingSettingDetailResponseInformationFloor,
} from '@/types/building';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

const Page = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const buildingId = useRecoilValue(buildingSettingIdState);
  const { data, error, mutate } = useBuildingDetail(buildingId);
  const [buildingInfo, setBuildingInfo] = useState<BuildingSettingDetailResponseInformation>({
    id: buildingId,
    name: '',
    imageUrl: null,
    floorAndRoomNumberRes: [],
  }); //건물 상세 조회
  const [newFloor, setNewFloor] = useState<BuildingSettingDetailResponseInformationFloor[]>([]); //추가한 층
  const [selectedFloor, setSelectedFloor] = useState<BuildingSettingDetailResponseInformationFloor>({
    floor: 2,
    startRoomNumber: 1,
    endRoomNumber: 1,
  }); //선택된 층
  const [selectFilter, setSelectFilter] = useState(0);
  const [completedFilter, setCompletedFilter] = useState<Number[]>([]);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    if (data && data.information) {
      setBuildingInfo(data.information);
    }
  }, [data]);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(id) ? prevCheckedItems.filter((item) => item !== id) : [...prevCheckedItems, id],
    );
  };

  const handleSetFloorInput = (index: number, field: 'floor' | 'endRoomNumber', value: string, isNew: boolean) => {
    if (isNew) {
      setNewFloor((prev) => {
        const updatedNewFloor = [...prev];
        updatedNewFloor[index] = {
          ...updatedNewFloor[index],
          [field]: parseInt(value, 10) || '',
        };
        return updatedNewFloor;
      });
    } else {
      setBuildingInfo((prev) => {
        const updatedFloorAndRoomNumberRes = [...prev.floorAndRoomNumberRes];
        updatedFloorAndRoomNumberRes[index] = {
          ...updatedFloorAndRoomNumberRes[index],
          [field]: parseInt(value, 10) || '',
        };
        return {
          ...prev,
          floorAndRoomNumberRes: updatedFloorAndRoomNumberRes,
        };
      });
    }
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
    const response = await postBuildingSettingImage(buildingId, file);
    if (response.check) {
      setBuildingInfo((prev) => ({
        ...prev,
        imageUrl: imageUrl,
      }));
    }
  };

  return (
    <div className='flex flex-col relative w-[1331px]'>
      <div className='flex justify-center w-full mb-30'>
        <BuildingNameInputText
          placeholder='건물명'
          input={buildingInfo.name}
          setInput={(newName: string) => {
            setBuildingInfo((prev) => ({
              ...prev,
              name: newName,
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
              {buildingInfo.floorAndRoomNumberRes.map((data, index) => (
                <RoomBtn
                  key={index}
                  selected={selectedFloor.floor === data.floor && selectedFloor.endRoomNumber === data.endRoomNumber}
                  floorInput={data.floor?.toString() || ''}
                  setFloorInput={(value) => {
                    handleSetFloorInput(index, 'floor', value, false);
                  }}
                  endInput={data.endRoomNumber?.toString() || ''}
                  setEndInput={(value) => {
                    handleSetFloorInput(index, 'endRoomNumber', value, false);
                  }}
                  isOne={index === 0}
                  pressOkBtn={true}
                  hovered={false}
                />
              ))}
              {newFloor.map((data, index) => {
                return (
                  <RoomBtn
                    key={index}
                    selected={selectedFloor === data}
                    floorInput={data.floor?.toString() || ''}
                    setFloorInput={(value) => {
                      handleSetFloorInput(index, 'floor', value, true);
                    }}
                    endInput={data.endRoomNumber?.toString() || ''}
                    setEndInput={(value) => {
                      handleSetFloorInput(index, 'endRoomNumber', value, true);
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
                setNewFloor([...newFloor, { floor: parseInt(''), startRoomNumber: 1, endRoomNumber: parseInt('') }])
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
      <div className='flex mt-21'>
        <div className='flex-1'></div>
        <div className='flex-1 flex justify-center'>
          <BtnMidVariant label='등록' disabled={!buildingInfo.name} variant='blue' />
        </div>
        <div className='flex-1 flex justify-end'>
          <BtnMiniVariant label='저장' disabled={false} variant='blue' selected={false} />
        </div>
      </div>
    </div>
  );
};

export default Page;
