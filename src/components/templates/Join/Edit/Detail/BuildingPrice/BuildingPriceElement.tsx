'use client';

import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React, { useEffect } from 'react';
import AmountEnterList from './AmountEnterList';
import AddPeriodBtn from '@/components/atoms/AllBtn/AddPeriodBtn/AddPeriodBtn';
import { useRecoilState } from 'recoil';
import { disabledFieldsState, dormitoryRoomTypeState, termResIsActiveState, termResListState } from '@/recoil/join';
import { todayDate } from '@/utils/dateUtils';

type Props = {
  index: number;
  isActive: boolean;
};

const BuildingPriceElement = ({ index, isActive }: Props) => {
  const [termResIsActive, setTermResIsActive] = useRecoilState(termResIsActiveState);
  const [termResList, setTermResList] = useRecoilState(termResListState);
  const [dormitoryRoomType] = useRecoilState(dormitoryRoomTypeState);
  const [disabledFields] = useRecoilState(disabledFieldsState);

  useEffect(() => {
    if (termResList.length > 0 && dormitoryRoomType.length > 0) {
      // 업데이트가 필요한지 확인하기 위해 기존 상태와 새로운 상태를 비교
      const isUpdated = termResList.some((term) =>
        term.dormitoryTermResList.some((dormitoryTerm) => {
          const room = dormitoryRoomType.find(
            (roomType) => roomType.dormitoryRoomTypeId === dormitoryTerm.dormitoryRoomTypeId,
          );
          return room && dormitoryTerm.price === null; // 가격이 null인 경우만 업데이트 필요
        }),
      );

      if (!isUpdated) {
        // 이미 업데이트되어 있으면 더 이상 setTermResList를 호출하지 않음
        return;
      }

      // 가격 업데이트 로직
      const updatedTermResList = termResList.map((term) => {
        const updatedDormitoryTermResList = term.dormitoryTermResList.map((dormitoryTerm) => {
          const room = dormitoryRoomType.find(
            (roomType) => roomType.dormitoryRoomTypeId === dormitoryTerm.dormitoryRoomTypeId,
          );

          return room
            ? {
                ...dormitoryTerm,
                price: dormitoryTerm.price || 0, // 가격이 null이면 0으로 설정, 아니면 기존 가격 유지
              }
            : dormitoryTerm;
        });

        return {
          ...term,
          dormitoryTermResList: updatedDormitoryTermResList,
        };
      });

      setTermResList(updatedTermResList); // 가격이 null인 경우에만 업데이트
    }
  }, [dormitoryRoomType, termResList, setTermResList]);

  // isActive 상태 토글
  const handleIsActive = () => {
    const newIsActiveState = [...termResIsActive];
    newIsActiveState[index] = !newIsActiveState[index];
    setTermResIsActive(newIsActiveState);
  };

  // 기간 데이터 변경 핸들러
  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const newTermResList = [...termResList];
    newTermResList[index] = { ...newTermResList[index], [field]: e.target.value };
    setTermResList(newTermResList);
  };

  // 금액 변경 핸들러: dormitoryRoomTypeId에 해당하는 데이터를 업데이트
  const handlePriceChange = (roomTypeId: number, newPrice: number | null) => {
    const validPrice = newPrice !== null ? newPrice : 0;
    const newTermResList = [...termResList];

    // dormitoryTermResList에서 해당 roomTypeId에 맞는 방 정보를 찾아서 가격 업데이트
    const updatedDormitoryTermResList = newTermResList[index].dormitoryTermResList.map((dorm) => {
      if (dorm.dormitoryRoomTypeId === roomTypeId) {
        return { ...dorm, price: validPrice };
      }
      return dorm;
    });

    // 업데이트된 리스트를 상태에 저장
    newTermResList[index] = {
      ...newTermResList[index],
      dormitoryTermResList: updatedDormitoryTermResList,
    };
    setTermResList(newTermResList);
  };

  // 금액 입력 필드 (비활성화 상태일 경우 가격을 0으로 설정)
  dormitoryRoomType.map((room) => (
    <div key={room.dormitoryRoomTypeId} className='w-full h-34 mb-22'>
      <AmountEnterList
        roomTypeId={room.dormitoryRoomTypeId}
        onPriceChange={(value) => handlePriceChange(room.dormitoryRoomTypeId, value)}
        price={
          disabledFields[room.dormitoryRoomTypeId]
            ? 0 // 비활성화된 필드의 가격을 항상 0으로 설정
            : termResList[index].dormitoryTermResList.find(
                (dormRes) => dormRes.dormitoryRoomTypeId === room.dormitoryRoomTypeId,
              )?.price ?? null
        }
        disabled={disabledFields[room.dormitoryRoomTypeId]}
      />
    </div>
  ));

  // 렌더링 시에도 price가 null이면 0으로 설정
  {
    dormitoryRoomType.map((room) => (
      <div key={room.dormitoryRoomTypeId} className='w-full h-34 mb-22'>
        <AmountEnterList
          roomTypeId={room.dormitoryRoomTypeId}
          onPriceChange={(value) => handlePriceChange(room.dormitoryRoomTypeId, value)}
          price={
            termResList[index].dormitoryTermResList.find(
              (dormRes) => dormRes.dormitoryRoomTypeId === room.dormitoryRoomTypeId,
            )?.price ?? 0 // null 값을 0으로 처리
          }
          disabled={disabledFields[room.dormitoryRoomTypeId]}
        />
      </div>
    ));
  }

  return (
    <div className='relative'>
      {!isActive && (
        <div onClick={handleIsActive} className='absolute top-110 left-50 z-joinSettingAddPeriodBtn'>
          <AddPeriodBtn />
        </div>
      )}

      <div
        className={`pt-17 w-184 min-h-371 h-full rounded-8 bg-gray-grayscale5 ${
          isActive ? 'opacity-100' : 'opacity-50 pointer-events-none'
        }`}
      >
        <div className='flex flex-col items-center'>
          <div className='w-112 flex items-center justify-around mb-20'>
            이름
            <TextBoxes
              input={termResList[index].termName}
              setInput={(value: string) => handleTermChange({ target: { value } } as any, 'termName')}
              placeholder={'기간'}
              type={'textBox4'}
            />
          </div>
          <div className='mb-8'>거주기간</div>
          <div className='flex items-center justify-between'>
            {/* 입사 날짜 입력 (startDate) */}
            <input
              type='date'
              value={termResList[index].startDate || ''}
              onChange={(e) => handleTermChange(e, 'startDate')}
              min={todayDate} // 최소 날짜 설정
              max={termResList[index].endDate || ''} // endDate보다 늦을 수 없음
              className='w-155 H4-caption border-[0.5px] border-gray-grayscale40 outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30'
            />
          </div>
          ~
          <div className='flex items-center justify-between mb-22'>
            {/* 퇴사 날짜 입력 (endDate) */}
            <input
              type='date'
              value={termResList[index].endDate || ''}
              onChange={(e) => handleTermChange(e, 'endDate')}
              min={termResList[index].startDate || todayDate} // startDate보다 이를 수 없음
              className='w-155 H4-caption border-[0.5px] border-gray-grayscale40  outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30'
            />
          </div>
          {/* dormitoryRoomTypeState의 항목을 모두 렌더링 */}
          {dormitoryRoomType.map((room) => (
            <div key={room.dormitoryRoomTypeId} className='w-full h-34 mb-22'>
              <AmountEnterList
                roomTypeId={room.dormitoryRoomTypeId}
                onPriceChange={(value) => handlePriceChange(room.dormitoryRoomTypeId, value)}
                price={
                  disabledFields[room.dormitoryRoomTypeId]
                    ? 0 // 비활성화된 필드의 가격을 항상 0으로 설정
                    : termResList[index].dormitoryTermResList.find(
                        (dormRes) => dormRes.dormitoryRoomTypeId === room.dormitoryRoomTypeId,
                      )?.price ?? 0 // null 값을 0으로 처리
                }
                disabled={disabledFields[room.dormitoryRoomTypeId]} // 비활성화 여부 반영
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingPriceElement;
