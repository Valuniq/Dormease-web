'use client';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { disabledFieldsState, dormitoryRoomTypeState, termResIsActiveState, termResListState } from '@/recoil/join';
import AmountEnterList from './AmountEnterList';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import AddPeriodBtn from '@/components/atoms/AllBtn/AddPeriodBtn/AddPeriodBtn';
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

  // Ensure each term has entries for all dormitory room types
  useEffect(() => {
    const newTermResList = [...termResList];
    const currentTerm = newTermResList[index];

    // 기존의 dormitoryTermResList를 복제하여 유지
    const updatedDormitoryTermResList = [...currentTerm.dormitoryTermResList];

    // 모든 dormitoryRoomType을 반복하면서 누락된 항목을 추가
    dormitoryRoomType.forEach((room) => {
      const existingEntry = updatedDormitoryTermResList.find(
        (dorm) => dorm.dormitoryRoomTypeId === room.dormitoryRoomTypeId,
      );

      if (!existingEntry) {
        // 누락된 항목을 추가
        updatedDormitoryTermResList.push({
          dormitoryRoomTypeId: room.dormitoryRoomTypeId,
          dormitoryTermId: currentTerm.termId,
          price: null, // 비어 있는 값으로 설정
        });
      }
    });

    // 현재 상태와 비교하여 다를 때만 업데이트
    if (JSON.stringify(currentTerm.dormitoryTermResList) !== JSON.stringify(updatedDormitoryTermResList)) {
      newTermResList[index] = {
        ...currentTerm,
        dormitoryTermResList: updatedDormitoryTermResList,
      };
      setTermResList(newTermResList);
    }
  }, [dormitoryRoomType, index, termResList, setTermResList]);
  const handleIsActive = () => {
    const newIsActiveState = [...termResIsActive];
    newIsActiveState[index] = !newIsActiveState[index];
    setTermResIsActive(newIsActiveState);
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const newTermResList = [...termResList];
    newTermResList[index] = { ...newTermResList[index], [field]: e.target.value };
    setTermResList(newTermResList);
  };

  const handlePriceChange = (roomTypeId: number, newPrice: number | null) => {
    const validPrice = newPrice !== null ? newPrice : 0;
    const newTermResList = [...termResList];

    const updatedDormitoryTermResList = newTermResList[index].dormitoryTermResList.map((dorm) => {
      if (dorm.dormitoryRoomTypeId === roomTypeId) {
        return { ...dorm, price: validPrice };
      }
      return dorm;
    });

    newTermResList[index] = {
      ...newTermResList[index],
      dormitoryTermResList: updatedDormitoryTermResList,
    };
    setTermResList(newTermResList);
  };

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
            <input
              type='date'
              value={termResList[index].startDate || ''}
              onChange={(e) => handleTermChange(e, 'startDate')}
              min={todayDate}
              max={termResList[index].endDate || ''}
              className='w-155 H4-caption border-[0.5px] border-gray-grayscale40 outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30'
            />
          </div>
          ~
          <div className='flex items-center justify-between mb-22'>
            <input
              type='date'
              value={termResList[index].endDate || ''}
              onChange={(e) => handleTermChange(e, 'endDate')}
              min={termResList[index].startDate || todayDate}
              className='w-155 H4-caption border-[0.5px] border-gray-grayscale40 outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30'
            />
          </div>
          {/* 기숙사 방 유형별 금액 입력 필드 렌더링 */}
          {dormitoryRoomType.map((room) => (
            <div key={room.dormitoryRoomTypeId} className='w-full h-34 mb-22'>
              <AmountEnterList
                roomTypeId={room.dormitoryRoomTypeId}
                onPriceChange={(value) => handlePriceChange(room.dormitoryRoomTypeId, value)}
                price={
                  disabledFields[room.dormitoryRoomTypeId]
                    ? 0 // 비활성화된 필드의 가격은 항상 0으로 설정
                    : termResList[index].dormitoryTermResList.find(
                        (dormRes) => dormRes.dormitoryRoomTypeId === room.dormitoryRoomTypeId,
                      )?.price ?? '' // null 값을 빈 문자열로 처리하여 placeholder로 표시
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
