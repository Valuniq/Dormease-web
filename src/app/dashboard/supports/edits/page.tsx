'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { patchFaq, useFaqDetail } from '@/apis/Support';
import { RES_NOTIFICATIONS } from '@/constants/restrictions';
import { noticePostRequest, ImageReq, FileReq } from '@/types/notice';
import { useRouter } from 'next/navigation';
import { FAQRoutes } from '@/constants/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import useConfirmDialog from '@/hooks/useConfirmDialog';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import { isEditorModifiedState } from '@/recoil/editor';
import { supportIdState } from '@/recoil/support';
import SupportEdit from '@/components/templates/Support/Edit/SupportEdit';

type LocalFileReq = FileReq & { file?: File }; // 로컬에서 추가된 파일에만 file 속성을 추가한 타입
type NewImageReq = { imageUrl: string }; // 새로운 이미지 타입

const Page = () => {
  const router = useRouter();
  const id = useRecoilValue(supportIdState);
  const { data, error, isLoading } = useFaqDetail(id);

  const setIsEditorModified = useSetRecoilState(isEditorModifiedState);
  const [fileLists, setFileLists] = useState<LocalFileReq[]>([]);
  const [deletedImageIds, setDeletedImageIds] = useState<number[]>([]);
  const [deletedFileIds, setDeletedFileIds] = useState<number[]>([]);
  const [formState, setFormState] = useState<noticePostRequest>({
    title: '',
    writer: '',
    pinned: false,
    notificationType: 'FAQ',
    content: '',
    imageReqList: [],
    files: [],
  });

  useEffect(() => {
    if (data) {
      setFormState({
        title: data.information.title,
        writer: data.information.writer,
        pinned: data.information.pinned,
        notificationType: 'ANNOUNCEMENT',
        content: data.information.content,
        imageReqList: data.information.imageResList.map((image: { imageUrl: string; imageId: number }) => ({
          imageUrl: image.imageUrl,
          imageId: image.imageId,
        })),
        files: data.information.fileList.map((file: { fileId: number; originalFileName: string; fileUrl: string }) => ({
          fileId: file.fileId,
          originalFileName: file.originalFileName,
          fileUrl: file.fileUrl,
        })),
      });
      setFileLists(
        data.information.fileList.map((file: { fileId: number; originalFileName: string; fileUrl: string }) => ({
          fileId: file.fileId,
          originalFileName: file.originalFileName,
          fileUrl: file.fileUrl,
        })),
      );
    }
  }, [data]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (fileLists.length + files.length <= RES_NOTIFICATIONS.file.maxCount) {
      setFileLists((prevFiles) => [
        ...prevFiles,
        ...files.map((file) => ({
          fileId: Date.now(), // 임시 ID 생성
          originalFileName: file.name,
          fileUrl: URL.createObjectURL(file), // 임시 URL 생성
          file,
        })),
      ]);
    } else {
      alert(`파일은 최대 ${RES_NOTIFICATIONS.file.maxCount}개까지 선택할 수 있습니다.`);
    }
  };

  const handleDeleteFile = (fileId: number) => {
    setDeletedFileIds((prevIds) => [...prevIds, fileId]);
    setFileLists((prevFiles) => prevFiles.filter((file) => file.fileId !== fileId));
  };

  const handleAllDelete = () => {
    setDeletedFileIds(fileLists.map((file) => file.fileId));
    setFileLists([]);
  };

  const handleDeleteImage = (imageId: number) => {
    setDeletedImageIds((prevIds) => [...prevIds, imageId]);
    setFormState((prevState) => ({
      ...prevState,
      imageReqList: prevState.imageReqList.filter((image) => image.imageId !== imageId),
    }));
  };

  const compareAndDeleteImages = () => {
    const currentImages = formState.imageReqList.map((image) => image.imageUrl);
    const newImages = (formState.content.match(/<img[^>]+src="([^">]+)"/g)?.map((imgTag: string) => {
      const urlMatch = imgTag.match(/src="([^"]+)"/);
      return urlMatch ? urlMatch[1] : '';
    }) || []) as string[];

    const imagesToDelete = formState.imageReqList
      .filter((image) => !newImages.includes(image.imageUrl))
      .map((image) => image.imageId);

    setDeletedImageIds(imagesToDelete);
  };

  const { showConfirmDialog, ConfirmDialogComponent } = useConfirmDialog(
    'FAQ를 수정하시겠습니까?',
    async () => {
      compareAndDeleteImages();

      const newImageReqList: NewImageReq[] =
        formState.content.match(/<img[^>]+src="([^">]+)"/g)?.map((imgTag: string) => {
          const urlMatch = imgTag.match(/src="([^"]+)"/);
          return { imageUrl: urlMatch ? urlMatch[1] : '' };
        }) || [];

      const formData = new FormData();
      formData.append(
        'modifyNotificationReq',
        new Blob(
          [
            JSON.stringify({
              notificationId: id,
              title: formState.title,
              pinned: formState.pinned,
              content: formState.content,
              deletedImageIds,
              imageReqList: newImageReqList.map(({ imageUrl }) => ({ imageUrl })),
              deletedFileIds,
              files: [], // 빈 파일 배열을 항상 포함
            }),
          ],
          { type: 'application/json' },
        ),
      );

      fileLists.forEach((file) => {
        if (file.file) {
          formData.append('files', file.file);
        }
      });

      try {
        setIsEditorModified(false);
        await patchFaq(formData);
        router.push(FAQRoutes);
      } catch (error) {
        console.error(error);
        alert('공지사항 수정에 실패했습니다. 다시 시도해주세요.');
      }
    },
    'blue',
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      {!!ConfirmDialogComponent && ConfirmDialogComponent}
      <div className='flex flex-col items-center justify-center'>
        <SupportEdit
          title={formState.title}
          setTitle={(title: string) => setFormState((prevState) => ({ ...prevState, title }))}
          writer={formState.writer}
          isPinned={formState.pinned}
          setIsPinned={(pinned: boolean) => setFormState((prevState) => ({ ...prevState, pinned }))}
          fileLists={fileLists}
          handleFileChange={handleFileChange}
          handleDeleteFile={handleDeleteFile}
          handleAllDelete={handleAllDelete}
          handleDeleteImage={handleDeleteImage}
          setEditorHtml={(content: string) =>
            setFormState((prevState) => ({
              ...prevState,
              content,
            }))
          }
          editorContent={data.information.content}
        />
        <div className='mt-70'>
          <BtnMidVariant label={'수정'} disabled={false} variant={'blue'} onClick={showConfirmDialog} />
        </div>
      </div>
    </div>
  );
};

export default Page;
