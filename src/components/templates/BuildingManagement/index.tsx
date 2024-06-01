'use client';

import {
  getBuildingFloorList,
  getBuildingInfoList,
  getBuildingRoomList,
  putBuildingMemo,
} from '@/apis/BuildingManagement';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import SelectBuildingDropdown from '@/components/atoms/Dropdown/SelectBuildingDropdown/SelectBuildingDropdown';
import SelectFloorDropdown from '@/components/atoms/Dropdown/SelectFloorDropdown/SelectFloorDropdown';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import BuildingManagementList from '@/components/organisms/BuildingManagement/BuildingManagementList';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';
import {
  BuildingManagementFloorResponseInformation,
  BuildingManagementInfoResponseInformation,
  BuildingManagementResponseInformation,
  BuildingManagementRoomResponseInformation,
} from '@/types/buildingm';
import Memo from '@public/images/Memo.png';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Props = {
  buildingList: BuildingManagementResponseInformation[];
};

const BuildingManagementTemplates = ({ buildingList }: Props) => {
  const [mounted, setMounted] = useState(false);
  const [buildingIsOn, setBuildingIsOn] = useState(false);
  const [selectBuilding, setSelectBuilding] = useState(buildingList[0]);
  const [floorList, setFloorList] = useState<BuildingManagementFloorResponseInformation[]>([]);
  const [floorIsOn, setFloorIsOn] = useState(false);
  const [selectFloor, setSelectFloor] = useState(0);
  const [roomList, setRoomList] = useState<BuildingManagementRoomResponseInformation[]>();
  const [buildingInfo, setBuildingInfo] = useState<BuildingManagementInfoResponseInformation>({
    name: '',
    imageUrl: null,
    fullRoomCount: 0,
    roomCount: 0,
    currentPeopleCount: 0,
    dormitorySize: 0,
    memo: null,
  });
  const [memoText, setMemoText] = useState(buildingInfo.memo);
  const [memoModal, setMemoModal] = useState(false);

  //건물 정보 불러오기
  const fetchBuildingInfo = async (id: number) => {
    const buildingInfoList = await getBuildingInfoList(id);
    if (buildingInfoList.check) {
      setBuildingInfo(buildingInfoList.information);
      setMemoText(buildingInfoList.information.memo);
    } else {
      setBuildingInfo({
        name: '',
        imageUrl: null,
        fullRoomCount: 0,
        roomCount: 0,
        currentPeopleCount: 0,
        dormitorySize: 0,
        memo: null,
      });
    }
  };

  useEffect(() => {
    const initialFetch = async () => {
      setMounted(true);
      await fetchBuildingInfo(selectBuilding.id);
    };

    initialFetch();
  }, [selectBuilding]);

  //건물 층 목록 불러오기
  const getFloor = async (id: number) => {
    const buildingFloorList = await getBuildingFloorList(id);
    setFloorList(buildingFloorList.information);
    //빌딩에 층이 없을 때는 0(층), 있을 때는 999(전체)
    if (buildingFloorList.information.length > 0) {
      setSelectFloor(999);
      getRoom(id, 999);
    } else {
      setSelectFloor(0);
      getRoom(id, 0);
    }
  };

  //호실 정보 불러오기
  const getRoom = async (building: number, floor: number) => {
    const buildingRoomList = await getBuildingRoomList(building, floor);
    setRoomList(buildingRoomList.information);
  };

  //메모 저장
  const onSaveMemo = async () => {
    if (memoText !== null) {
      const buildingMemo = await putBuildingMemo(selectBuilding.id, memoText);
      if (buildingMemo.check) {
        setMemoModal(!memoModal);
      }
    }
  };

  return (
    <>
      {mounted && (
        <>
          <div className='flex'>
            <div>
              {buildingInfo.imageUrl ? (
                <Image
                  className='rounded-8 w-381 h-241 cursor-pointer shadow2 mb-35'
                  src={buildingInfo.imageUrl}
                  alt='Building'
                  objectFit='fill'
                />
              ) : (
                <div className='rounded-8 w-381 h-241 cursor-pointer shadow2 mb-35 bg-gray-grayscale10'></div>
              )}
              <table>
                <tbody className='H4 text-left'>
                  <tr>
                    <td className='text-gray-grayscale30 border-r-1 pb-20'>건 물 명</td>
                    <td className='text-gray-grayscale50 pl-15 pb-20'>{buildingInfo.name}</td>
                  </tr>
                  <tr>
                    <td className='text-gray-grayscale30 border-r-1 pb-20'>방 개 수</td>
                    <td className='text-gray-grayscale50 pl-15 pb-20'>
                      {buildingInfo.fullRoomCount}/{buildingInfo.roomCount}
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-grayscale30 border-r-1 pr-15'>수용인원</td>
                    <td className='text-gray-grayscale50 pl-15'>
                      {buildingInfo.currentPeopleCount}/{buildingInfo.dormitorySize}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='mt-30'>
                <div className='w-380 h-350 bg-yellow-memoyellow flex flex-col items-center pt-18 shadow2'>
                  <Image src={Memo} alt='Memo' width={86.49} height={20.34} />
                  <div className='text-gray-grayscale50 mt-20 w-318 relative'>
                    <textarea
                      className='H4-caption leading-[34px] w-full h-204 bg-yellow-memoyellow border-none outline-none scrollbar-table resize-none'
                      value={memoText === null ? '' : memoText}
                      onChange={(e) => setMemoText(e.target.value)}
                    />
                    <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-28'></hr>
                    <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-63'></hr>
                    <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-98'></hr>
                    <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-133'></hr>
                    <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-168'></hr>
                    <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-[203px]'></hr>
                  </div>
                  <div className='mt-20'>
                    <BtnMiniVariant
                      label='저장'
                      disabled={memoText === null || memoText === buildingInfo.memo}
                      selected={false}
                      variant='blue'
                      onClick={onSaveMemo}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='border-r-1 mx-29 h-790'></div>
            <div className='mt-20'>
              <BuildingManagementList
                listClick={0}
                onListClick={function (listClick: number): void {
                  throw new Error('Function not implemented.');
                }}
                onStudentClick={function (schoolNumber: string): void {
                  throw new Error('Function not implemented.');
                }}
                selectStudents={[]}
                roomList={roomList}
                studentList={[]}
              />
              <div className='flex justify-end mt-21'>
                <BtnMidVariant label='수기배정' disabled={false} variant='blue' />
              </div>
            </div>
          </div>
          <div className='absolute top-0 right-0'>
            <div className='flex gap-19 mt-14'>
              <SelectBuildingDropdown
                isOn={buildingIsOn}
                select={selectBuilding}
                list={buildingList}
                setSelect={(id, name) => {
                  setSelectBuilding({ id, name });
                  getFloor(id);
                  setFloorIsOn(false);
                  fetchBuildingInfo(id);
                }}
                setIsOn={() => setBuildingIsOn(!buildingIsOn)}
              />
              <SelectFloorDropdown
                list={floorList}
                isOn={floorIsOn}
                setIsOn={() => setFloorIsOn(!floorIsOn)}
                select={selectFloor}
                setSelect={(floor) => {
                  setSelectFloor(floor);
                  getRoom(selectBuilding.id, floor);
                }}
              />
            </div>
          </div>
          {memoModal && (
            <BackDrop isOpen={memoModal}>
              <AlertPrompt
                variant={'blue'}
                label={'메모가 저장되었습니다.'}
                onConfirm={() => setMemoModal(!memoModal)}
              />
            </BackDrop>
          )}
        </>
      )}
    </>
  );
};

export default BuildingManagementTemplates;
