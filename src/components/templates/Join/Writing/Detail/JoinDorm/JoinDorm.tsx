import { useGetJoinDormitories } from '@/apis/join';
import BtnExtraLarge from '@/components/atoms/AllBtn/BtnExtraLarge/BtnExtraLarge';
import { joinApplicationState, dormitoryRoomTypeState, disabledFieldsState } from '@/recoil/join';
import { joinDormitoriesResponseInformation } from '@/types/join';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface GroupedDormitories {
  male: joinDormitoriesResponseInformation | null;
  female: joinDormitoriesResponseInformation | null;
  dormitoryName: string;
  roomSize: number;
}

const JoinDorm = () => {
  const { data: dormitories } = useGetJoinDormitories();
  const [dormitoryRoomTypes, setDormitoryRoomTypes] = useRecoilState(dormitoryRoomTypeState);
  const [applicationData, setApplicationData] = useRecoilState(joinApplicationState);
  const [disabledFields, setDisabledFields] = useRecoilState(disabledFieldsState);

  useEffect(() => {
    if (dormitories) {
      setDormitoryRoomTypes(dormitories);

      // dormitoryRoomTypeReqList를 기숙사 정보로 초기화
      const initialRoomTypeReqList = dormitories.map((dorm) => ({
        dormitoryRoomTypeId: dorm.dormitoryRoomTypeId,
        acceptLimit: null, // null로 초기화
      }));

      setApplicationData((prev) => ({
        ...prev,
        dormitoryRoomTypeReqList: initialRoomTypeReqList,
      }));
    }
  }, [dormitories, setDormitoryRoomTypes, setApplicationData]);

  const groupDormitories = (dormitories: joinDormitoriesResponseInformation[]) => {
    const grouped = dormitories.reduce<Record<number, GroupedDormitories>>((acc, dorm) => {
      const key = dorm.dormitoryRoomTypeId;
      if (!acc[key]) {
        acc[key] = { dormitoryName: dorm.dormitoryName, roomSize: dorm.roomSize, male: null, female: null };
      }
      if (dorm.gender === 'MALE') {
        acc[key].male = dorm;
      } else if (dorm.gender === 'FEMALE') {
        acc[key].female = dorm;
      }
      return acc;
    }, {});
    return Object.values(grouped);
  };

  // 수용 인원 변경 핸들러
  const handleAcceptLimitChange = (roomTypeId: number, newLimit: string) => {
    const parsedLimit = newLimit === '' ? null : parseInt(newLimit, 10); // 빈 값은 null로 처리

    // 기존 상태값을 복사하여 불변성을 유지
    const newRoomTypeReqList = applicationData.dormitoryRoomTypeReqList.map((room) =>
      room.dormitoryRoomTypeId === roomTypeId ? { ...room, acceptLimit: parsedLimit } : room,
    );

    // 상태 업데이트
    setApplicationData({
      ...applicationData,
      dormitoryRoomTypeReqList: newRoomTypeReqList,
    });

    // 0이 입력되면 해당 roomTypeId의 관련된 필드를 비활성화 처리
    setDisabledFields((prev) => ({
      ...prev,
      [roomTypeId]: parsedLimit === 0,
    }));
  };

  const groupedDormitories = dormitories ? groupDormitories(dormitories) : [];

  return (
    <div className='w-full'>
      <BtnExtraLarge label={'건물 추가로 돌아가기'} disabled={false} />
      <div className='mt-150' />
      {groupedDormitories.map((group, index) => (
        <div key={index} className='w-full flex items-center justify-end mb-22'>
          <div className='whitespace-nowrap'>
            {group.dormitoryName} {group.roomSize}인실
          </div>
          <div className={`ml-40 flex flex-col items-end text-right`}>
            {group.male && (
              <div className={`flex h-34 items-center justify-between w-134 ${group.female ? 'mb-22' : ''}`}>
                <span>남</span>
                <input
                  type='text'
                  value={
                    applicationData.dormitoryRoomTypeReqList
                      .find((room) => room.dormitoryRoomTypeId === group.male?.dormitoryRoomTypeId)
                      ?.acceptLimit?.toString() || ''
                  }
                  onInput={(e) => {
                    const inputValue = (e.target as HTMLInputElement).value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // 숫자만 허용
                    handleAcceptLimitChange(group.male?.dormitoryRoomTypeId || 0, sanitizedValue);
                  }}
                  placeholder={'250'}
                  className='H4-caption placeholder:text-gray-grayscale30 text-gray-grayscale50 outline-none w-76 h-34 p-2 bg-white border border-gray-grayscale30 rounded-8 text-center'
                />
                <span>명</span>
              </div>
            )}
            {group.female && (
              <div className='h-34 flex items-center justify-between w-134'>
                <span>여</span>
                <input
                  type='text'
                  value={
                    applicationData.dormitoryRoomTypeReqList
                      .find((room) => room.dormitoryRoomTypeId === group.female?.dormitoryRoomTypeId)
                      ?.acceptLimit?.toString() || ''
                  }
                  onInput={(e) => {
                    const inputValue = (e.target as HTMLInputElement).value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // 숫자만 허용
                    handleAcceptLimitChange(group.female?.dormitoryRoomTypeId || 0, sanitizedValue);
                  }}
                  placeholder={'250'}
                  className='H4-caption placeholder:text-gray-grayscale30 text-gray-grayscale50 outline-none w-76 h-34 p-2 bg-white border border-gray-grayscale30 rounded-8 text-center'
                />
                <span>명</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JoinDorm;
