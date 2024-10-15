import React, { useRef, useState } from 'react';
import CheckFileBtn from '@/components/atoms/AllBtn/CheckFileBtn/CheckFileBtn';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
import ArrowDown from '@public/images/ArrowDown.svg';
import RelocationDropdown from '@/components/atoms/Dropdown/RelocationDropdown/RelocationDropdown';
import PointBar from '@/components/atoms/InputText/PointBar/PointBar';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import RadioBtn from '@/components/atoms/AllBtn/RadioBtn/RadioBtn';
import { BuildingList, TermResponseInformation } from '@/types/student';

type Props = {
  isEdit?: boolean;
  label?: string;
  text?: string | number | null;
  value?: string | number | boolean | File | null;
  type?: 'file' | 'checkbox' | 'string' | 'radio' | 'termName' | 'building' | 'roomNumber' | 'bedNumber';
  setIsChecked?: (isChecked: boolean) => void;
  input?: string | null;
  setInput?: (id: string) => void;
  right?: boolean;
  isBuilding?: boolean;
  setIsBuilding?: (isBuilding: boolean) => void;
  list?: BuildingList[];
  dormInfo?: BuildingList;
  handleSelectedDorm?: (selectedDorm: BuildingList) => void;
  setIsOn?: (isOn: boolean) => void;
  handleFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRoomNumber?: () => void;
  availableTermRes?: TermResponseInformation['availableTermRes'];
  handleTermList?: () => void;
  handleTerm?: (selectedTermId: number) => void;
  readOnly?: boolean;
  maxLength?: number;
};

const FileEdit = ({ text, handleFileChange }: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onAddFile = () => {
    inputFileRef.current?.click();
  };

  return (
    <>
      <CheckFileBtn label='파일수정' onClick={onAddFile} />
      <input
        id='fileInput'
        type='file'
        accept='*'
        style={{ display: 'none', visibility: 'hidden' }}
        ref={inputFileRef}
        onChange={handleFileChange}
      />
      <div className='border-b-1 h-30 border-gray-grayscale40 ml-10 overflow-x-auto overflow-y-hidden w-160 H4 text-gray-grayscale50 text-nowrap noscrollbar-table'>
        {typeof text === 'string' && text.replace('https://dormease-s3-bucket.s3.amazonaws.com/', '')}
      </div>
    </>
  );
};

const CheckboxEdit = ({ text, value, setIsChecked }: Props) => {
  return (
    <>
      <div className='H4 text-gray-grayscale50 mr-12'>{text === 'O' || text === 'X' ? 'O' : '수령'}</div>
      {typeof value === 'boolean' && setIsChecked && <Checkbox isChecked={value} setIsChecked={setIsChecked} />}
    </>
  );
};

const StringEdit = ({ input, setInput, maxLength }: Props) => {
  return (
    <>{setInput && <MediumInputText placeholder='' input={input || ''} setInput={setInput} maxLength={maxLength} />}</>
  );
};

const RadioEdit = ({ value, setIsOn }: Props) => {
  return (
    <div className='w-260 flex justify-center gap-70'>
      {setIsOn && (
        <>
          <RadioBtn isOn={value === 'MALE'} setIsOn={() => setIsOn(true)} label='남성' />
          <RadioBtn isOn={value === 'FEMALE'} setIsOn={() => setIsOn(false)} label='여성' />
        </>
      )}
    </div>
  );
};

const TermNameEdit = ({ availableTermRes, handleTermList, handleTerm }: Props) => {
  const [selectedTermId, setSelectedTermId] = useState(0);

  return (
    <>
      {availableTermRes?.length === 0 ? (
        <div className='pl-[280px]'>
          <BtnMiniVariant
            label='기간 불러오기'
            disabled={false}
            selected={false}
            variant='blue'
            isPadding={true}
            onClick={handleTermList}
          />
        </div>
      ) : (
        <>
          <BtnMiniVariant
            label='변경'
            disabled={!selectedTermId}
            selected={false}
            variant='blue'
            isPadding={true}
            onClick={() => {
              handleTerm && handleTerm(selectedTermId);
            }}
          />
          <div className='flex gap-6 pl-17 overflow-x-auto max-w-350 noscrollbar-table'>
            {availableTermRes?.map((data, index) => {
              return (
                <RadioBtn
                  key={index}
                  isOn={selectedTermId === data.termId}
                  setIsOn={() => {
                    setSelectedTermId(data.termId);
                  }}
                  label={data.termName}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

const BuildingEdit = ({ text, isBuilding, setIsBuilding, list, dormInfo, handleSelectedDorm }: Props) => {
  return (
    <div className='flex relative cursor-pointer'>
      {setIsBuilding && (
        <>
          <h4
            className='H4 text-gray-grayscale50 mr-5'
            onClick={() => list?.length !== 0 && setIsBuilding(!isBuilding)}
          >
            {text ? text : '건물 선택'}
          </h4>
          <button
            className={`${isBuilding && 'rotate-90'}`}
            onClick={() => list?.length !== 0 && setIsBuilding(!isBuilding)}
          >
            <ArrowDown />
          </button>
          {list?.length !== 0 && isBuilding && handleSelectedDorm && (
            <div className='absolute left-full bottom-0 z-joinSettingAddPeriodBtn'>
              <RelocationDropdown
                list={list || []}
                dormInfo={
                  dormInfo || {
                    dormitoryId: 0,
                    dormitoryName: '',
                    roomSize: 0,
                  }
                }
                handleSelectedDorm={handleSelectedDorm}
                setIsBuilding={setIsBuilding}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const RoomNumberEdit = ({ input, setInput, handleRoomNumber, readOnly }: Props) => {
  return (
    <div className='flex items-center'>
      {setInput && <PointBar input={input || ''} setInput={setInput} maxLength={4} readonly={readOnly} />}
      <h4 className='H4 text-gray-grayscale50 ml-6 mr-12'>호</h4>
      <BtnMiniVariant label='배치' disabled={!input} selected={false} variant='blue' onClick={handleRoomNumber} />
    </div>
  );
};

const BedNumberEdit = ({ input, setInput }: Props) => {
  return (
    <div className='flex items-center'>
      {setInput && <PointBar input={input || ''} setInput={setInput} />}
      <h4 className='H4 text-gray-grayscale50 ml-6 mr-12'>번</h4>
    </div>
  );
};

const StudentManagement = ({
  isEdit,
  label,
  text,
  value,
  type,
  setIsChecked,
  input,
  setInput,
  right,
  isBuilding,
  setIsBuilding,
  list,
  dormInfo,
  handleSelectedDorm,
  setIsOn,
  handleFileChange,
  handleRoomNumber,
  availableTermRes,
  handleTermList,
  handleTerm,
  readOnly,
  maxLength,
}: Props) => {
  const renderContent = () => {
    if (isEdit) {
      switch (type) {
        case 'file':
          return <FileEdit text={text} handleFileChange={handleFileChange} />;
        case 'checkbox':
          return <CheckboxEdit text={text} value={value} setIsChecked={setIsChecked} />;
        case 'string':
          return <StringEdit input={input} setInput={setInput} maxLength={maxLength} />;
        case 'radio':
          return <RadioEdit value={value} setIsOn={setIsOn} />;
        case 'termName':
          return (
            <TermNameEdit availableTermRes={availableTermRes} handleTermList={handleTermList} handleTerm={handleTerm} />
          );
        case 'building':
          return (
            <BuildingEdit
              text={text}
              isBuilding={isBuilding}
              setIsBuilding={setIsBuilding}
              list={list}
              dormInfo={dormInfo}
              handleSelectedDorm={handleSelectedDorm}
            />
          );
        case 'roomNumber':
          return (
            <RoomNumberEdit input={input} setInput={setInput} handleRoomNumber={handleRoomNumber} readOnly={readOnly} />
          );
        case 'bedNumber':
          return <BedNumberEdit input={input} setInput={setInput} />;
        default:
          return null;
      }
    } else if (type === 'file') {
      return (
        <>
          {value && (
            <CheckFileBtn
              label='파일보기'
              onClick={() => {
                typeof value === 'string' && window.open(value, '_blank');
              }}
            />
          )}
        </>
      );
    } else {
      return <h4 className='H4 text-gray-grayscale50 max-w-300 break-words'>{text}</h4>;
    }
  };

  return (
    <div className='flex text-left items-center flex-grow'>
      <h4
        className={`H4-caption text-gray-grayscale50 relative ${label === '거주기간' && isEdit ? 'min-w-90' : 'min-w-205'}`}
      >
        {isEdit && (label === '이름' || label === '성별' || label === '거주기간' || label === '건물') ? (
          <>
            {label}
            <p className='H4 text-red-red20 inline-block absolute bottom-3 ml-2'>*</p>
          </>
        ) : (
          label
        )}
      </h4>
      <div className={`${right ? 'flex items-center flex-grow justify-end' : 'flex items-center'}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default StudentManagement;
