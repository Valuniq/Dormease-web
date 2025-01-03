'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import React, { useState } from 'react';
import { postNotification } from '@/apis/notice';
import { POL_NOTIFICATIONS } from '@/constants/policy';
import { noticePostRequest } from '@/types/notice';
import { useRouter } from 'next/navigation';
import { noticesRoutes } from '@/constants/navigation';
import { useSetRecoilState } from 'recoil';
import useConfirmDialog from '@/hooks/useConfirmDialog';
import { isEditorModifiedState } from '@/recoil/editor';
import NoticeWriting from '@/components/templates/Notice/Writing/NoticeWriting';

type NewImageReq = { imageUrl: string };

const Page = () => {
  const router = useRouter();
  const setIsEditorModified = useSetRecoilState(isEditorModifiedState);
  const [fileLists, setFileLists] = useState<{ fileName: string; file: File }[]>([]);
  const [formState, setFormState] = useState<noticePostRequest>({
    title: '',
    pinned: false,
    notificationType: 'ANNOUNCEMENT',
    content: '',
    imageReqList: [],
    files: [],
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (fileLists.length + files.length <= POL_NOTIFICATIONS.file.maxCount) {
      setFileLists((prevFiles) => [...prevFiles, ...files.map((file) => ({ fileName: file.name, file }))]);
    } else {
      alert(`파일은 최대 ${POL_NOTIFICATIONS.file.maxCount}개까지 선택할 수 있습니다.`);
    }
  };

  const handleDeleteFile = (fileName: string) => {
    setFileLists((prevFiles) => prevFiles.filter((file) => file.fileName !== fileName));
  };

  const handleAllDelete = () => {
    setFileLists([]);
  };

  const { showConfirmDialog, ConfirmDialogComponent } = useConfirmDialog(
    '작성한 내용을 등록하시겠습니까?',
    async () => {
      const imageReqList: NewImageReq[] =
        formState.content.match(/<img[^>]+src="([^">]+)"/g)?.map((imgTag: string) => {
          const urlMatch = imgTag.match(/src="([^"]+)"/);
          return { imageUrl: urlMatch ? urlMatch[1] : '' };
        }) || [];

      const updatedFormState = {
        ...formState,
        imageReqList,
        files: fileLists.map((file) => ({ file: file.file })),
      };

      const formData = new FormData();
      formData.append(
        'writeNotificationReq',
        new Blob([JSON.stringify(updatedFormState)], { type: 'application/json' }),
      );
      if (fileLists.length > 0) {
        fileLists.forEach((file) => {
          formData.append('files', file.file);
        });
      } else {
        formData.append('files', new Blob());
      }

      try {
        setIsEditorModified(false);
        await postNotification(formData);
        router.push(noticesRoutes);
      } catch (error) {
        console.error(error);
        alert('공지사항 등록에 실패했습니다. 다시 시도해주세요.');
      }
    },
    'blue',
  );

  return (
    <>
      {!!ConfirmDialogComponent && ConfirmDialogComponent}
      <div className='flex flex-col items-center justify-center'>
        <NoticeWriting
          title={formState.title}
          setTitle={(title) => setFormState((prevState) => ({ ...prevState, title }))}
          writer='관리자'
          isPinned={formState.pinned}
          setIsPinned={(pinned) => setFormState((prevState) => ({ ...prevState, pinned }))}
          fileLists={fileLists}
          handleFileChange={handleFileChange}
          handleDeleteFile={handleDeleteFile}
          handleAllDelete={handleAllDelete}
          setEditorHtml={(content) =>
            setFormState((prevState) => ({
              ...prevState,
              content,
            }))
          }
        />
        <div className='my-30 xxl:scale-80 xl:scale-65 lg:scale-65 md:scale-50 sm:scale-40'>
          <BtnMidVariant label={'등록'} disabled={false} variant={'blue'} onClick={showConfirmDialog} />
        </div>
      </div>
    </>
  );
};

export default Page;
