'use client';

import {
  deleteRoom,
  postDormSettingImage,
  postSettingFilter,
  postSettingFilterCopy,
  putDormitoryName,
  putSettingFilter,
  useDormDetail,
  useDormDetailRoom,
} from '@/apis/setting';
import AddBuildingBtn from '@/components/atoms/AllBtn/AddBuildingBtn/AddBuildingBtn';
import AddRoomBtn from '@/components/atoms/AllBtn/AddRoomBtn/AddRoomBtn';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import BuildingSelectImageBtn from '@/components/atoms/AllBtn/BuildingSelectImageBtn/BuildingSelectImageBtn';
import BuildingSetBtn from '@/components/atoms/AllBtn/BuildingSetBtn/BuildingSetBtn';
import RoomBtn from '@/components/atoms/AllBtn/RoomBtn/RoomBtn';
import BuildingNameInputText from '@/components/atoms/InputText/BuildingNameInputText/BuildingNameInputText';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';
import SettingList from '@/components/templates/Setting/Detail/SettingList';
import { settingIdState } from '@/recoil/setting';
import {
  DormSettingDetailResponseInformation,
  DormSettingDetailResponseInformationFloor,
  DormSettingDetailResponseInformationFloorDuplicate,
  DormSettingDetailRoomResponseInformation,
} from '@/types/setting';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { editState } from '@/recoil/nav';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';

const Page = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const buildingId = useRecoilValue(settingIdState);
  const { data, error, mutate } = useDormDetail(buildingId);
  const [buildingInfo, setBuildingInfo] = useState<DormSettingDetailResponseInformation>({
    id: buildingId,
    name: '',
    imageUrl: null,
    floorAndRoomNumberRes: [],
  }); //건물 상세 조회
  const [buildingName, setBuildingName] = useState('');
  const [sortedFloor, setSortedFloor] = useState<DormSettingDetailResponseInformationFloor[]>([]); //복제 버튼이 있는 층
  const [addFloor, setAddFloor] = useState<DormSettingDetailResponseInformationFloor[]>([]); //추가 버튼을 누른 층
  const [newFloor, setNewFloor] = useState<DormSettingDetailResponseInformationFloor[]>([]); //층 추가를 눌러 추가한 층
  const [newDuplicateFloor, setNewDuplicateFloor] = useState<DormSettingDetailResponseInformationFloorDuplicate[]>([]); //복제 버튼을 누른 층
  const [selectedFloor, setSelectedFloor] = useState(0); //선택된 층
  const [selectFilter, setSelectFilter] = useState(0); //선택된 필터
  const [completedFilter, setCompletedFilter] = useState<number[]>([]); //선택 완료된 필터
  const [checkedItems, setCheckedItems] = useState<number[]>([]); //체크한 roomNumber
  const { data: roomData, error: roomError, mutate: roomMutate } = useDormDetailRoom(buildingId, selectedFloor);
  const [roomInfo, setRoomInfo] = useState<DormSettingDetailRoomResponseInformation[]>(); //호실 조회
  const [roomNoneInfo, setRoomNoneInfo] = useState<Record<number, DormSettingDetailRoomResponseInformation[]>>({}); //필터가 빈 호실 조회
  const [isSameDormModal, setIsSameDormModal] = useState(false); //건물명 중복 모달창
  const [isNullDormNameModal, setIsNullDormNameModal] = useState(false); //건물명 null 모달창
  const [isSameFloorModal, setIsSameFloorModal] = useState(false); //층 중복 모달창
  const [floorToUpdate, setFloorToUpdate] = useState({
    index: 0,
    isDuplicate: false,
  }); //지울 층 정보
  const [editFilter, setEditFilter] = useState(false); //필터 수정 중
  const [isFilterModal, setIsFilterModal] = useState(false); //필터 수정 중 모달창
  const setEditState = useSetRecoilState(editState);
  const [isEdit, setIsEdit] = useState(true); //현재 페이지가 edit 상태인지
  const [selectedSaveFloor, setSelectedSaveFloor] = useState<number | null>(null); //나가기할 때 선택했거나, 지우려는 층 floor
  const [isAlreadyModal, setIsAlreadyModal] = useState(false); //층 삭제 시 배정된 학생이 있는 경우 모달창
  const [isDeleteModal, setIsDeleteModal] = useState(false); //층 삭제 시 확인 모달창
  const [isNotSaveModal, setIsNotSaveModal] = useState(false); //저장되지 않은 상태의 층이 있는 경우 모달창
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setEditState(true);
  }, [setEditState]);

  useEffect(() => {
    //빌딩 정보 업데이트
    if (data && data.information) {
      setBuildingInfo(data.information);
      setBuildingName(data.information.name);
      if (data.information.floorAndRoomNumberRes.length > 0) {
        if (!isLoading) setIsEdit(false);
        if (selectedFloor === 0) {
          setSelectedFloor(Number(data.information.floorAndRoomNumberRes[0].floor));
        }

        if (addFloor) {
          //추가된 호실이 있을 경우 데이터 합치기
          const mergedData = data.information.floorAndRoomNumberRes.concat(addFloor);
          const sortedMergedData = mergedData.sort((a, b) => Number(a.floor) - Number(b.floor));
          setSortedFloor(sortedMergedData);
        }
      } else {
        if (addFloor.length === 0 && roomNoneInfo[selectedFloor] === undefined) {
          setSortedFloor([]);
          setSelectedFloor(0);
          setNewFloor([{ floor: '', startRoomNumber: 1, endRoomNumber: '' }]);
        } else {
          setSortedFloor(addFloor);
        }
      }
      setIsLoading(true);
    }
  }, [data, addFloor, selectedFloor, isLoading, roomNoneInfo]);

  useEffect(() => {
    if (roomData && roomData.information) {
      //호실 리스트 업데이트
      if (roomData.information.length > 0) {
        setRoomInfo(roomData.information);

        if (roomData.information.length > 0) {
          //해당 층에 대해 필터 완료 여부 업데이트
          const newFilter: number[] = [];

          //남자/여자 필터 완료 여부
          if (!roomData.information?.some((room) => room.gender === null)) {
            newFilter.push(1);
          }
          //호실 타입 필터 완료 여부
          if (!roomData.information?.some((room) => room.roomSize === null)) {
            newFilter.push(2);
          }
          //열쇠 수령 여부 필터 완료 여부
          if (!roomData.information?.some((room) => room.hasKey === null)) {
            newFilter.push(3);
          }
          //비활성화 필터 완료 여부
          if (!roomData.information?.some((room) => room.isActivated === null)) {
            newFilter.push(4);
          }
          setCompletedFilter(newFilter);
        }
      } else {
        setRoomInfo(roomNoneInfo[selectedFloor]);
        setCompletedFilter([]);
      }
    }
  }, [roomData, roomNoneInfo, selectedFloor]);

  const handleCheckboxChange = (roomNumber: number) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(roomNumber)
        ? prevCheckedItems.filter((item) => item !== roomNumber)
        : [...prevCheckedItems, roomNumber],
    );
  };

  const handleSetFloorInput = (
    index: number,
    field: 'floor' | 'startRoomNumber' | 'endRoomNumber',
    value: string,
    isDuplicate: boolean,
  ) => {
    if (isDuplicate) {
      setNewDuplicateFloor((prev) => {
        const updatedNewFloor = [...prev];
        updatedNewFloor[index] = {
          ...updatedNewFloor[index],
          [field]: value,
        };
        return updatedNewFloor;
      });
    } else {
      setNewFloor((prev) => {
        const updatedNewFloor = [...prev];
        updatedNewFloor[index] = {
          ...updatedNewFloor[index],
          [field]: value,
        };
        return updatedNewFloor;
      });
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
    const response = await postDormSettingImage(buildingId, file);
    if (response.check) {
      setBuildingInfo((prev) => ({
        ...prev,
        imageUrl: imageUrl,
      }));
    }
  };

  //호실 복제
  const handleRoomDuplicate = async (duplicateFloor: number, floor: number, index: number) => {
    if (buildingInfo.floorAndRoomNumberRes.find((item) => item.floor === floor)) {
      setFloorToUpdate({
        index,
        isDuplicate: true,
      });
      setIsSameFloorModal(true);
    } else {
      try {
        await postSettingFilterCopy(buildingId, duplicateFloor, floor);
        setNewDuplicateFloor((prev) => prev.filter((_, i) => i !== index));
        setSelectedFloor(floor);
        await mutate();
      } catch (error) {
        console.error(error);
        console.log('오류가 발생했습니다.');
      }
    }
  };

  //호실 추가
  const handleRoomCreate = async (floor: number, startRoomNumber: number, endRoomNumber: number, index: number) => {
    if (sortedFloor.find((item) => item.floor === floor)) {
      setFloorToUpdate({
        index,
        isDuplicate: false,
      });
      setIsSameFloorModal(true);
    } else {
      const rooms = Array.from({ length: endRoomNumber - startRoomNumber + 1 }, (_, i) => {
        const roomNumber = startRoomNumber + i;
        return {
          roomNumber: Number(`${floor}${String(roomNumber).padStart(2, '0')}`),
          floor,
          gender: null,
          roomSize: null,
          hasKey: null,
          isActivated: null,
        };
      });
      setRoomNoneInfo((prev) => ({
        ...prev,
        [floor]: rooms,
      }));
      setAddFloor((prev) => [
        ...prev,
        {
          floor,
          startRoomNumber,
          endRoomNumber,
        },
      ]);
      setNewFloor((prev) => prev.filter((_, i) => i !== index));
      setSelectedFloor(floor);
    }
  };

  //호실 삭제
  const deleteDetailRoom = async (floor: number) => {
    try {
      const response = await deleteRoom(buildingId, floor);
      if (response.check) {
        floor === selectedFloor && setSelectedFloor(0);
        await mutate();
        setIsDeleteModal(false);
      } else {
        setIsDeleteModal(false);
        setIsAlreadyModal(true); //사생이 있는 층
      }
    } catch (error) {
      console.error(error);
      console.log('오류가 발생했습니다.');
    }
  };

  //건물명 수정
  const handleDormitoryName = async () => {
    if (buildingName === '') {
      setIsNullDormNameModal(true);
    } else if (buildingInfo.name !== buildingName)
      try {
        const response = await putDormitoryName(buildingId, buildingName);
        if (response.check) {
          await mutate();
        } else {
          //동일한 이름의 건물명이 있는 경우
          setIsSameDormModal(true);
        }
      } catch (error) {
        console.error(error);
        console.log('오류가 발생했습니다.');
      }
  };

  //필터에 대한 리스트 수정
  const handleFilter = (filter: string, data: number | string | boolean) => {
    if (!roomInfo) return;

    const updateRoomInfo = (room: DormSettingDetailRoomResponseInformation) => {
      if (checkedItems.includes(Number(room.roomNumber))) {
        switch (filter) {
          case 'gender':
            return { ...room, gender: data as 'FEMALE' | 'MALE' };
          case 'roomSize':
            return { ...room, roomSize: data as number };
          case 'hasKey':
            return { ...room, hasKey: data as boolean };
          case 'isActivated':
            return { ...room, isActivated: data as boolean };
          default:
            return room;
        }
      }
      return room;
    };

    setEditFilter(true);
    setRoomInfo(roomInfo.map(updateRoomInfo));
    setCheckedItems([]);
  };

  //호실 + 필터 첫 저장
  const handleRoomSave = async () => {
    if (!roomInfo) return;

    const updatedRoomInfo = roomInfo.map(({ floor, ...rest }) => ({
      ...rest,
    }));

    await postSettingFilter(buildingId, selectedFloor, updatedRoomInfo);

    setAddFloor((prev) => prev.filter((item) => item.floor !== selectedFloor));

    await mutate();
    await roomMutate();

    setRoomNoneInfo((prev) => {
      const updatedRoomInfo = { ...prev };
      delete updatedRoomInfo[selectedFloor];
      return updatedRoomInfo;
    });

    setSelectFilter(0);
    setCheckedItems([]);
    setEditFilter(false);
  };

  //필터 수정
  const handleRoomEdit = async () => {
    if (!roomInfo) return;

    const updatedRoomInfo = roomInfo.map(({ id, floor, roomNumber, hasResident, ...rest }) => ({
      roomId: id,
      ...rest,
    }));

    await putSettingFilter(buildingId, selectedFloor, updatedRoomInfo);
    await mutate();
    await roomMutate();

    setSelectFilter(0);
    setCheckedItems([]);
    setEditFilter(false);
  };

  return (
    <>
      {isLoading && (
        <div className='flex flex-col relative w-[1331px]'>
          <div className='flex justify-center w-full mb-30'>
            <BuildingNameInputText
              placeholder='건물명'
              input={buildingName}
              setInput={setBuildingName}
              handleDormitoryName={handleDormitoryName}
              readOnly={!isEdit}
            />
          </div>
          <div className='flex'>
            <div className='flex flex-col items-center min-w-410 mr-20'>
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
                <div
                  className={`${isEdit ? 'max-h-320' : 'max-h-380'} w-410 overflow-y-auto scrollbar-table mb-13 mr-20`}
                >
                  <div className={`${isEdit ? 'gap-12 mr-5' : 'gap-10 items-center ml-20'} flex flex-col`}>
                    {isEdit ? (
                      <>
                        {sortedFloor.map((data, index) => (
                          <RoomBtn
                            key={index}
                            selected={selectedFloor === data.floor}
                            floorInput={data.floor?.toString() || ''}
                            setFloorInput={(value) => {
                              handleSetFloorInput(index, 'floor', value, false);
                            }}
                            startInput={data.startRoomNumber?.toString() || ''}
                            setStartInput={(value) => {
                              handleSetFloorInput(index, 'startRoomNumber', value, false);
                            }}
                            endInput={data.endRoomNumber?.toString() || ''}
                            setEndInput={(value) => {
                              handleSetFloorInput(index, 'endRoomNumber', value, false);
                            }}
                            isOne={false} //첫번째인지
                            pressOkBtn={true} //복제 버튼
                            hovered={false} //hover가 가능한지
                            deleteDetailRoom={() => {
                              if (addFloor.some((item) => item.floor === data.floor)) {
                                data.floor === selectedFloor && setSelectedFloor(0);
                                setAddFloor((prev) => prev.filter((item) => item.floor !== data.floor));
                                setRoomNoneInfo((prev) => {
                                  const updatedRoomInfo = { ...prev };
                                  delete updatedRoomInfo[Number(data.floor)];
                                  return updatedRoomInfo;
                                });
                              }
                              if (buildingInfo.floorAndRoomNumberRes.some((item) => item.floor === data.floor)) {
                                setIsDeleteModal(true);
                                setSelectedSaveFloor(Number(data.floor));
                              }
                            }}
                            onClick={() => {
                              if (editFilter && selectedFloor !== data.floor) {
                                setIsFilterModal(true);
                                setSelectedSaveFloor(Number(data.floor));
                              } else {
                                setSelectFilter(0);
                                setSelectedFloor(Number(data.floor));
                              }
                            }} //해당 층 선택
                            readOnly={[true, true, true]}
                            handleDuplicate={() =>
                              setNewDuplicateFloor([
                                ...newDuplicateFloor,
                                {
                                  duplicateFloor: Number(data.floor),
                                  floor: '',
                                  startRoomNumber: Number(data.startRoomNumber),
                                  endRoomNumber: Number(data.endRoomNumber),
                                },
                              ])
                            } //복제 버튼 클릭
                            duplicateDisabled={
                              !buildingInfo.floorAndRoomNumberRes.some((item) => item.floor === data.floor)
                            }
                          />
                        ))}
                        {newDuplicateFloor.map((data, index) => {
                          return (
                            <RoomBtn
                              key={index}
                              floorInput={data.floor?.toString() || ''}
                              setFloorInput={(value) => {
                                handleSetFloorInput(index, 'floor', value, true);
                              }}
                              startInput={data.startRoomNumber?.toString() || ''}
                              setStartInput={(value) => {
                                handleSetFloorInput(index, 'startRoomNumber', value, true);
                              }}
                              endInput={data.endRoomNumber?.toString() || ''}
                              setEndInput={(value) => {
                                handleSetFloorInput(index, 'endRoomNumber', value, true);
                              }}
                              isOne={false}
                              pressOkBtn={false} //확인, 추가 버튼
                              hovered={true}
                              deleteDetailRoom={() => {
                                setNewDuplicateFloor((prev) => prev.filter((_, i) => i !== index));
                              }} //newDuplicateFloor에서 해당층 삭제
                              readOnly={[false, true, true]}
                              handleCreate={() => {
                                handleRoomDuplicate(Number(data.duplicateFloor), Number(data.floor), index);
                              }} //확인, 추가 버튼 클릭
                            />
                          );
                        })}
                        {newFloor.map((data, index) => {
                          return (
                            <RoomBtn
                              key={index}
                              floorInput={data.floor?.toString() || ''}
                              setFloorInput={(value) => {
                                handleSetFloorInput(index, 'floor', value, false);
                              }}
                              startInput={data.startRoomNumber?.toString() || ''}
                              setStartInput={(value) => {
                                handleSetFloorInput(index, 'startRoomNumber', value, false);
                              }}
                              endInput={data.endRoomNumber?.toString() || ''}
                              setEndInput={(value) => {
                                handleSetFloorInput(index, 'endRoomNumber', value, false);
                              }}
                              isOne={sortedFloor.length === 0 ? index === 0 : false}
                              pressOkBtn={false} //확인, 추가 버튼
                              hovered={sortedFloor.length === 0 ? index !== 0 : true}
                              deleteDetailRoom={() => {
                                setNewFloor((prev) => prev.filter((_, i) => i !== index));
                              }} //newFloor에서 해당층 삭제
                              readOnly={[false, false, false]}
                              handleCreate={() => {
                                handleRoomCreate(
                                  Number(data.floor),
                                  Number(data.startRoomNumber),
                                  Number(data.endRoomNumber),
                                  index,
                                );
                              }} //확인, 추가 버튼 클릭
                            />
                          );
                        })}
                      </>
                    ) : (
                      buildingInfo.floorAndRoomNumberRes.map((data, index) => (
                        <div
                          className={`flex justify-between items-center pl-67 pr-72 rounded-5 w-331 h-38 cursor-pointer ${selectedFloor === data.floor && 'bg-gray-grayscale10'}`}
                          key={index}
                          onClick={() => setSelectedFloor(Number(data.floor))}
                        >
                          <span className='H4 text-gray-grayscale50'>{data.floor}층</span>
                          <span className='H4 text-gray-grayscale50'>
                            {data.startRoomNumber} - {data.endRoomNumber}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                {isEdit && (
                  <AddRoomBtn
                    onClick={() => setNewFloor([...newFloor, { floor: '', startRoomNumber: 1, endRoomNumber: '' }])}
                  />
                )}
              </div>
            </div>
            <div>
              {isEdit && (
                <div className='w-917 h-121 shadow2 rounded-7 bg-white items-center flex justify-between pl-40 pr-23 px-13 mb-30'>
                  <h1 className='H1 text-blue-blue30'>필터</h1>
                  <div>
                    <div className='flex gap-22'>
                      <BuildingSetBtn
                        label='남자/여자'
                        detail={false}
                        selected={selectFilter === 1}
                        done={
                          completedFilter.includes(1) ||
                          (roomInfo && roomInfo.length > 0 && !roomInfo?.some((room) => room.gender === null))
                        }
                        disabled={selectedFloor === 0}
                        onClick={() => setSelectFilter(1)}
                      />
                      <BuildingSetBtn
                        label='호실 타입'
                        detail={false}
                        selected={selectFilter === 2}
                        done={
                          completedFilter.includes(2) ||
                          (roomInfo && roomInfo.length > 0 && !roomInfo?.some((room) => room.roomSize === null))
                        }
                        disabled={selectedFloor === 0}
                        onClick={() => setSelectFilter(2)}
                      />
                      <BuildingSetBtn
                        label='열쇠 수령 여부'
                        detail={false}
                        selected={selectFilter === 3}
                        done={
                          completedFilter.includes(3) ||
                          (roomInfo && roomInfo.length > 0 && !roomInfo?.some((room) => room.hasKey === null))
                        }
                        disabled={selectedFloor === 0}
                        onClick={() => setSelectFilter(3)}
                      />
                      <BuildingSetBtn
                        label='비활성화'
                        detail={false}
                        selected={selectFilter === 4}
                        done={
                          completedFilter.includes(4) ||
                          (roomInfo && roomInfo.length > 0 && !roomInfo?.some((room) => room.isActivated === null))
                        }
                        disabled={selectedFloor === 0}
                        onClick={() => setSelectFilter(4)}
                      />
                    </div>
                    <div className='h-53 flex gap-15 justify-end items-end'>
                      {selectFilter === 1 ? (
                        <>
                          <BuildingSetBtn label='남자' detail={true} onClick={() => handleFilter('gender', 'MALE')} />
                          <BuildingSetBtn label='여자' detail={true} onClick={() => handleFilter('gender', 'FEMALE')} />
                        </>
                      ) : selectFilter === 2 ? (
                        <>
                          <BuildingSetBtn label='1인실' detail={true} onClick={() => handleFilter('roomSize', 1)} />
                          <BuildingSetBtn label='2인실' detail={true} onClick={() => handleFilter('roomSize', 2)} />
                          <BuildingSetBtn label='3인실' detail={true} onClick={() => handleFilter('roomSize', 3)} />
                          <BuildingSetBtn label='4인실' detail={true} onClick={() => handleFilter('roomSize', 4)} />
                          <BuildingSetBtn label='5인실' detail={true} onClick={() => handleFilter('roomSize', 5)} />
                          <BuildingSetBtn label='6인실' detail={true} onClick={() => handleFilter('roomSize', 6)} />
                        </>
                      ) : selectFilter === 3 ? (
                        <>
                          <BuildingSetBtn label='수령' detail={true} onClick={() => handleFilter('hasKey', true)} />
                          <BuildingSetBtn label='미수령' detail={true} onClick={() => handleFilter('hasKey', false)} />
                        </>
                      ) : selectFilter === 4 ? (
                        <>
                          <BtnLargeVariant
                            label='활성화'
                            disabled={false}
                            variant='green'
                            onClick={() => handleFilter('isActivated', true)}
                          />
                          <BtnLargeVariant
                            label='비활성화'
                            disabled={false}
                            variant='red'
                            onClick={() => handleFilter('isActivated', false)}
                          />
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <SettingList
                list={roomInfo || []}
                checkedItems={checkedItems}
                handleCheckboxChange={(roomNumber) => {
                  if (selectFilter !== 0) {
                    setEditFilter(true);
                    handleCheckboxChange(roomNumber);
                  }
                }}
                isEdit={isEdit}
              />
            </div>
          </div>
          <div className='flex mt-21'>
            <div className='flex-1'></div>
            <div className='flex-1 flex justify-center'>
              <BtnMidVariant
                label={isEdit ? '완료' : '수정'}
                disabled={isEdit ? buildingInfo.floorAndRoomNumberRes.length === 0 : false}
                variant='blue'
                onClick={() => {
                  if (isEdit) {
                    if (addFloor.length > 0) {
                      setIsNotSaveModal(true);
                    } else {
                      setIsEdit(false);
                    }
                  } else {
                    setEditState(true);
                    setIsEdit(true);
                  }
                }}
              />
            </div>
            <div className='flex-1 flex justify-end'>
              {selectFilter ? (
                <BtnMiniVariant
                  label='저장'
                  disabled={
                    roomInfo
                      ? roomInfo?.some((room) => room.gender === null) ||
                        roomInfo?.some((room) => room.roomSize === null) ||
                        roomInfo?.some((room) => room.hasKey === null) ||
                        roomInfo?.some((room) => room.isActivated === null)
                      : false
                  }
                  variant='blue'
                  selected={false}
                  onClick={() => {
                    if (addFloor.some((item) => item.floor === selectedFloor)) {
                      handleRoomSave();
                    } else {
                      handleRoomEdit();
                    }
                  }}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          {isSameDormModal && (
            <BackDrop isOpen={isSameDormModal}>
              <AlertPrompt
                variant='blue'
                label={'이미 등록되어 있는 건물명입니다.\n다른 이름을 사용해 주세요.'}
                onConfirm={() => {
                  setIsSameDormModal(false);
                }}
              />
            </BackDrop>
          )}
          {isNullDormNameModal && (
            <BackDrop isOpen={isNullDormNameModal}>
              <AlertPrompt
                variant='blue'
                label={'건물명을 입력하여 주시기 바랍니다.'}
                onConfirm={() => {
                  setIsNullDormNameModal(false);
                }}
              />
            </BackDrop>
          )}
          {isSameFloorModal && (
            <BackDrop isOpen={isSameFloorModal}>
              <AlertPrompt
                variant='blue'
                label={'중복된 층 수의 입력은 불가능합니다.'}
                onConfirm={() => {
                  if (floorToUpdate.isDuplicate) {
                    setNewDuplicateFloor((prev) => {
                      const updatedNewDuplicateFloor = [...prev];
                      updatedNewDuplicateFloor[floorToUpdate.index] = {
                        ...updatedNewDuplicateFloor[floorToUpdate.index],
                        floor: '',
                      };
                      return updatedNewDuplicateFloor;
                    });
                  } else {
                    setNewFloor((prev) => {
                      const updatedNewFloor = [...prev];
                      updatedNewFloor[floorToUpdate.index] = {
                        ...updatedNewFloor[floorToUpdate.index],
                        floor: '',
                      };
                      return updatedNewFloor;
                    });
                  }

                  setIsSameFloorModal(false);
                }}
              />
            </BackDrop>
          )}
          {isFilterModal && (
            <BackDrop isOpen={isFilterModal}>
              <ConfirmPrompt
                variant='red'
                label='작성중인 내용이 저장되지 않을 수 있습니다.'
                onCancel={() => {
                  setEditFilter(false);
                  if (selectedSaveFloor) setSelectedFloor(selectedSaveFloor);
                  setSelectFilter(0);
                  setCheckedItems([]);
                  setIsFilterModal(false);
                }}
                onConfirm={() => setIsFilterModal(false)}
                textLeft='나가기'
                textRight='취소'
              />
            </BackDrop>
          )}
          {isDeleteModal && (
            <BackDrop isOpen={isDeleteModal}>
              <ConfirmPrompt
                variant='red'
                label='층을 삭제하면 적용된 필터도 함께 삭제됩니다.\n층을 삭제하시겠습니까?'
                onCancel={() => {
                  setIsDeleteModal(false);
                  setSelectedSaveFloor(null);
                }}
                onConfirm={() => {
                  if (selectedSaveFloor !== null) {
                    deleteDetailRoom(selectedSaveFloor);
                  }
                }}
              />
            </BackDrop>
          )}
          {isAlreadyModal && (
            <BackDrop isOpen={isAlreadyModal}>
              <AlertPrompt
                variant='red'
                label='해당 층에 배정된 학생이 있습니다.'
                onConfirm={() => {
                  setIsAlreadyModal(false);
                  setSelectedSaveFloor(null);
                }}
              />
            </BackDrop>
          )}
          {isNotSaveModal && (
            <BackDrop isOpen={isNotSaveModal}>
              <ConfirmPrompt
                variant='red'
                label='아직 저장하지 않은 층이 있습니다.\n저장되지 않은 층을 삭제하시겠습니까?'
                onCancel={() => {
                  setIsNotSaveModal(false);
                }}
                onConfirm={() => {
                  setAddFloor([]);
                  setRoomNoneInfo({});
                  setNewFloor([]);
                  setNewDuplicateFloor([]);
                  setIsNotSaveModal(false);
                  setEditState(false);
                  setIsEdit(false);
                }}
              />
            </BackDrop>
          )}
        </div>
      )}
    </>
  );
};

export default Page;
