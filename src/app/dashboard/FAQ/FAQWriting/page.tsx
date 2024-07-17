'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import NoticeWrite from '@/components/organisms/Notice/NoticeWriting/NoticeWriting';
import React, { useState } from 'react';

import { postNotification } from '@/apis/Notifications';
import { RES_NOTIFICATIONS } from '@/constants/restrictions';

import { useRouter } from 'next/navigation';
import { FAQRoutes } from '@/constants/navigation';
import { faqPostRequest } from '@/types/faq';

const Page = () => {
  const router = useRouter();
  const [fileLists, setFileLists] = useState<{ fileName: string; file: File }[]>([]);
  const [formState, setFormState] = useState<faqPostRequest>({
    title: '',
    pinned: false,
    notificationType: 'FAQ',
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

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('writeNotificataionReq', new Blob([JSON.stringify(formState)], { type: 'application/json' }));
    if (fileLists.length > 0) {
      fileLists.forEach((file) => {
        formData.append('files', file.file);
      });
    } else {
      formData.append('files', new Blob([], { type: 'application/json' })); // 빈 배열로 파일 필드를 추가
    }

    try {
      const response = await postNotification(formData);
      alert(response.information.message);
      router.push(FAQRoutes);
    } catch (error) {
      console.error(error);
      alert('Failed to post notification');
    }
  };
  return (
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
        <BtnMidVariant label={'등록'} disabled={false} variant={'blue'} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Page;
