'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import SelectBuildingDropdown from '@/components/atoms/Dropdown/SelectBuildingDropdown/SelectBuildingDropdown';
import SelectFloorDropdown from '@/components/atoms/Dropdown/SelectFloorDropdown/SelectFloorDropdown';
import BuildingManagementList from '@/components/organisms/BuildingManagement/BuildingManagementList';
import Memo from '@public/images/Memo.png';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  list: {
    roomId: number;
    roomNumber: number;
    roomSize: number;
    gender: string;
    currentPeople: number;
  }[];
  studentList: {
    schoolNumber: string;
    name: string;
    phoneNumber: string;
  }[];
  listClick: number;
  onListClick: (roomId: number) => void;
  onStudentClick: (schoolNumber: string) => void;
  selectStudents: string[];

  isOnBuilding: boolean;
  selectBuilding: string;
  buildingList: string[];
  isOnFloor: boolean;
  selectFloor: string;
  floorList: string[];
  image: StaticImageData;

  building: string;
  roomCount: number;
  roomSize: number;
  capacityCount: number;
  capacitySize: number;
};

const BuildingManagement = ({
  list,
  studentList,
  selectStudents,
  listClick,
  onListClick,
  onStudentClick,
  isOnBuilding,
  selectBuilding,
  buildingList,
  isOnFloor,
  selectFloor,
  floorList,
  image,
  building,
  roomCount,
  roomSize,
  capacityCount,
  capacitySize,
}: Props) => {
  return (
    <div className='flex flex-col relative w-[1174px]'>
      <div className='flex items-center mb-8'>
        <div className='flex justify-center w-full'>
          <h1 className='H0 text-gray-grayscale50 text-nowrap'>건물관리</h1>
        </div>
      </div>
      <div className='flex'>
        <div>
          <Image
            className='rounded-8 w-381 h-241 cursor-pointer shadow2 mb-35'
            src={image}
            alt='Building'
            objectFit='fill'
          />
          <table>
            <tbody className='H4 text-left'>
              <tr>
                <td className='text-gray-grayscale30 border-r-1 pb-20'>건 물 명</td>
                <td className='text-gray-grayscale50 pl-15 pb-20'>{building}</td>
              </tr>
              <tr>
                <td className='text-gray-grayscale30 border-r-1 pb-20'>방 개 수</td>
                <td className='text-gray-grayscale50 pl-15 pb-20'>
                  {roomCount}/{roomSize}
                </td>
              </tr>
              <tr>
                <td className='text-gray-grayscale30 border-r-1 pr-15'>수용인원</td>
                <td className='text-gray-grayscale50 pl-15'>
                  {capacityCount}/{capacitySize}
                </td>
              </tr>
            </tbody>
          </table>
          <div className='mt-30'>
            <div className='w-380 h-350 bg-yellow-memoyellow flex flex-col items-center pt-18 shadow2'>
              <Image src={Memo} alt='Memo' width={86.49} height={20.34} />
              <div className='text-gray-grayscale50 mt-20 w-318 relative'>
                <textarea className='H4-caption leading-[34px] w-full h-204 bg-yellow-memoyellow border-none outline-none scrollbar-table resize-none' />
                <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-28'></hr>
                <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-63'></hr>
                <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-98'></hr>
                <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-133'></hr>
                <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-168'></hr>
                <hr className='border-b-1 border-gray-grayscale30 w-318 absolute top-[203px]'></hr>
              </div>
              <div className='mt-20'>
                <BtnMiniVariant label='저장' disabled={false} selected={false} variant='blue' />
              </div>
            </div>
          </div>
        </div>
        <div className='border-r-1 mx-29 h-790'></div>
        <div className='mt-20'>
          <BuildingManagementList
            listClick={listClick}
            onListClick={onListClick}
            onStudentClick={onStudentClick}
            selectStudents={selectStudents}
            list={list}
            studentList={studentList}
          />
          <div className='flex justify-end mt-21'>
            <BtnMidVariant label='수기배정' disabled={false} variant='blue' />
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <div className='flex gap-19 mt-14'>
          <SelectBuildingDropdown
            isOn={isOnBuilding}
            select={selectBuilding}
            list={buildingList}
            setSelect={function (select: string): void {
              throw new Error('Function not implemented.');
            }}
            setIsOn={function (isOn: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <SelectFloorDropdown
            isOn={isOnFloor}
            select={selectFloor}
            list={floorList}
            setSelect={function (data: string): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingManagement;
