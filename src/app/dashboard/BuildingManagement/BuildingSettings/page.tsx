'use client';

import { deleteBuilding, getBuildingLists, postAddBuilding } from '@/apis/Building';
import AddBuildingBtn from '@/components/atoms/AllBtn/AddBuildingBtn/AddBuildingBtn';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import BuildingSettingsBody from '@/components/organisms/BuildingSettings/BuildingSettingsBody';
import AddBuildingPrompt from '@/components/organisms/Prompt/AddBuildingPrompt/AddBuildingPrompt';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { buildingList } from '@/types/building';
import React, { useEffect, useState } from 'react';
import useSWR, { mutate } from 'swr';

const BuildingSettings = () => {
  const [lists, setLists] = useState<buildingList[]>();
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [input, setInput] = useState('');
  const [selectImage, setSelectImage] = useState<File | null>(null);
  const [selectedId, setSeletedId] = useState<number | null>(null);

  const { data, error } = useSWR('/api/v1/web/dormitory/setting', getBuildingLists);

  useEffect(() => {
    if (data) {
      setLists(data.information);
    } else {
      console.log(error);
    }
  }, [data, error]);

  const onAddBuilding = async () => {
    try {
      const response = await postAddBuilding(input, selectImage);

      if (response) {
        mutate('/api/v1/web/dormitory/setting');
        setModal(!modal);
        setInput('');
        setSelectImage(null);
      } else {
        alert('실패');
      }
    } catch (error) {
      console.error(error);
      alert('오류가 발생했습니다.');
    }
  };

  const onDeleteBuilding = async (dormitoryId: number | null) => {
    if (dormitoryId !== null) {
      try {
        const response = await deleteBuilding(dormitoryId);

        if (response) {
          mutate('/api/v1/web/dormitory/setting');
          setDeleteModal(false);
          setSeletedId(null);
        } else {
          console.log('실패');
        }
      } catch (error) {
        console.error(error);
        console.log('오류가 발생했습니다.');
      }
    }
  };

  const onBuildingSettingsDetail = (dormitoryId: number) => {
    console.log(dormitoryId);
  };

  return (
    <div className='flex flex-col w-[1200px]'>
      <h1 className='H0 text-gray-grayscale50 text-center mb-35'>건물 설정</h1>
      <div className='w-[1220px] grid grid-cols-3 gap-x-20 gap-y-30 min-h-381 max-h-800 overflow-y-auto scrollbar-table'>
        {lists &&
          lists.map((data) => {
            return (
              <BuildingSettingsBody
                key={data.id}
                id={data.id}
                name={data.name}
                imageUrl={data.imageUrl}
                onBuildingOutClick={() => {
                  setSeletedId(data.id);
                  setDeleteModal(true);
                }}
                onBuildingSettingsDetail={() => onBuildingSettingsDetail(data.id)}
              />
            );
          })}
        <AddBuildingBtn onClick={() => setModal(true)} />
      </div>
      {modal && (
        <BackDrop isOpen={modal}>
          <AddBuildingPrompt
            onBuildingOutClick={() => {
              setInput('');
              setSelectImage(null);
              setModal(!modal);
            }}
            onAddBuilding={onAddBuilding}
            input={input}
            setInput={setInput}
            selectImage={selectImage}
            setSelectImage={setSelectImage}
          />
        </BackDrop>
      )}
      {deleteModal && (
        <BackDrop isOpen={deleteModal}>
          <ConfirmPrompt
            variant='red'
            label='건물을 삭제하면 관련 데이터도 함께 삭제됩니다.\n건물을 삭제하시겠습니까?'
            onCancel={() => {
              setDeleteModal(false);
              setSeletedId(null);
            }}
            onConfirm={() => onDeleteBuilding(selectedId)}
          />
        </BackDrop>
      )}
    </div>
  );
};

export default BuildingSettings;
