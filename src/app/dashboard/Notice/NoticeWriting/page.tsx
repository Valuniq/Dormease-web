'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import NoticeWrite from '@/components/organisms/Notice/NoticeWriting/NoticeWriting';
import React, { useState } from 'react';

import { postNotification } from '@/apis/Notifications';
import { RES_NOTIFICATIONS } from '@/constants/restrictions';
import { noticePostRequest } from '@/types/notice';
import { useRouter } from 'next/navigation';
import { NoticeRoutes } from '@/constants/navigation';
import { isEditorModifiedState } from '@/types/editor';
import { useSetRecoilState } from 'recoil';
import useConfirmDialog from '@/hooks/useConfirmDialog';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';

const Page = () => {
  const router = useRouter();
  const setIsEditorModified = useSetRecoilState(isEditorModifiedState);
  const [fileLists, setFileLists] = useState<{ fileName: string; file: File }[]>([]);
  const [formState, setFormState] = useState<noticePostRequest>({
    title: '',
    pinned: false,
    notificationType: 'ANNOUNCEMENT',
    blockReqList: [{ imageUrl: 'www.example.com', sequence: 1, content: '' }],
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (fileLists.length + files.length <= RES_NOTIFICATIONS.file.maxCount) {
      setFileLists((prevFiles) => [...prevFiles, ...files.map((file) => ({ fileName: file.name, file }))]);
    } else {
      alert(`파일은 최대 ${RES_NOTIFICATIONS.file.maxCount}개까지 선택할 수 있습니다.`);
    }
  };

  const handleDeleteFile = (fileName: string) => {
    setFileLists((prevFiles) => prevFiles.filter((file) => file.fileName !== fileName));
  };

  const handleAllDelete = () => {
    setFileLists([]);
  };

  // 제출 시 ConfirmDialog를 표시
  const { showConfirmDialog, ConfirmDialogComponent } = useConfirmDialog(
    '작성한 내용을 등록하시겠습니까?',
    async () => {
      const formData = new FormData();
      formData.append('writeNotificataionReq', new Blob([JSON.stringify(formState)], { type: 'application/json' }));
      if (fileLists.length > 0) {
        fileLists.forEach((file) => {
          formData.append('files', file.file);
        });
      } else {
        formData.append('files', new Blob());
      }

      try {
        setIsEditorModified(false); // 저장 시 경고 건너뛰기 설정
        const response = await postNotification(formData);
        router.push(NoticeRoutes);
      } catch (error) {
        console.error(error);
        alert('공지사항 등록에 실패했습니다. 다시 시도해주세요.');
      }
    },
    'blue',
  );
  return (
    <>
      {!!ConfirmDialogComponent && <BackDrop isOpen={!!ConfirmDialogComponent}>{ConfirmDialogComponent}</BackDrop>}
      <div className='flex flex-col items-center justify-center'>
        <NoticeWrite
          title={formState.title}
          setTitle={(title) => setFormState((prevState) => ({ ...prevState, title }))}
          writer='수정 필요'
          isPinned={formState.pinned}
          setIsPinned={(pinned) => setFormState((prevState) => ({ ...prevState, pinned }))}
          fileLists={fileLists}
          handleFileChange={handleFileChange}
          handleDeleteFile={handleDeleteFile}
          handleAllDelete={handleAllDelete}
          setEditorHtml={(content) =>
            setFormState((prevState) => ({
              ...prevState,
              blockReqList: [{ ...prevState.blockReqList[0], content }],
            }))
          }
        />
        <div className='mt-70'>
          <BtnMidVariant label={'등록'} disabled={false} variant={'blue'} onClick={showConfirmDialog} />
        </div>
      </div>
    </>
  );
};

export default Page;
