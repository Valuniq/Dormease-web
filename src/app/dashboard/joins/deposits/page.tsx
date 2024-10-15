'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import GrayBtn from '@/components/atoms/AllBtn/GrayBtn/GrayBtn';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import DepositList from '@/components/templates/Deposit/DepositList';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { editState } from '@/recoil/nav';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useDepositList } from '@/apis/deposits';

const Page = () => {
  const setEditState = useSetRecoilState(editState);
  const [input, setInput] = useState('');
  const [saveModal, setSaveModal] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [selectedId, setSelected] = useState<number[]>([]); //입금 확인된 학생들 id 배열 더미 값
  const [filteredData, setFilteredData] = useState<DepositListResponseInformation[]>([]);

  const { data, error, isLoading, mutate } = useDepositList();

  useEffect(() => {
    if (data?.information) {
      setFilteredData(data.information);
    }
  }, [data]);

  //입금 내역 확인 파일 선택
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log('파일이 선택되지 않았습니다.');
      return;
    }

    const file = e.target.files[0];

    const fileUrl = URL.createObjectURL(file);

    if (fileUrl) {
      //입금 내역 확인 파일 선택했을 때 id 배열 추가
      setSelected([1, 3]);
      setEditState(true);
    }
    //추후 API 연동 필요
  };

  const onSaveDeposit = () => {
    setSelected([]);
    setSaveModal(!saveModal);
    setEditState(false);
    //추후 저장 API 연동 필요
  };

  //검색
  const handleSearch = () => {
    if (input.trim() === '') {
      setFilteredData(data?.information || []);
    } else {
      const filtered = data?.information.filter(
        (item) => item.studentName.toLowerCase().includes(input.toLowerCase()) || item.studentNumber.includes(input),
      );
      setFilteredData(filtered || []);
    }
  };

  useEffect(() => {
    if (input.trim() === '') {
      setFilteredData(data?.information || []);
    }
  }, [input, data]);

  return (
    <>
      <div className='w-[1339px]'>
        <div className='flex items-center justify-end mb-32'>
          <h1 className='H0 text-gray-grayscale50 mr-180'>입금 확인 명단</h1>
          <SearchTextBox input={input} setInput={setInput} placeholder='이름 또는 학번' handleSearch={handleSearch} />
        </div>
        <DepositList list={filteredData} selectedId={selectedId} isLoading={isLoading ?? false} />
        <hr className='border-gray-grayscale30' />
        <div className='flex mt-12 justify-between'>
          <div className='flex-1'></div>
          <div className='flex-1 flex justify-center mt-16'>
            <BtnMidVariant
              label='저장'
              disabled={selectedId.length === 0}
              variant='whiteblue'
              onClick={() => setSaveModal(!saveModal)}
            />
          </div>
          <div className='flex-1 flex justify-end mr-19'>
            <GrayBtn label='입금 내역 확인' disabled={false} onClick={() => inputFileRef.current?.click()} />
            <input
              id='fileInput'
              type='file'
              accept='/*'
              style={{ display: 'none', visibility: 'hidden' }}
              ref={inputFileRef}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
      {saveModal && (
        <BackDrop isOpen={saveModal}>
          <ConfirmPrompt
            variant='blue'
            label='입금이 확인된 명단을\n합격자 명단으로 옮기시겠습니까?'
            onConfirm={onSaveDeposit}
            onCancel={() => setSaveModal(!saveModal)}
          />
        </BackDrop>
      )}
    </>
  );
};

export default Page;
