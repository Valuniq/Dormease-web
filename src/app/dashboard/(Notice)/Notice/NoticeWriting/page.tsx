'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import NoticeWrite from '@/components/organisms/Notice/NoticeWriting/NoticeWriting';
import React, { useState } from 'react';

import { postNotification } from '@/apis/Notifications';
import { RES_NOTIFICATIONS } from '@/constants/restrictions';
import { WriteNotificationReq } from '@/types/notice';

const Page = () => {
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [isPinned, setIsPinned] = useState(false);
  const [fileLists, setFileLists] = useState<{ fileName: string; file: File }[]>([]);

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
    const writeNotificationReq: WriteNotificationReq = {
      title,
      pinned: isPinned,
      notificationType: 'ANNOUNCEMENT',
      blockReqList: [
        {
          imageUrl: 'www.example.com', // 필요한 경우 실제 이미지 URL로 대체
          sequence: 1,
          content: '내용',
        },
      ],
    };

    formData.append('writeNotificationReq', JSON.stringify(writeNotificationReq));

    fileLists.forEach((file) => {
      formData.append('files', file.file);
    });

    try {
      const response = await postNotification(formData);
      alert(response.information.message);
    } catch (error) {
      console.error(error);
      alert('Failed to post notification');
    }
  };
  return (
    <div className='flex flex-col items-center justify-center'>
      <NoticeWrite
        title={title}
        setTitle={setTitle}
        writer={writer}
        isPinned={isPinned}
        setIsPinned={setIsPinned}
        fileLists={fileLists}
        handleFileChange={handleFileChange}
        handleDeleteFile={handleDeleteFile}
        handleAllDelete={handleAllDelete}
      />
      <div className='mt-70'>
        <BtnMidVariant label={'등록'} disabled={false} variant={'blue'} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Page;
