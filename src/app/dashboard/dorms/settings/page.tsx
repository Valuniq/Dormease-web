'use client';

import { deleteDorm, useDormList } from '@/apis/setting';
import AddBuildingBtn from '@/components/atoms/AllBtn/AddBuildingBtn/AddBuildingBtn';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import SettingItem from '@/components/templates/Setting/Item/SettingItem';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { settingIdState } from '@/recoil/setting';
import { DormSettingResponseInformation } from '@/types/setting';
import { useRouter } from 'next/navigation';
import { useState, Suspense, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const Page = () => {
  const [lists, setLists] = useState<DormSettingResponseInformation[]>();
  const [alreadyModal, setAlreadyModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedId, setSeletedId] = useState<number | null>(null);
  const router = useRouter();
  const setBuildingId = useSetRecoilState(settingIdState);

  const { data, error, mutate } = useDormList();

  useEffect(() => {
    if (data) {
      setLists(data.information);
    } else {
      console.log(error);
    }
  }, [data, error]);

  const onAddBuilding = async () => {
    // try {
    //   const response = await postAddDorm(); //건물 생성 API
    //   if (response.check) {
    //     await mutate();
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const onDeleteBuilding = async (dormitoryId: number | null) => {
    if (dormitoryId !== null) {
      try {
        const response = await deleteDorm(dormitoryId);
        if (response.check) {
          await mutate();
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

  return (
    <Suspense fallback={<h1>로딩 중</h1>}>
      <div className='flex flex-col w-[1200px]'>
        <h1 className='H0 text-gray-grayscale50 text-center mb-35'>건물 설정</h1>
        <div className='w-[1220px] grid grid-cols-3 gap-x-20 gap-y-30 min-h-381 max-h-800 overflow-y-auto scrollbar-table'>
          {lists &&
            lists.map((data, index) => {
              return (
                <SettingItem
                  key={index}
                  id={data.id}
                  name={data.name}
                  imageUrl={data.imageUrl}
                  onBuildingOutClick={() => {
                    setSeletedId(data.id);
                    if (data.assignedResidents === true) {
                      setAlreadyModal(true);
                    } else {
                      setDeleteModal(true);
                    }
                  }}
                  onBuildingSettingsDetail={() => {
                    setBuildingId(data.id);
                    router.push(`/dashboard/dorms/settings/details`);
                  }}
                />
              );
            })}
          {lists && lists?.length < 15 && <AddBuildingBtn onClick={onAddBuilding} />}
        </div>
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
        {alreadyModal && (
          <BackDrop isOpen={alreadyModal}>
            <AlertPrompt
              variant='red'
              label='해당 건물은 배정된 학생이 있습니다.'
              onConfirm={() => {
                setAlreadyModal(false);
                setSeletedId(null);
              }}
            />
          </BackDrop>
        )}
      </div>
    </Suspense>
  );
};

export default Page;
