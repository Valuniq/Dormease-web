'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useMemo, forwardRef, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ImageResize } from 'quill-image-resize-module-ts';
import 'react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';
import { useRecoilState } from 'recoil';

import useTextEditorConfirm from '@/hooks/useTextEditorConfirm';
import { isEditorModifiedState, uploadedImagesState } from '@/recoil/editor';
import { uploadImage } from '@/apis/Editor';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
Quill.register('modules/ImageResize', ImageResize);

type Props = {
  width?: string;
  height?: string;
  setEditorHtml: (content: string) => void;
  initialContent?: string; // 추가된 부분
};

const QuillEditor = forwardRef<HTMLDivElement, Props>(({ width, height, setEditorHtml, initialContent }, ref) => {
  const [isEditorModified, setIsEditorModified] = useRecoilState(isEditorModifiedState);
  const [uploadedImages, setUploadedImages] = useRecoilState(uploadedImagesState);
  const router = useRouter();
  const nextUrlRef = useRef<string | null>(null);

  const { confirmChanges, ConfirmDialogComponent } = useTextEditorConfirm(
    '작성한 내용은 저장되지 않았습니다. \\n 페이지를 벗어나시겠습니까?',
    () => {
      if (nextUrlRef.current) {
        const nextUrl = nextUrlRef.current;
        nextUrlRef.current = null;
        router.push(nextUrl);
      }
    },
    'red',
  );

  const handleEditorChange = (content: string) => {
    setEditorHtml(content);
    setIsEditorModified(true);
  };

  const handleImageUpload = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.style.display = 'none';
    document.body.appendChild(input);

    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (file) {
        try {
          const response = await uploadImage(file);
          const imageUrl = response.information.imageUrl;
          setUploadedImages((prev) => [...prev, imageUrl]);

          const quill = document.querySelector('.ql-editor');
          if (quill) {
            const range = window.getSelection()?.getRangeAt(0);
            if (range) {
              const img = document.createElement('img');
              img.src = imageUrl;
              img.alt = 'image';
              range.insertNode(img);
              setEditorHtml(quill.innerHTML);
              setIsEditorModified(true);
            }
          }
        } catch (error) {
          console.error('이미지 업로드 실패:', error);
        }
      }
    };
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isEditorModified) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    const originalPush = router.push;
    const originalReplace = router.replace;

    const handleRouteChange = async (url: string, options: any) => {
      if (isEditorModified) {
        nextUrlRef.current = url;
        const confirmed = await confirmChanges();
        if (confirmed) {
          originalPush(url, options);
        }
      } else {
        return originalPush(url, options);
      }
    };

    router.push = (url, options) => handleRouteChange(url, options);
    router.replace = (url, options) => handleRouteChange(url, options);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [isEditorModified, confirmChanges, router]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image'],
          ['clean'],
        ],
        handlers: {
          image: handleImageUpload,
        },
      },
      clipboard: {
        matchVisual: false,
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize'],
      },
    }),
    [],
  );

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <>
      <div ref={ref} style={{ width, height }}>
        <ReactQuill
          style={{ width, height }}
          theme='snow'
          onChange={handleEditorChange}
          modules={modules}
          formats={formats}
          defaultValue={initialContent} // 추가된 부분
        />
      </div>
      {ConfirmDialogComponent}
    </>
  );
});

QuillEditor.displayName = 'QuillEditor';

export default dynamic(() => Promise.resolve(QuillEditor), { ssr: false });
