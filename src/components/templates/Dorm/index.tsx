'use client';

import {
  getDormFloorList,
  getDormInfoList,
  getDormRoomList,
  getRoomAssignedList,
  getRoomNotAssignedList,
  putDormMemo,
  putRoomManual,
} from '@/apis/dorm';
import { postDormSettingImage } from '@/apis/setting';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import BuildingSelectImageBtn from '@/components/atoms/AllBtn/BuildingSelectImageBtn/BuildingSelectImageBtn';
import SelectBuildingDropdown from '@/components/atoms/Dropdown/SelectBuildingDropdown/SelectBuildingDropdown';
import SelectFloorDropdown from '@/components/atoms/Dropdown/SelectFloorDropdown/SelectFloorDropdown';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import DormList from '@/components/templates/Dorm/List/DormList';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { editState } from '@/recoil/nav';
import {
  DormFloorResponseInformation,
  DormInfoResponseInformation,
  DormNameResponseInformation,
  DormRoomResponseInformation,
  DormRoomInAssignedResponseInformation,
} from '@/types/dorm';
import Memo from '@public/images/Memo.png';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { DORMMANAGE } from '@/constants/restrictions';

type Props = {
  buildingList: DormNameResponseInformation[];
  mounted: boolean;
  setMounted: React.Dispatch<React.SetStateAction<boolean>>;
};

const Index = ({ buildingList, mounted, setMounted }: Props) => {
  const setEditState = useSetRecoilState(editState);
  const [buildingIsOn, setBuildingIsOn] = useState(false);
  const [selectBuilding, setSelectBuilding] = useState(buildingList[0] || []);
  const [floorList, setFloorList] = useState<DormFloorResponseInformation[]>([]);
  const [floorIsOn, setFloorIsOn] = useState(false);
  const [selectFloor, setSelectFloor] = useState(0);
  const [roomList, setRoomList] = useState<DormRoomResponseInformation[]>([]);
  const [buildingInfo, setBuildingInfo] = useState<DormInfoResponseInformation>({
    name: '',
    imageUrl: null,
    fullRoomCount: 0,
    roomCount: 0,
    currentPeopleCount: 0,
    dormitorySize: 0,
    memo: null,
  }); //건물 정보
  const [memoText, setMemoText] = useState(buildingInfo.memo); //메모
  const [listClick, setListClick] = useState(0); //클릭한 리스트
  const [studentList, setStudentList] = useState<DormRoomInAssignedResponseInformation[]>([]); //해당 room에 있는 학생 리스트
  const [roomAssignedList, setRoomAssignedList] = useState<DormRoomInAssignedResponseInformation[]>([]); //해당 room에 배정된 학생 리스트
  const [roomNotAssignedList, setRoomNotAssignedList] = useState<DormRoomInAssignedResponseInformation[]>([]); //해당 room에 미배정된 학생 리스트
  const [editAssign, setEditAssign] = useState(false); //배정&미배정 수정 중일 때
  const [isSaveModal, setIsSaveModal] = useState(false);
  const [isWarningModal, setIsWarningModal] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [pendingBuilding, setPendingBuilding] = useState<{
    building: { id: number; name: string } | null;
    floor: number | null;
  }>({
    building: null,
    floor: null,
  });

  useEffect(() => {
    setStudentList(roomAssignedList.concat(roomNotAssignedList));
  }, [roomAssignedList, roomNotAssignedList]);

  //건물 정보 불러오기
  const fetchBuildingInfo = async (id: number) => {
    const buildingInfoList = await getDormInfoList(id);
    if (buildingInfoList.check) {
      setBuildingInfo(buildingInfoList.information);
      setMemoText(buildingInfoList.information.memo);
      await getFloor(id);
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

  //초기 건물 데이터 불러오기
  useEffect(() => {
    if (!selectBuilding.id) return;

    const fetchBuildingData = async () => {
      setMounted(true);
      const buildingInfoList = await getDormInfoList(selectBuilding.id);

      if (buildingInfoList.check) {
        setBuildingInfo(buildingInfoList.information);
        setMemoText(buildingInfoList.information.memo);

        const buildingFloorList = await getDormFloorList(selectBuilding.id);
        setFloorList(buildingFloorList.information);

        const defaultFloor = buildingFloorList.information.length > 0 ? 999 : 0;
        setSelectFloor(defaultFloor);
        await getRoom(selectBuilding.id, defaultFloor);
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

    fetchBuildingData();
  }, [selectBuilding.id, setMounted]);

  //건물 층 목록 불러오기
  const getFloor = async (id: number) => {
    const buildingFloorList = await getDormFloorList(id);
    setFloorList(buildingFloorList.information);
    //빌딩에 층이 없을 때는 0(층), 있을 때는 999(전체)
    if (buildingFloorList.information.length > 0) {
      setSelectFloor(999);
      await getRoom(id, 999);
    } else {
      setSelectFloor(0);
      await getRoom(id, 0);
    }
  };

  //호실 정보 불러오기
  const getRoom = async (building: number, floor: number) => {
    const buildingRoomList = await getDormRoomList(building, floor);
    setRoomList(buildingRoomList.information);
  };

  //메모 저장
  const onSaveMemo = async () => {
    if (memoText !== null) {
      await putDormMemo(selectBuilding.id, memoText);
      setBuildingInfo((prev) => ({
        ...prev,
        memo: memoText,
      }));
    }
  };

  //특정 호실 사생 조회 & 미배정 사생 조회
  const getRoomStudentList = async (roomId: number) => {
    try {
      const [roomAssignedListResponse, roomNotAssignedListResponse] = await Promise.all([
        getRoomAssignedList(roomId),
        getRoomNotAssignedList(roomId),
      ]);

      // 배정된 사생 처리
      if (roomAssignedListResponse.check) {
        setRoomAssignedList(roomAssignedListResponse.information);
      } else {
        setRoomAssignedList([]);
      }

      // 미배정 사생 처리
      if (roomNotAssignedListResponse.check) {
        setRoomNotAssignedList(roomNotAssignedListResponse.information);
      } else {
        setRoomNotAssignedList([]);
      }
      setListClick(roomId);
    } catch (error) {
      console.error(error);
      setRoomAssignedList([]);
      setRoomNotAssignedList([]);
      setStudentList([]);
      setListClick(0);
    }
  };

  //클릭했을 때 assigned 값 변경
  const onStudentClick = (selectStudent: number) => {
    const updatedList = studentList.map((student) =>
      student.id === selectStudent ? { ...student, assigned: !student.assigned } : student,
    );

    //변경되기 전과 후가 같은지 확인
    const newAssignedRoomIds = updatedList.filter((student) => student.assigned).map((student) => student.id);
    const existingAssignedStudentIds = roomAssignedList
      .filter((student) => student.assigned)
      .map((student) => student.id);

    const areEqual =
      newAssignedRoomIds.length === existingAssignedStudentIds.length &&
      newAssignedRoomIds.every((id) => existingAssignedStudentIds.includes(id));

    setEditAssign(!areEqual);
    setEditState(!areEqual);

    setStudentList(updatedList);
  };

  //저장 버튼 눌렀을 때 배정
  const onSaveRoom = async () => {
    const roomsManual = studentList.filter((student) => student.assigned).map((student) => student.id);

    if (roomsManual) {
      await putRoomManual(listClick, { residentIds: roomsManual });
      setListClick(0);
      setRoomList((prevList) =>
        prevList.map((room) => (room.id === listClick ? { ...room, currentPeople: roomsManual.length } : room)),
      );
      setEditAssign(false);
      setEditState(false);
      setIsSaveModal(false);
    }
  };

  //건물 이미지 변경
  const onAddPicture = () => {
    inputFileRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log('파일이 선택되지 않았습니다.');
      return;
    }

    const file = e.target.files[0];

    const imageUrl = URL.createObjectURL(file);

    const response = await postDormSettingImage(selectBuilding.id, file);
    if (response.check) {
      setBuildingInfo((prev) => ({
        ...prev,
        imageUrl: imageUrl,
      }));
    }
  };

  //수기배정 임시저장된 것을 삭제하고 다른 건물이나 층으로 이동
  const onCancelMove = async () => {
    if (pendingBuilding.building) {
      //건물 이동
      setSelectBuilding({ id: pendingBuilding.building.id, name: pendingBuilding.building.name });
      getFloor(pendingBuilding.building.id);
      setFloorIsOn(false);
      fetchBuildingInfo(pendingBuilding.building.id);
    } else if (pendingBuilding.floor) {
      //층 이동
      setSelectFloor(pendingBuilding.floor);
      getRoom(selectBuilding.id, pendingBuilding.floor);
    }
    //저장해둔 데이터 초기화
    setEditAssign(false);
    setListClick(0);
    setPendingBuilding({
      building: null,
      floor: null,
    });
    setIsWarningModal(false);
  };

  return (
    <>
      {mounted && (
        <>
          <div className='flex'>
            <div>
              <div className='w-381 h-241 flex items-center justify-center bg-gray-grayscale5 rounded-8 mb-35'>
                {buildingInfo.imageUrl ? (
                  <BuildingSelectImageBtn
                    image={buildingInfo.imageUrl}
                    name={buildingInfo.name}
                    onClick={() => {
                      if (selectBuilding.id) {
                        onAddPicture();
                      }
                    }}
                  />
                ) : (
                  <BtnLargeVariant
                    label={'사진 추가'}
                    disabled={false}
                    variant={'blue'}
                    onClick={() => {
                      if (selectBuilding.id) {
                        onAddPicture();
                      }
                    }}
                  />
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
                      className='H4-caption leading-[34px] w-full h-204 bg-yellow-memoyellow border-none outline-none noscrollbar-table resize-none'
                      value={memoText === null ? '' : memoText}
                      onChange={(e) => {
                        if (e.target.value.length > DORMMANAGE.memo.maxLength) {
                          e.target.value = e.target.value.slice(0, DORMMANAGE.memo.maxLength);
                        }
                        setMemoText(e.target.value);
                      }}
                      readOnly={!selectBuilding.id}
                      minLength={1}
                      maxLength={DORMMANAGE.memo.maxLength}
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
              <DormList
                listClick={listClick}
                onListClick={(roomId) => {
                  if (listClick === roomId) {
                    setListClick(0);
                  } else {
                    getRoomStudentList(roomId);
                  }
                }}
                onStudentClick={onStudentClick}
                roomList={roomList}
                studentList={studentList}
                editAssign={!editAssign}
                roomManual={() => setIsSaveModal(true)}
              />
            </div>
          </div>
          <div className='absolute top-0 right-0'>
            <div className='flex gap-19 mt-14'>
              <SelectBuildingDropdown
                isOn={buildingIsOn}
                select={selectBuilding}
                list={buildingList}
                setSelect={(id, name) => {
                  if (editAssign) {
                    setPendingBuilding({ building: { id, name }, floor: null });
                    setIsWarningModal(true);
                  } else {
                    setEditAssign(false);
                    setSelectBuilding({ id, name });
                    getFloor(id);
                    setFloorIsOn(false);
                    fetchBuildingInfo(id);
                    setListClick(0);
                  }
                }}
                setIsOn={() => selectBuilding.id && setBuildingIsOn(!buildingIsOn)}
              />
              <SelectFloorDropdown
                list={floorList}
                isOn={floorIsOn}
                setIsOn={() => setFloorIsOn(!floorIsOn)}
                select={selectFloor}
                setSelect={(floor) => {
                  if (editAssign) {
                    setPendingBuilding({ building: null, floor: floor });
                    setIsWarningModal(true);
                  } else {
                    setSelectFloor(floor);
                    getRoom(selectBuilding.id, floor);
                    setListClick(0);
                  }
                }}
              />
            </div>
          </div>
          {isSaveModal && (
            <BackDrop isOpen={isSaveModal}>
              <ConfirmPrompt
                variant='blue'
                label='배정된 호실을 저장하시겠습니까?'
                onConfirm={onSaveRoom}
                onCancel={() => setIsSaveModal(false)}
              />
            </BackDrop>
          )}
          {isWarningModal && (
            <BackDrop isOpen={isWarningModal}>
              <ConfirmPrompt
                variant='red'
                label='저장하지 않고 건물이나 층을 변경하면\n이전 배정 내용이 사라집니다.'
                onConfirm={onCancelMove}
                onCancel={() => setIsWarningModal(false)}
              />
            </BackDrop>
          )}
        </>
      )}
    </>
  );
};

export default Index;
