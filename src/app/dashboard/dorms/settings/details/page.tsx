'use client';

import {
  deleteRoom,
  postDormSettingImage,
  postRoom,
  putDormitoryName,
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
  DormSettingDetailRoomResponseInformation,
} from '@/types/setting';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { editState } from '@/recoil/nav';

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
  const [newFloor, setNewFloor] = useState<DormSettingDetailResponseInformationFloor[]>([]); //추가한 층
  const [selectedFloor, setSelectedFloor] = useState(1); //선택된 층
  const [selectFilter, setSelectFilter] = useState(0); //선택된 필터
  const [completedFilter, setCompletedFilter] = useState<number[]>([]); //선택 완료된 필터
  const [checkedItems, setCheckedItems] = useState<number[]>([]); //체크한 roomId
  const { data: roomData, error: roomError, mutate: roomMutate } = useDormDetailRoom(buildingId, selectedFloor);
  const [roomInfo, setRoomInfo] = useState<DormSettingDetailRoomResponseInformation[]>(); //호실 조회
  const [isSameDormModal, setIsSameDormModal] = useState(false); //건물명 중복 모달창
  const [isNullDormNameModal, setIsNullDormNameModal] = useState(false); //건물명 null 모달창
  const [isSameFloorModal, setIsSameFloorModal] = useState(false); //층 중복 모달창
  const [floorToUpdate, setFloorToUpdate] = useState<number | null>(null); //지우려는 층 index
  const [editFilter, setEditFilter] = useState(false); //필터 수정 중
  const [isFilterModal, setIsFilterModal] = useState(false); //필터 수정 중 모달창
  const setEditState = useSetRecoilState(editState);
  const [isEdit, setIsEdit] = useState(true); //현재 페이지가 edit 상태인지

  useEffect(() => {
    setEditState(true);
    if (data && data.information) {
      setBuildingInfo(data.information);
      setBuildingName(data.information.name);
      if (data.information.floorAndRoomNumberRes.length === 0) {
        setNewFloor([{ floor: parseInt(''), startRoomNumber: 1, endRoomNumber: parseInt('') }]);
      }
    }
  }, [data]);

  useEffect(() => {
    if (roomData && roomData.information) {
      setRoomInfo(roomData.information);
    }
  }, [roomData]);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(id) ? prevCheckedItems.filter((item) => item !== id) : [...prevCheckedItems, id],
    );
  };

  const handleSetFloorInput = (
    index: number,
    field: 'floor' | 'startRoomNumber' | 'endRoomNumber',
    value: string,
    isNew: boolean,
  ) => {
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

  //호실 생성
  const handleRoomCreate = async (floor: number, startRoomNumber: number, endRoomNumber: number, index: number) => {
    if (buildingInfo.floorAndRoomNumberRes.find((item) => item.floor === floor)) {
      setFloorToUpdate(index);
      setIsSameFloorModal(true);
    } else {
      try {
        const response = await postRoom(buildingId, {
          floor,
          startRoomNumber,
          endRoomNumber,
        });
        if (response.check) {
          setNewFloor((prev) => prev.filter((_, i) => i !== index));
          setSelectedFloor(floor);
          await mutate();
        } else {
          console.log('실패');
        }
      } catch (error) {
        console.error(error);
        console.log('오류가 발생했습니다.');
      }
    }
  };

  //호실 삭제
  const deleteDetailRoom = async (floor: number) => {
    try {
      const response = await deleteRoom(buildingId, floor);
      if (response.check) {
        await mutate();
      } else {
        console.log('실패');
      }
    } catch (error) {
      console.error(error);
      console.log('오류가 발생했습니다.');
    }
  };

  //건물명 수정
  const handleDormitoryName = async () => {
    if (buildingInfo.name !== buildingName)
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
        setIsNullDormNameModal(true);
      }
  };

  //필터에 대한 리스트 수정
  const handleFilter = (filter: string, data: number | string | boolean) => {
    if (!roomInfo) return;

    const updateRoomInfo = (room: DormSettingDetailRoomResponseInformation) => {
      if (checkedItems.includes(room.id)) {
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
  };

  //필터 저장
  const handleRoomFilter = () => {
    if (
      (selectFilter === 1 && roomInfo?.some((room) => room.gender === 'EMPTY')) ||
      (selectFilter === 2 && roomInfo?.some((room) => room.roomSize === null)) ||
      (selectFilter === 3 && roomInfo?.some((room) => room.hasKey === null))
    ) {
      setIsFilterModal(true);
    } else {
      //서버에 필터 저장
      let filter: keyof DormSettingDetailRoomResponseInformation;

      if (selectFilter === 1) {
        filter = 'gender';
      } else if (selectFilter === 2) {
        filter = 'roomSize';
      } else if (selectFilter === 3) {
        filter = 'hasKey';
      } else if (selectFilter === 4) {
        filter = 'isActivated';
      } else {
        return;
      }
      const filteredData = roomInfo
        ?.map((room) => {
          const dataValue = room[filter];
          return {
            id: room.id,
            data: dataValue,
          };
        })
        .filter((room) => room.data !== undefined);

      console.log(filter);
      console.log(filteredData);

      setCompletedFilter([...completedFilter, selectFilter]);
      setSelectFilter(0);
      setCheckedItems([]);
      setEditFilter(false);
    }
  };

  return (
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
            <div className={`${isEdit ? 'max-h-320' : 'max-h-380'} w-410 overflow-y-auto scrollbar-table mb-13 mr-20`}>
              <div className={`${isEdit ? 'gap-12 mr-5' : 'gap-10 items-center ml-20'} flex flex-col`}>
                {isEdit ? (
                  <>
                    {buildingInfo.floorAndRoomNumberRes.map((data, index) => (
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
                        isOne={index === 0} //첫번째인지
                        pressOkBtn={true} //복제 버튼
                        hovered={index === 0} //hover가 가능한지
                        deleteDetailRoom={() => deleteDetailRoom(data.floor)} //해당 층 삭제
                        onClick={() => {
                          if (editFilter) {
                            setIsFilterModal(true);
                          } else {
                            setCompletedFilter([]);
                            setSelectFilter(0);
                            setSelectedFloor(data.floor);
                          }
                        }} //해당 층 선택
                        readOnly={true}
                        handleDuplicate={() => {}} //복제 버튼 클릭
                      />
                    ))}
                    {newFloor.map((data, index) => {
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
                          isOne={buildingInfo.floorAndRoomNumberRes.length === 0 ? index === 0 : false}
                          pressOkBtn={false} //확인 버튼
                          hovered={buildingInfo.floorAndRoomNumberRes.length === 0 ? index !== 0 : true}
                          deleteDetailRoom={() => {
                            setNewFloor((prev) => prev.filter((_, i) => i !== index));
                          }} //newFloor에서 해당층 삭제
                          readOnly={false}
                          handleCreate={() => {
                            handleRoomCreate(data.floor, data.startRoomNumber, data.endRoomNumber, index);
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
                      onClick={() => setSelectedFloor(data.floor)}
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
                onClick={() =>
                  setNewFloor([...newFloor, { floor: parseInt(''), startRoomNumber: 1, endRoomNumber: parseInt('') }])
                }
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
                    done={completedFilter.includes(1)}
                    onClick={() => {
                      if (editFilter) {
                        setIsFilterModal(true);
                      } else {
                        setSelectFilter(1);
                      }
                    }}
                  />
                  <BuildingSetBtn
                    label='호실 타입'
                    detail={false}
                    selected={selectFilter === 2}
                    done={completedFilter.includes(2)}
                    onClick={() => {
                      if (editFilter) {
                        setIsFilterModal(true);
                      } else {
                        setSelectFilter(2);
                      }
                    }}
                  />
                  <BuildingSetBtn
                    label='열쇠 수령 여부'
                    detail={false}
                    selected={selectFilter === 3}
                    done={completedFilter.includes(3)}
                    onClick={() => {
                      if (editFilter) {
                        setIsFilterModal(true);
                      } else {
                        setSelectFilter(3);
                      }
                    }}
                  />
                  <BuildingSetBtn
                    label='비활성화'
                    detail={false}
                    selected={selectFilter === 4}
                    done={completedFilter.includes(4)}
                    onClick={() => {
                      if (editFilter) {
                        setIsFilterModal(true);
                      } else {
                        setSelectFilter(4);
                      }
                    }}
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
            list={roomInfo ? roomInfo : []}
            checkedItems={checkedItems}
            handleCheckboxChange={(id) => {
              if (selectFilter !== 0) {
                setEditFilter(true);
                handleCheckboxChange(id);
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
            disabled={isEdit ? !buildingInfo.name || editFilter || !!selectFilter : false}
            variant='blue'
            onClick={() => {
              if (isEdit) {
                setEditState(false);
              } else {
                setEditState(true);
              }
              setIsEdit(!isEdit);
            }}
          />
        </div>
        <div className='flex-1 flex justify-end'>
          {selectFilter ? (
            <BtnMiniVariant label='저장' disabled={false} variant='blue' selected={false} onClick={handleRoomFilter} />
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
              if (floorToUpdate !== null) {
                setNewFloor((prev) => {
                  const updatedNewFloor = [...prev];
                  updatedNewFloor[floorToUpdate] = {
                    ...updatedNewFloor[floorToUpdate],
                    floor: parseInt(''),
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
          <AlertPrompt
            variant='blue'
            label={'일부 호실이 아직 설정되지 않았습니다.'}
            onConfirm={() => {
              setIsFilterModal(false);
            }}
          />
        </BackDrop>
      )}
    </div>
  );
};

export default Page;
