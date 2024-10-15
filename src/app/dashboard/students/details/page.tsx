'use client';
import React, { useEffect, useState } from 'react';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import StudentManagement from '@/components/templates/Student/Management/StudentManagement';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BlackListBtn from '@/components/atoms/AllBtn/BlackListBtn/BlackListBtn';
import ResignBtn from '@/components/atoms/AllBtn/ResignBtn/ResignBtn';
import { useRouter } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { editState } from '@/recoil/nav';
import {
  deleteStudentBlackList,
  deleteStudentResign,
  getDormList,
  getRoomManual,
  putStudentInfo,
  useStudentDetail,
} from '@/apis/student';
import { studentIdState } from '@/recoil/student';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import { genderText, statusText } from '@/constants/student';
import { BuildingList } from '@/types/student';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';

//파일 변경
export const handleFileChange = async (
  e: React.ChangeEvent<HTMLInputElement>,
  field: string,
  setFile: React.Dispatch<
    React.SetStateAction<{
      copy: File | null;
      prioritySelectionCopy: File | null;
    }>
  >,
  setFileName: React.Dispatch<
    React.SetStateAction<{
      copy: string;
      prioritySelectionCopy: string;
    }>
  >,
) => {
  if (!e.target.files || e.target.files.length === 0) {
    console.log('파일이 선택되지 않았습니다.');
    return;
  }

  const file = e.target.files[0];
  const sizeInMB = file.size / (1024 * 1024);

  if (sizeInMB > 15) {
    alert('파일 용량은 15MB를 초과할 수 없습니다.');
    return;
  }

  setFile((prevData) => ({
    ...prevData,
    [field]: file,
  }));

  const fileName = file.name;
  setFileName((prevData) => ({
    ...prevData,
    [field]: fileName,
  }));
};

const Page = () => {
  const router = useRouter();
  const setEditState = useSetRecoilState(editState);
  const id = useRecoilValue(studentIdState);
  const [isEdit, setIsEdit] = useState(false);
  const [isBuilding, setIsBuilding] = useState(false);
  const { data, error, isLoading } = useStudentDetail(id);
  const [studentData, setStudentData] = useState(data);
  const [fileName, setFileName] = useState({
    copy: '',
    prioritySelectionCopy: '',
  }); //등본, 우선선발 파일 이름
  const [file, setFile] = useState<{ copy: File | null; prioritySelectionCopy: File | null }>({
    copy: null,
    prioritySelectionCopy: null,
  }); //등본, 우선선발 파일
  const [isEditModal, setIsEditModal] = useState(false); //수정 모달
  const [isAddBlackListModal, setIsAddBlackListModal] = useState(false); //블랙리스트 모달
  const [isBlackListModal, setIsBlackListModal] = useState(false); //블랙리스트 페이지 이동 모달
  const [isAddResignModal, setIsAddResignModal] = useState(false); //퇴사처리 모달
  const [isRoomNotNullModal, setIsRoomNotNullModal] = useState(false); //호실에 빈자리가 없는 경우 모달
  const [selectedBuilding, setSelectedBuilding] = useState({
    isModal: false,
    dormitoryId: 0,
    dormitoryName: '',
    roomSize: 0,
  }); //선택된 건물 저장 및 모달
  const [buildingList, setBuildingList] = useState<BuildingList[]>([]); //건물 목록

  useEffect(() => {
    const fetchDormList = async () => {
      if (data) {
        setStudentData(data);
        setFileName({
          copy: data.information.residentPrivateInfoRes.copy,
          prioritySelectionCopy: data.information.residentPrivateInfoRes.prioritySelectionCopy,
        });

        //사생 성별 + 거주기간 id에 맞는 기숙사 조회
        const response = await getDormList(id, data.information.residentDormitoryInfoRes.termId);
        if (response.check) {
          setBuildingList(response.information);
        }
      }
    };

    fetchDormList();
  }, [data, id]);

  if (isLoading) return <div></div>;

  //수정 시 보여는 데이터 변경
  const handleInputChange = (resKey: string, field: string, value: string | number | boolean | string[]) => {
    setStudentData((prevData) => {
      if (!prevData) return prevData;

      return {
        ...prevData,
        information: {
          ...prevData.information,
          [resKey]: {
            ...prevData.information.residentPrivateInfoRes,
            ...prevData.information.residentDormitoryInfoRes,
            [field]: value,
          },
        },
        check: prevData.check ?? false,
      };
    });
  };

  //수정 완료 버튼 클릭 시
  const handleEdit = async () => {
    if (!studentData || !studentData.information) return null;

    const residentDormitoryInfoReq = {
      dormitoryId: studentData.information.residentDormitoryInfoRes.dormitoryId,
      roomSize: studentData.information.residentDormitoryInfoRes.roomSize,
      roomNumber: studentData.information.residentDormitoryInfoRes.roomNumber,
      bedNumber: studentData.information.residentDormitoryInfoRes.bedNumber,
      termId: studentData.information.residentDormitoryInfoRes.termId,
    };

    const residentPrivateInfoReq = {
      dormitoryPayment: studentData.information.residentPrivateInfoRes.dormitoryPayment,
      hasKey: studentData.information.residentPrivateInfoRes.hasKey,
      bankName: studentData.information.residentPrivateInfoRes.bankName,
      accountNumber: studentData.information.residentPrivateInfoRes.accountNumber,
      emergencyContact: studentData.information.residentPrivateInfoRes.emergencyContact,
      emergencyRelation: studentData.information.residentPrivateInfoRes.emergencyRelation,
    };

    await putStudentInfo(id, file.copy, file.prioritySelectionCopy, {
      residentDormitoryInfoReq,
      residentPrivateInfoReq,
    });

    setEditState(false);
    router.push(`/dashboard/students`);
  };

  //호실 배치
  const handleRoomNumber = async () => {
    if (!studentData) return null;

    const response = await getRoomManual(
      studentData.information.residentDormitoryInfoRes.dormitoryId,
      studentData.information.residentDormitoryInfoRes.roomNumber,
    );
    if (response.check && response.information.possible) {
      handleInputChange('residentDormitoryInfoRes', 'bedNumber', response.information.bedNumber);
      handleInputChange('residentDormitoryInfoRes', 'roommateNames', response.information.roommateNames);
    } else {
      setIsRoomNotNullModal(true);
    }
  };

  //블랙리스트
  const handleBlackList = async () => {
    const response = await deleteStudentBlackList(id);

    if (response.check) {
      setEditState(false);
      setIsAddBlackListModal(false);
      setIsBlackListModal(true);
    }
  };

  //퇴사처리
  const handleResign = async () => {
    const response = await deleteStudentResign(id);

    if (response.check) {
      setEditState(false);
      router.push(`/dashboard/students`);
    }
  };

  return (
    <div className='flex flex-col relative w-[1200px]'>
      <h3 className='H3 text-gray-grayscale50 text-center mb-6 w-[1200px]'>개인정보</h3>
      {!isEdit && (
        <div className='absolute right-0 -top-8'>
          <BtnMiniVariant
            label='수정'
            disabled={false}
            selected={false}
            variant='blue'
            onClick={() => {
              setEditState(true);
              setIsEdit(!isEdit);
            }}
          />
        </div>
      )}
      <div className='flex justify-between gap-100 border-t-1 border-t-gray-grayscale50 pt-31 px-46 h-590'>
        <div className='flex-1 flex flex-col'>
          <StudentManagement
            label='이름'
            text={studentData?.information.residentPrivateInfoRes.name}
            value={studentData?.information.residentPrivateInfoRes.name}
          />
          <StudentManagement
            label='학번'
            text={studentData?.information.residentPrivateInfoRes.studentNumber}
            value={studentData?.information.residentPrivateInfoRes.studentNumber}
          />
          <StudentManagement
            label='학과'
            text={studentData?.information.residentPrivateInfoRes.major}
            value={studentData?.information.residentPrivateInfoRes.major}
          />
          <StudentManagement
            label='학년'
            text={
              studentData?.information.residentPrivateInfoRes.schoolYear
                ? `${studentData.information.residentPrivateInfoRes.schoolYear}학년`
                : ''
            }
            value={studentData?.information.residentPrivateInfoRes.schoolYear}
          />
          <StudentManagement
            label='학적'
            text={studentData && statusText[studentData?.information.residentPrivateInfoRes.schoolStatus]}
            value={studentData && statusText[studentData?.information.residentPrivateInfoRes.schoolStatus]}
          />
          <StudentManagement
            label='성별'
            text={studentData && genderText[studentData.information.residentPrivateInfoRes.gender]}
            value={studentData && genderText[studentData.information.residentPrivateInfoRes.gender]}
          />
          <StudentManagement
            label='휴대전화'
            text={studentData?.information.residentPrivateInfoRes.phoneNumber}
            value={studentData?.information.residentPrivateInfoRes.phoneNumber}
          />
          <StudentManagement
            label='본거주지'
            text={studentData?.information.residentPrivateInfoRes.address}
            value={studentData?.information.residentPrivateInfoRes.address}
          />
          <StudentManagement
            label='등본'
            isEdit={isEdit}
            type='file'
            text={fileName.copy}
            value={studentData?.information.residentPrivateInfoRes.copy}
            handleFileChange={(e) => handleFileChange(e, 'copy', setFile, setFileName)}
          />
          <StudentManagement
            label='우선선발'
            isEdit={isEdit}
            type='file'
            text={fileName.prioritySelectionCopy}
            value={studentData?.information.residentPrivateInfoRes.prioritySelectionCopy}
            handleFileChange={(e) => handleFileChange(e, 'prioritySelectionCopy', setFile, setFileName)}
          />
          <StudentManagement
            label='식수'
            text={
              studentData?.information.residentPrivateInfoRes.mealTicketCount
                ? `${studentData?.information.residentPrivateInfoRes.mealTicketCount}식`
                : ''
            }
            value={studentData?.information.residentPrivateInfoRes.mealTicketCount}
          />
        </div>
        <div className='flex-1 flex flex-col'>
          <StudentManagement
            right={isEdit}
            label='흡연여부'
            text={studentData?.information.residentPrivateInfoRes.isSmoking ? 'O' : 'X'}
            value={studentData?.information.residentPrivateInfoRes.isSmoking}
          />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            type='checkbox'
            label='생활관비 납부'
            text={studentData?.information.residentPrivateInfoRes.dormitoryPayment ? 'O' : 'X'}
            value={studentData?.information.residentPrivateInfoRes.dormitoryPayment}
            setIsChecked={(isChecked) => handleInputChange('residentPrivateInfoRes', 'dormitoryPayment', isChecked)}
          />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            label='열쇠 수령 여부'
            type='checkbox'
            text={studentData?.information.residentPrivateInfoRes.hasKey ? '수령' : '미수령'}
            value={studentData?.information.residentPrivateInfoRes.hasKey}
            setIsChecked={(isChecked) => handleInputChange('residentPrivateInfoRes', 'hasKey', isChecked)}
          />
          <StudentManagement
            right={isEdit}
            label='상점'
            text={studentData?.information.residentPrivateInfoRes.bonusPoint}
            value={studentData?.information.residentPrivateInfoRes.bonusPoint}
          />
          <StudentManagement
            right={isEdit}
            label='벌점'
            text={studentData?.information.residentPrivateInfoRes.minusPoint}
            value={studentData?.information.residentPrivateInfoRes.minusPoint}
          />
          <StudentManagement
            right={isEdit}
            label='개인정보 동의'
            text={studentData?.information.residentPrivateInfoRes.personalInfoConsent ? 'O' : 'X'}
            value={studentData?.information.residentPrivateInfoRes.personalInfoConsent}
          />
          <StudentManagement
            right={isEdit}
            label='제3자제공 동의'
            text={studentData?.information.residentPrivateInfoRes.thirdPartyConsent ? 'O' : 'X'}
            value={studentData?.information.residentPrivateInfoRes.thirdPartyConsent}
          />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='은행명'
            text={studentData?.information.residentPrivateInfoRes.bankName}
            value={studentData?.information.residentPrivateInfoRes.bankName}
            input={studentData?.information.residentPrivateInfoRes.bankName}
            setInput={(value) => handleInputChange('residentPrivateInfoRes', 'bankName', value)}
          />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='계좌번호'
            text={studentData?.information.residentPrivateInfoRes.accountNumber}
            value={studentData?.information.residentPrivateInfoRes.accountNumber}
            input={studentData?.information.residentPrivateInfoRes.accountNumber}
            setInput={(value) => handleInputChange('residentPrivateInfoRes', 'accountNumber', value)}
          />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='비상연락처'
            text={studentData?.information.residentPrivateInfoRes.emergencyContact}
            value={studentData?.information.residentPrivateInfoRes.emergencyContact}
            input={studentData?.information.residentPrivateInfoRes.emergencyContact}
            setInput={(value) => handleInputChange('residentPrivateInfoRes', 'emergencyContact', value)}
          />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='비상연락처 관계'
            text={studentData?.information.residentPrivateInfoRes.emergencyRelation}
            value={studentData?.information.residentPrivateInfoRes.emergencyRelation}
            input={studentData?.information.residentPrivateInfoRes.emergencyRelation}
            setInput={(value) => handleInputChange('residentPrivateInfoRes', 'emergencyRelation', value)}
          />
        </div>
      </div>
      <div className='flex flex-col h-213 mt-29 pt-12 bg-gray-grayscale5'>
        <h3 className='H3 text-gray-grayscale50 text-center mb-6 border-b-1 border-b-gray-grayscale50 pb-8'>
          기숙사 정보
        </h3>
        <div className='flex justify-between gap-100 h-136 px-46'>
          <div className='flex-1 flex flex-col'>
            <StudentManagement
              isEdit={isEdit}
              type='building'
              isBuilding={isBuilding}
              setIsBuilding={setIsBuilding}
              list={buildingList}
              dormInfo={{
                dormitoryId: studentData?.information.residentDormitoryInfoRes.dormitoryId ?? 0,
                dormitoryName: studentData?.information.residentDormitoryInfoRes.dormitoryName ?? '',
                roomSize: studentData?.information.residentDormitoryInfoRes.roomSize ?? 0,
              }}
              handleSelectedDorm={(value) => {
                setSelectedBuilding({
                  isModal: true,
                  dormitoryId: value.dormitoryId,
                  dormitoryName: value.dormitoryName,
                  roomSize: value.roomSize,
                });
              }}
              label='건물'
              text={
                studentData?.information.residentDormitoryInfoRes.dormitoryName
                  ? studentData?.information.residentDormitoryInfoRes.dormitoryName +
                    (studentData?.information.residentDormitoryInfoRes.roomSize !== 0
                      ? '(' + studentData?.information.residentDormitoryInfoRes.roomSize + '인실)'
                      : '')
                  : ''
              }
              value={studentData?.information.residentDormitoryInfoRes.dormitoryName}
            />
            <StudentManagement
              isEdit={isEdit}
              type='roomNumber'
              label='호실'
              text={
                studentData?.information.residentDormitoryInfoRes.roomNumber
                  ? `${studentData?.information.residentDormitoryInfoRes.roomNumber}호`
                  : ''
              }
              value={studentData?.information.residentDormitoryInfoRes.roomNumber}
              input={
                studentData?.information.residentDormitoryInfoRes.roomNumber
                  ? studentData?.information.residentDormitoryInfoRes.roomNumber.toString()
                  : ''
              }
              setInput={(value) => handleInputChange('residentDormitoryInfoRes', 'roomNumber', value)}
              handleRoomNumber={handleRoomNumber}
            />
            <StudentManagement
              type='bedNumber'
              label='침대번호'
              text={
                studentData?.information.residentDormitoryInfoRes.bedNumber
                  ? `${studentData?.information.residentDormitoryInfoRes.bedNumber}번`
                  : ''
              }
              value={studentData?.information.residentDormitoryInfoRes.bedNumber}
            />
          </div>
          <div className='flex-1 flex flex-col'>
            <StudentManagement
              label='거주기간'
              text={studentData?.information.residentDormitoryInfoRes.termName}
              value={studentData?.information.residentDormitoryInfoRes.termName}
            />
            <StudentManagement
              label='룸메이트 신청'
              text={studentData?.information.residentDormitoryInfoRes.isApplyRoommate ? 'O' : 'X'}
              value={studentData?.information.residentDormitoryInfoRes.isApplyRoommate}
            />
            <StudentManagement
              label='인원 정보'
              text={
                studentData?.information.residentDormitoryInfoRes.roommateNames &&
                studentData?.information.residentDormitoryInfoRes.roommateNames.join(' ')
              }
              value={
                studentData?.information.residentDormitoryInfoRes.roommateNames &&
                studentData?.information.residentDormitoryInfoRes.roommateNames.join(' ')
              }
            />
          </div>
        </div>
      </div>
      {isEdit && (
        <>
          <div className='relative mt-16'>
            <div className='flex gap-13 absolute right-0 -top-8'>
              <BlackListBtn label='블랙리스트' onClick={() => setIsAddBlackListModal(true)} />
              <ResignBtn label='퇴사처리' onClick={() => setIsAddResignModal(true)} />
            </div>
          </div>
          <div className='flex justify-center mt-9'>
            <BtnMidVariant label='수정완료' disabled={false} variant='blue' onClick={() => setIsEditModal(true)} />
          </div>
        </>
      )}
      {isEditModal && (
        <BackDrop isOpen={isEditModal}>
          <ConfirmPrompt
            variant='blue'
            label='수정을 완료하시겠습니까?'
            onCancel={() => {
              setIsEditModal(false);
            }}
            onConfirm={() => {
              setIsEditModal(false);
              handleEdit();
            }}
          />
        </BackDrop>
      )}
      {isAddBlackListModal && (
        <BackDrop isOpen={isAddBlackListModal}>
          <ConfirmPrompt
            variant='blue'
            label='블랙리스트로 추가하시겠습니까?'
            onCancel={() => {
              setIsAddBlackListModal(false);
            }}
            onConfirm={() => {
              setIsAddBlackListModal(false);
              handleBlackList();
            }}
          />
        </BackDrop>
      )}
      {isBlackListModal && (
        <BackDrop isOpen={isBlackListModal}>
          <ConfirmPrompt
            variant='blue'
            label='블랙리스트 페이지로 이동하시겠습니까?'
            onCancel={() => {
              setIsBlackListModal(false);
              router.push(`/dashboard/students`);
            }}
            onConfirm={() => {
              setIsBlackListModal(false);
              router.push(`/dashboard/students/blacklists`);
            }}
          />
        </BackDrop>
      )}
      {isAddResignModal && (
        <BackDrop isOpen={isAddResignModal}>
          <ConfirmPrompt
            variant='red'
            label='퇴사처리를 하시겠습니까?'
            onCancel={() => {
              setIsAddResignModal(false);
            }}
            onConfirm={() => {
              setIsAddResignModal(false);
              handleResign();
            }}
          />
        </BackDrop>
      )}
      {selectedBuilding.isModal && (
        <BackDrop isOpen={selectedBuilding.isModal}>
          <ConfirmPrompt
            variant='red'
            label='건물 변경시 호실 및 침대번호가 초기화 됩니다.\n재배치 하시겠습니까?'
            onCancel={() => {
              setSelectedBuilding({
                isModal: false,
                dormitoryId: 0,
                dormitoryName: '',
                roomSize: 0,
              });
            }}
            onConfirm={() => {
              setSelectedBuilding({
                isModal: false,
                dormitoryId: 0,
                dormitoryName: '',
                roomSize: 0,
              });
              handleInputChange('residentDormitoryInfoRes', 'dormitoryId', selectedBuilding.dormitoryId);
              handleInputChange('residentDormitoryInfoRes', 'dormitoryName', selectedBuilding.dormitoryName);
              handleInputChange('residentDormitoryInfoRes', 'roomSize', selectedBuilding.roomSize);
              handleInputChange('residentDormitoryInfoRes', 'roomNumber', '');
              handleInputChange('residentDormitoryInfoRes', 'bedNumber', '');
              handleInputChange('residentDormitoryInfoRes', 'roommateNames', '');
            }}
          />
        </BackDrop>
      )}
      {isRoomNotNullModal && (
        <BackDrop isOpen={isRoomNotNullModal}>
          <AlertPrompt
            variant='red'
            label='해당 호실에는 현재 빈 자리가 없습니다.'
            onConfirm={() => setIsRoomNotNullModal(false)}
          />
        </BackDrop>
      )}
    </div>
  );
};

export default Page;
