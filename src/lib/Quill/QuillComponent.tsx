'use client';
import dynamic from 'next/dynamic';
import React, { useState, useRef, useEffect, useMemo, forwardRef } from 'react';
import { useRouter } from 'next/navigation';
import { ImageResize } from 'quill-image-resize-module-ts';
import 'react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';
import useTextEditorConfirm from '@/hooks/useTextEditorConfirm';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }) as any;
Quill.register('modules/ImageResize', ImageResize);

type Props = {
  width?: string;
  height?: string;
  setEditorHtml: (content: string) => void; // 에디터 내용을 상위 컴포넌트로 전달하는 함수
};

const QuillEditor = forwardRef<any, Props>(({ width, height, setEditorHtml }, ref) => {
  const [isEditorModified, setIsEditorModified] = useState<boolean>(false);
  const quillRef = useRef<any>(null); // Quill 인스턴스를 참조하기 위한 ref
  const router = useRouter();
  const nextUrlRef = useRef<string | null>(null); // nextUrlRef를 여기서 정의

  const { confirmChanges, ConfirmDialogComponent } = useTextEditorConfirm(
    '작성한 내용은 저장되지 않았습니다.\n페이지를 벗어나시겠습니까?',
    () => {
      if (nextUrlRef.current) {
        const nextUrl = nextUrlRef.current;
        nextUrlRef.current = null;
        router.push(nextUrl);
      }
    },
  );

  const handleEditorChange = (content: string) => {
    setEditorHtml(content);
    setIsEditorModified(true);
  };

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.style.display = 'none'; // 입력 요소를 숨깁니다.
    document.body.appendChild(input);

    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (quillRef.current) {
            const editor = quillRef.current.getEditor();
            const range = editor.getSelection(true); // 현재 커서 위치를 가져옵니다.
            if (range) {
              // Convert base64 to Blob URL
              const base64Data = e.target?.result as string;
              const blob = base64ToBlob(base64Data.split(',')[1], 'image/png');
              const url = URL.createObjectURL(blob);
              editor.insertEmbed(range.index, 'image', url); // 이미지를 삽입합니다.
            }
          }
        };
        reader.readAsDataURL(file);
      }
    };
  };

  const base64ToBlob = (base64: string, mime: string) => {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: mime });
  };

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const observer = new MutationObserver(() => {
        // Mutation observer callback
      });

      observer.observe(editor.root, {
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isEditorModified) {
        e.preventDefault();
        e.returnValue = ''; // 브라우저가 기본 경고 메시지를 표시하도록 합니다.
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
          originalPush(url, options); // 원래 push 함수 호출
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

  const modules = useMemo(() => {
    return {
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
    };
  }, []);

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
      <ReactQuill
        ref={ref}
        style={{ width, height }}
        theme='snow'
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
      />
      {ConfirmDialogComponent}
    </>
  );
});

export default dynamic(() => Promise.resolve(QuillEditor), { ssr: false });
