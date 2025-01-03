'use client';
import React, { useEffect, useState } from 'react';
import StudentManagement from '@/components/templates/Student/Management/StudentManagement';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { editState } from '@/recoil/nav';
import { BuildingList, StudentDetailResponse, TermResponse, TermResponseInformation } from '@/types/student';
import TermList from '@/components/templates/Student/Addition/TermList';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';
import { getDormList, getRoomManual, postAddStudent, useDormTermList } from '@/apis/student';

const Page = () => {
  const router = useRouter();
  const setEditState = useSetRecoilState(editState);
  const isEdit = true;
  const [isBuilding, setIsBuilding] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false); //생성 모달
  const [isRoomNotNullModal, setIsRoomNotNullModal] = useState(false); //호실에 빈자리가 없는 경우 모달
  const [fileName, setFileName] = useState({
    copy: '',
    prioritySelectionCopy: '',
  }); //등본, 우선선발 파일 이름
  const [file, setFile] = useState<{ copy: File | null; prioritySelectionCopy: File | null }>({
    copy: null,
    prioritySelectionCopy: null,
  }); //등본, 우선선발 파일
  const [selectedBuilding, setSelectedBuilding] = useState({
    isModal: false,
    dormitoryId: 0,
    dormitoryName: '',
    roomSize: 0,
  }); //선택된 건물 저장 및 모달
  const [buildingList, setBuildingList] = useState<BuildingList[]>([]); //건물 목록
  const [isTermListModal, setIsTermListModal] = useState(false); //입사 신청 목록 모달
  const [termList, setTermList] = useState<TermResponse['information']>([]); //입사 신청 목록
  const [availableTermRes, setAvailableTermRes] = useState<TermResponseInformation['availableTermRes']>([]); //거주 기간 목록
  const { data, error, isLoading } = useDormTermList(); //입사신청 및 거주기간 목록 조회
  const [input, setInput] = useState<StudentDetailResponse['information']>({
    residentPrivateInfoRes: {
      residentId: 0,
      name: '',
      studentNumber: '',
      major: '',
      schoolYear: null,
      schoolStatus: '',
      gender: 'MALE',
      phoneNumber: '',
      address: '',
      copy: '',
      prioritySelectionCopy: '',
      mealTicketCount: null,
      isSmoking: false,
      dormitoryPayment: false,
      hasKey: false,
      bonusPoint: 0,
      minusPoint: 0,
      personalInfoConsent: false,
      thirdPartyConsent: false,
      bankName: '',
      accountNumber: '',
      emergencyContact: '',
      emergencyRelation: '',
    },
    residentDormitoryInfoRes: {
      dormitoryId: 0,
      dormitoryName: '',
      roomSize: null,
      roomNumber: null,
      bedNumber: null,
      termId: 0,
      termName: '',
      isApplyRoommate: false,
      roommateNames: [''],
    },
  });

  useEffect(() => {
    if (data) {
      setTermList(data.information);
    }
  }, [data]);

  //파일 변경
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
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

  //거주기간 변경
  const handleTerm = async (id: number) => {
    handleInputChange('residentDormitoryInfoRes', 'termId', id);
    const selectedTerm = availableTermRes.find((data) => data.termId === id);
    if (selectedTerm) handleInputChange('residentDormitoryInfoRes', 'termName', selectedTerm.termName);

    //사생 성별 + 거주기간 id에 맞는 기숙사 조회
    const response = await getDormList(input.residentPrivateInfoRes.gender, id);
    if (response.check) {
      setBuildingList(response.information);
    }
  };

  //호실 배치
  const handleRoomNumber = async () => {
    const response = await getRoomManual(
      input.residentDormitoryInfoRes.dormitoryId,
      input.residentDormitoryInfoRes.roomSize,
      input.residentDormitoryInfoRes.roomNumber,
    );
    if (response.check && response.information.possible) {
      handleInputChange('residentDormitoryInfoRes', 'bedNumber', response.information.bedNumber);
      handleInputChange('residentDormitoryInfoRes', 'roommateNames', response.information.roommateNames);
    } else {
      setIsRoomNotNullModal(true);
    }
  };

  //보이는 데이터 변경
  const handleInputChange = (resKey: string, field: string, value: string | number | boolean | string[]) => {
    setInput((prevData) => {
      if (!prevData) return prevData;

      return {
        ...prevData,
        [resKey]: {
          ...prevData.residentPrivateInfoRes,
          ...prevData.residentDormitoryInfoRes,
          [field]: value,
        },
      };
    });
  };

  //생성하기 버튼 클릭 시
  const handleCreate = async () => {
    const addStudentData = {
      name: input.residentPrivateInfoRes.name,
      gender: input.residentPrivateInfoRes.gender,
      hasKey: input.residentPrivateInfoRes.hasKey,
      residentDormitoryInfoReq: {
        dormitoryId: input.residentDormitoryInfoRes.dormitoryId,
        roomSize: input.residentDormitoryInfoRes.roomSize,
        roomNumber: input.residentDormitoryInfoRes.roomNumber,
        bedNumber: input.residentDormitoryInfoRes.bedNumber,
        termId: input.residentDormitoryInfoRes.termId,
      },
    };

    await postAddStudent(addStudentData);
    setEditState(false);
    router.push(`/dashboard/students`);
  };

  return (
    <>
      <div className='flex flex-col relative w-[1200px]'>
        <h3 className='H3 text-gray-grayscale50 text-center mb-6 w-[1200px]'>사생 추가 상세 내용</h3>
        <div className='flex justify-between gap-100 border-t-1 border-t-gray-grayscale50 pt-31 px-46 h-590'>
          <div className='flex-1 flex flex-col'>
            <StudentManagement
              label='이름'
              isEdit={isEdit}
              type='string'
              maxLength={8}
              text={input.residentPrivateInfoRes.name}
              value={input.residentPrivateInfoRes.name}
              input={input.residentPrivateInfoRes.name}
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'name', value)}
            />
            <StudentManagement
              label='학번'
              isEdit={isEdit}
              type='string'
              maxLength={12}
              text={input.residentPrivateInfoRes.studentNumber}
              value={input.residentPrivateInfoRes.studentNumber}
              input={input.residentPrivateInfoRes.studentNumber}
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'studentNumber', value)}
            />
            <StudentManagement
              label='학과'
              isEdit={isEdit}
              type='string'
              text={input.residentPrivateInfoRes.major}
              value={input.residentPrivateInfoRes.major}
              input={input.residentPrivateInfoRes.major}
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'major', value)}
            />
            <StudentManagement
              label='학년'
              isEdit={isEdit}
              type='string'
              text={input?.residentPrivateInfoRes.schoolYear ? `${input.residentPrivateInfoRes.schoolYear}학년` : ''}
              value={input.residentPrivateInfoRes.schoolYear}
              input={input.residentPrivateInfoRes.schoolYear ? input.residentPrivateInfoRes.schoolYear.toString() : ''}
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'schoolYear', value)}
            />
            <StudentManagement
              label='학적'
              isEdit={isEdit}
              type='string'
              text={input.residentPrivateInfoRes.schoolStatus}
              value={input.residentPrivateInfoRes.schoolStatus}
              input={input.residentPrivateInfoRes.schoolStatus}
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'schoolStatus', value)}
            />
            <StudentManagement
              label='성별'
              isEdit={isEdit}
              type='radio'
              text={input.residentPrivateInfoRes.gender}
              value={input.residentPrivateInfoRes.gender}
              setIsOn={(isOn) => handleInputChange('residentPrivateInfoRes', 'gender', isOn ? 'MALE' : 'FEMALE')}
            />
            <StudentManagement
              label='휴대전화'
              isEdit={isEdit}
              type='string'
              text={input.residentPrivateInfoRes.phoneNumber}
              value={input.residentPrivateInfoRes.phoneNumber}
              input={input.residentPrivateInfoRes.phoneNumber}
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'phoneNumber', value)}
            />
            <StudentManagement
              label='본거주지'
              isEdit={isEdit}
              type='string'
              text={input.residentPrivateInfoRes.address}
              value={input.residentPrivateInfoRes.address}
              input={input.residentPrivateInfoRes.address}
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'address', value)}
            />
            <StudentManagement
              label='등본'
              isEdit={isEdit}
              type='file'
              text={fileName.copy}
              value={input.residentPrivateInfoRes.copy}
              handleFileChange={(e) => handleFileChange(e, 'copy')}
            />
            <StudentManagement
              label='우선선발'
              isEdit={isEdit}
              type='file'
              text={fileName.prioritySelectionCopy}
              value={input.residentPrivateInfoRes.prioritySelectionCopy}
              handleFileChange={(e) => handleFileChange(e, 'prioritySelectionCopy')}
            />
            <StudentManagement
              isEdit={isEdit}
              type='string'
              label='식수'
              text={
                input.residentPrivateInfoRes.mealTicketCount ? `${input.residentPrivateInfoRes.mealTicketCount}식` : ''
              }
              value={input.residentPrivateInfoRes.mealTicketCount}
              input={
                input.residentPrivateInfoRes.mealTicketCount
                  ? input.residentPrivateInfoRes.mealTicketCount.toString()
                  : ''
              }
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'mealTicketCount', Number(value))}
            />
          </div>
          <div className='flex-1 flex flex-col'>
            <StudentManagement
              isEdit={isEdit}
              right={isEdit}
              type='checkbox'
              label='흡연여부'
              text={input.residentPrivateInfoRes.isSmoking ? 'O' : 'X'}
              value={input.residentPrivateInfoRes.isSmoking}
              setIsChecked={(isChecked) => handleInputChange('residentPrivateInfoRes', 'isSmoking', isChecked)}
            />
            <StudentManagement
              isEdit={isEdit}
              right={isEdit}
              type='checkbox'
              label='생활관비 납부'
              text={input.residentPrivateInfoRes.dormitoryPayment ? 'O' : 'X'}
              value={input.residentPrivateInfoRes.dormitoryPayment}
              setIsChecked={(isChecked) => handleInputChange('residentPrivateInfoRes', 'dormitoryPayment', isChecked)}
            />
            <StudentManagement
              isEdit={isEdit}
              right={isEdit}
              label='열쇠 수령 여부'
              type='checkbox'
              text={input.residentPrivateInfoRes.hasKey ? '수령' : '미수령'}
              value={input.residentPrivateInfoRes.hasKey}
              setIsChecked={(isChecked) => handleInputChange('residentPrivateInfoRes', 'hasKey', isChecked)}
            />
            <StudentManagement
              right={isEdit}
              label='상점'
              text={input.residentPrivateInfoRes.bonusPoint}
              value={input.residentPrivateInfoRes.bonusPoint}
            />
            <StudentManagement
              right={isEdit}
              label='벌점'
              text={input.residentPrivateInfoRes.minusPoint}
              value={input.residentPrivateInfoRes.minusPoint}
            />
            <StudentManagement
              isEdit={isEdit}
              right={isEdit}
              label='개인정보 동의'
              type='checkbox'
              text={input.residentPrivateInfoRes.personalInfoConsent ? 'O' : 'X'}
              value={input.residentPrivateInfoRes.personalInfoConsent}
              setIsChecked={(isChecked) =>
                handleInputChange('residentPrivateInfoRes', 'personalInfoConsent', isChecked)
              }
            />
            <StudentManagement
              isEdit={isEdit}
              right={isEdit}
              label='제3자제공 동의'
              type='checkbox'
              text={input.residentPrivateInfoRes.thirdPartyConsent ? 'O' : 'X'}
              value={input.residentPrivateInfoRes.thirdPartyConsent}
              setIsChecked={(isChecked) => handleInputChange('residentPrivateInfoRes', 'thirdPartyConsent', isChecked)}
            />
            <StudentManagement
              isEdit={isEdit}
              right={isEdit}
              type='string'
              label='은행명'
              text={input.residentPrivateInfoRes.bankName}
              value={input.residentPrivateInfoRes.bankName}
              input={input.residentPrivateInfoRes.bankName}
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'bankName', value)}
            />
            <StudentManagement
              isEdit={isEdit}
              right={isEdit}
              type='string'
              label='계좌번호'
              text={input.residentPrivateInfoRes.accountNumber}
              value={input.residentPrivateInfoRes.accountNumber}
              input={input.residentPrivateInfoRes.accountNumber}
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'accountNumber', value)}
            />
            <StudentManagement
              isEdit={isEdit}
              right={isEdit}
              type='string'
              label='비상연락처'
              text={input.residentPrivateInfoRes.emergencyContact}
              value={input.residentPrivateInfoRes.emergencyContact}
              input={input.residentPrivateInfoRes.emergencyContact}
              setInput={(value) => handleInputChange('residentPrivateInfoRes', 'emergencyContact', value)}
            />
            <StudentManagement
              isEdit={isEdit}
              right={isEdit}
              type='string'
              label='비상연락처 관계'
              text={input.residentPrivateInfoRes.emergencyRelation}
              value={input.residentPrivateInfoRes.emergencyRelation}
              input={input.residentPrivateInfoRes.emergencyRelation}
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
                  dormitoryId: input.residentDormitoryInfoRes.dormitoryId,
                  dormitoryName: input.residentDormitoryInfoRes.dormitoryName,
                  roomSize: input.residentDormitoryInfoRes.roomSize || 0,
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
                  input.residentDormitoryInfoRes.dormitoryName
                    ? input.residentDormitoryInfoRes.dormitoryName +
                      (input.residentDormitoryInfoRes.roomSize
                        ? '(' + input.residentDormitoryInfoRes.roomSize + '인실)'
                        : '')
                    : ''
                }
                value={input.residentDormitoryInfoRes.dormitoryName}
              />
              <StudentManagement
                isEdit={isEdit}
                readOnly={!input.residentDormitoryInfoRes.dormitoryName}
                type='roomNumber'
                label='호실'
                text={input.residentDormitoryInfoRes.roomNumber ? `${input.residentDormitoryInfoRes.roomNumber}호` : ''}
                value={input.residentDormitoryInfoRes.roomNumber}
                input={
                  input.residentDormitoryInfoRes.roomNumber ? input.residentDormitoryInfoRes.roomNumber.toString() : ''
                }
                setInput={(value) => handleInputChange('residentDormitoryInfoRes', 'roomNumber', value)}
                handleRoomNumber={handleRoomNumber}
              />
              <StudentManagement
                type='bedNumber'
                label='침대번호'
                text={input.residentDormitoryInfoRes.bedNumber ? `${input.residentDormitoryInfoRes.bedNumber}번` : ''}
                value={input.residentDormitoryInfoRes.bedNumber}
              />
            </div>
            <div className='flex-1 flex flex-col'>
              <StudentManagement
                isEdit={isEdit}
                type='termName'
                label='거주기간'
                text={input.residentDormitoryInfoRes.termName}
                availableTermRes={availableTermRes}
                handleTermList={() => setIsTermListModal(true)}
                handleTerm={handleTerm}
              />
              <StudentManagement
                label='룸메이트 신청'
                text={input.residentDormitoryInfoRes.isApplyRoommate ? 'O' : 'X'}
                value={input.residentDormitoryInfoRes.isApplyRoommate}
              />
              <StudentManagement
                label='인원 정보'
                text={
                  input.residentDormitoryInfoRes.roommateNames && input.residentDormitoryInfoRes.roommateNames.join(' ')
                }
                value={
                  input.residentDormitoryInfoRes.roommateNames && input.residentDormitoryInfoRes.roommateNames.join(' ')
                }
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-25'>
          <BtnMidVariant
            label='생성하기'
            disabled={
              !input.residentPrivateInfoRes.name ||
              !input.residentPrivateInfoRes.gender ||
              !input.residentDormitoryInfoRes.termName ||
              !input.residentDormitoryInfoRes.dormitoryId ||
              !input.residentDormitoryInfoRes.dormitoryName
            }
            variant='blue'
            onClick={() => {
              setIsCreateModal(true);
            }}
          />
        </div>
      </div>
      {isCreateModal && (
        <BackDrop isOpen={isCreateModal}>
          <ConfirmPrompt
            variant='blue'
            label='생성을 완료하시겠습니까?'
            onCancel={() => {
              setIsCreateModal(false);
            }}
            onConfirm={() => {
              setIsCreateModal(false);
              handleCreate();
            }}
          />
        </BackDrop>
      )}
      {isTermListModal && (
        <BackDrop isOpen={isTermListModal}>
          <TermList
            list={termList}
            onCancel={() => {
              setIsTermListModal(false);
            }}
            onClick={(availableTermRes) => {
              setIsTermListModal(false);
              setAvailableTermRes(availableTermRes);
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
            onConfirm={() => {
              setIsRoomNotNullModal(false);
              handleInputChange('residentDormitoryInfoRes', 'roomNumber', '');
              handleInputChange('residentDormitoryInfoRes', 'bedNumber', '');
              handleInputChange('residentDormitoryInfoRes', 'roommateNames', '');
            }}
          />
        </BackDrop>
      )}
    </>
  );
};

export default Page;
