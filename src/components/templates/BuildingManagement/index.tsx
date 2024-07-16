'use client';

import {
  getBuildingFloorList,
  getBuildingInfoList,
  getBuildingRoomList,
  getRoomAssignedList,
  getRoomNotAssignedList,
  putBuildingMemo,
  putRoomManual,
} from '@/apis/BuildingManagement';
import { postBuildingSettingImage } from '@/apis/BuildingSetting';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import BuildingSelectImageBtn from '@/components/atoms/AllBtn/BuildingSelectImageBtn/BuildingSelectImageBtn';
import SelectBuildingDropdown from '@/components/atoms/Dropdown/SelectBuildingDropdown/SelectBuildingDropdown';
import SelectFloorDropdown from '@/components/atoms/Dropdown/SelectFloorDropdown/SelectFloorDropdown';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import BuildingManagementList from '@/components/organisms/BuildingManagement/BuildingManagementList';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { editState } from '@/recoil/nav';
import {
  BuildingManagementFloorResponseInformation,
  BuildingManagementInfoResponseInformation,
  BuildingManagementResponseInformation,
  BuildingManagementRoomResponseInformation,
  BuildingRoomAssigned,
  BuildingRoomInAssignedResponseInformation,
  BuildingRoomManualRequest,
} from '@/types/buildingm';
import Memo from '@public/images/Memo.png';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';

type Props = {
  buildingList: BuildingManagementResponseInformation[];
};

const BuildingManagementTemplates = ({ buildingList }: Props) => {
  const setEditState = useSetRecoilState(editState);
  const [mounted, setMounted] = useState(false);
  const [buildingIsOn, setBuildingIsOn] = useState(false);
  const [selectBuilding, setSelectBuilding] = useState(buildingList[0]);
  const [floorList, setFloorList] = useState<BuildingManagementFloorResponseInformation[]>([]);
  const [floorIsOn, setFloorIsOn] = useState(false);
  const [selectFloor, setSelectFloor] = useState(0);
  const [roomList, setRoomList] = useState<BuildingManagementRoomResponseInformation[]>([]);
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
  const [listClick, setListClick] = useState(0);
  const [roomAssignedList, setRoomAssignedList] = useState<BuildingRoomInAssignedResponseInformation[]>([]);
  const [roomsAssignedList, setRoomsAssignedList] = useState<BuildingRoomAssigned[]>([]);
  const [roomNotAssignedList, setRoomNotAssignedList] = useState<BuildingRoomInAssignedResponseInformation[]>([]);
  const [studentList, setStudentList] = useState<BuildingRoomInAssignedResponseInformation[]>([]);
  const [editAssign, setEditAssign] = useState(false);
  const [saveModal, setSaveModal] = useState(false);
  const [roomsManual, setRoomsManual] = useState<BuildingRoomManualRequest[]>([]);
  const [warningModal, setWarningModal] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [pendingBuilding, setPendingBuilding] = useState<{
    building: { id: number; name: string } | null;
    floor: number | null;
  }>({
    building: null,
    floor: null,
  });

  useEffect(() => {
    if (roomsAssignedList.some((room) => room.roomId === listClick)) {
      //배정 버튼을 누른 적이 있는 경우(roomId가 roomsAssinedList에 존재하는 경우)
      const currentRoom = roomsAssignedList.find((room) => room.roomId === listClick);
      if (currentRoom) {
        setStudentList(currentRoom.resident.concat(roomNotAssignedList));
      }
    } else {
      //roomId가 roomsAssignedList에 존재하지 않는 경우
      setStudentList(roomAssignedList.concat(roomNotAssignedList));
    }
  }, [listClick, roomAssignedList, roomNotAssignedList, roomsAssignedList]);

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
        setBuildingInfo((prev) => ({
          ...prev,
          memo: memoText,
        }));
      }
    }
  };

  //특정 호실 사생 조회
  const getRoomAssigned = async (roomId: number) => {
    const roomAssignedList = await getRoomAssignedList(roomId);
    if (roomAssignedList.check) {
      setRoomAssignedList(roomAssignedList.information);
      if (editAssign && (roomAssignedList.information.length > 0 || roomNotAssignedList.length > 0)) {
        setListClick(roomId);
      } else if (roomAssignedList.information.length > 0) {
        setListClick(roomId);
      } else {
        setListClick(0);
      }
    } else {
      setRoomAssignedList([]);
    }
  };

  //미배정 사생 조회
  const getRoomNotAssigned = async (id: number) => {
    const roomNotAssignedList = await getRoomNotAssignedList(id);
    if (roomNotAssignedList.check) {
      setRoomNotAssignedList(roomNotAssignedList.information);
    } else {
      setRoomNotAssignedList([]);
    }
  };

  //클릭했을 때 assigned 값 변경
  const onStudentClick = (selectStudent: number) => {
    setStudentList((prevList) =>
      prevList.map((student) => (student.id === selectStudent ? { ...student, assigned: !student.assigned } : student)),
    );
  };

  //수기 방배정을 위한 배정된 데이터 저장
  const roomManual = (roomId: number) => {
    const assignedStudentIds = studentList.filter((student) => student.assigned).map((student) => student.id);

    const roomAssignment: BuildingRoomManualRequest = {
      roomId: roomId,
      residentIds: assignedStudentIds,
    };

    setRoomsManual((prevRooms) => {
      const updatedRooms = prevRooms.filter((room) => room.roomId !== roomId);
      return [...updatedRooms, roomAssignment];
    });

    //배정된 사생(assigned가 true)인 것들 setRoomsAssignedList에 추가
    const assignedStudents = studentList.filter((student) => student.assigned);

    const roomAssigned: BuildingRoomAssigned = {
      roomId: roomId,
      resident: assignedStudents,
    };

    setRoomsAssignedList((prevRooms) => {
      const updatedRooms = prevRooms.filter((room) => room.roomId !== roomId);
      return [...updatedRooms, roomAssigned];
    });

    //미배정 사생(assigned가 false)인 것들 setRoomNotAssignedList에 추가
    const notAssignedStudents = studentList.filter((student) => !student.assigned);
    setRoomNotAssignedList(notAssignedStudents);
    setListClick(0);

    //roomList의 배정된 인원 수 수정
    setRoomList((prevList) =>
      prevList.map((room) => (room.id === roomId ? { ...room, currentPeople: assignedStudents.length } : room)),
    );
    console.log(JSON.stringify(roomsManual));
  };

  //저장 버튼 눌렀을 때 배정
  const onSaveRoom = async () => {
    const response = await putRoomManual(roomsManual);
    if (response.check) {
      setSaveModal(!saveModal);
      setEditAssign(!editAssign);
      setListClick(0);
      setRoomsManual([]);
      setRoomsAssignedList([]);
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

    const response = await postBuildingSettingImage(selectBuilding.id, file);
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
      getRoomNotAssigned(pendingBuilding.building.id);
    } else if (pendingBuilding.floor) {
      //층 이동
      setSelectFloor(pendingBuilding.floor);
      getRoom(selectBuilding.id, pendingBuilding.floor);
      getRoomNotAssigned(selectBuilding.id);
    }
    //저장해둔 데이터 초기화
    setEditAssign(false);
    setListClick(0);
    setPendingBuilding({
      building: null,
      floor: null,
    });
    setRoomsManual([]);
    setRoomsAssignedList([]);
    setWarningModal(false);
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
                    onClick={onAddPicture}
                  />
                ) : (
                  <BtnLargeVariant label={'사진 추가'} disabled={false} variant={'blue'} onClick={onAddPicture} />
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
              {editAssign ? (
                <BuildingManagementList
                  listClick={listClick}
                  onListClick={(roomId) => {
                    if (listClick === roomId) {
                      setListClick(0);
                    } else {
                      getRoomAssigned(roomId);
                    }
                  }}
                  onStudentClick={onStudentClick}
                  roomList={roomList}
                  studentList={studentList}
                  editAssign={editAssign}
                  roomManual={roomManual}
                />
              ) : (
                <BuildingManagementList
                  listClick={listClick}
                  onListClick={(roomId) => {
                    if (listClick === roomId) {
                      setListClick(0);
                    } else {
                      getRoomAssigned(roomId);
                    }
                  }}
                  onStudentClick={() => {
                    //사생관리 만든 후에 사생관리_상세 내용으로 이동 수정 필요
                    //router.push(`/dashboard/StudentManagement/${id}`)
                  }}
                  roomList={roomList}
                  studentList={roomAssignedList}
                  editAssign={editAssign}
                />
              )}
              <div className='flex justify-end mt-21'>
                <BtnMidVariant
                  label={editAssign ? '저장' : '수기배정'}
                  disabled={false}
                  variant='blue'
                  onClick={() => {
                    if (editAssign) {
                      setSaveModal(!saveModal);
                    } else {
                      setListClick(0);
                      setEditAssign(!editAssign);
                      setEditState(true);
                    }
                  }}
                />
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
                  if (editAssign) {
                    setPendingBuilding({ building: { id, name }, floor: null });
                    setWarningModal(!warningModal);
                  } else {
                    setEditAssign(false);
                    setSelectBuilding({ id, name });
                    getFloor(id);
                    setFloorIsOn(false);
                    fetchBuildingInfo(id);
                    getRoomNotAssigned(id);
                    setListClick(0);
                  }
                }}
                setIsOn={() => setBuildingIsOn(!buildingIsOn)}
              />
              <SelectFloorDropdown
                list={floorList}
                isOn={floorIsOn}
                setIsOn={() => setFloorIsOn(!floorIsOn)}
                select={selectFloor}
                setSelect={(floor) => {
                  if (editAssign) {
                    setPendingBuilding({ building: null, floor: floor });
                    setWarningModal(!warningModal);
                  } else {
                    setSelectFloor(floor);
                    getRoom(selectBuilding.id, floor);
                    setListClick(0);
                  }
                }}
              />
            </div>
          </div>
          {saveModal && (
            <BackDrop isOpen={saveModal}>
              <ConfirmPrompt
                variant='blue'
                label='배정된 호실을 저장하시겠습니까?'
                onConfirm={onSaveRoom}
                onCancel={() => setSaveModal(!saveModal)}
              />
            </BackDrop>
          )}
          {warningModal && (
            <BackDrop isOpen={warningModal}>
              <ConfirmPrompt
                variant='red'
                label='이 페이지를 떠나시면 설정 내용이 저장되지 않습니다.'
                onConfirm={onCancelMove}
                onCancel={() => setWarningModal(!warningModal)}
              />
            </BackDrop>
          )}
        </>
      )}
    </>
  );
};

export default BuildingManagementTemplates;
