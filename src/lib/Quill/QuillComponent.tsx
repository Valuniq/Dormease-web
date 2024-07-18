'use client';
import dynamic from 'next/dynamic';
import React, { useRef, useEffect, useMemo, forwardRef } from 'react';
import { useRouter } from 'next/navigation';
import { ImageResize } from 'quill-image-resize-module-ts';
import 'react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';
import { useRecoilState } from 'recoil';

import useTextEditorConfirm from '@/hooks/useTextEditorConfirm';
import { isEditorModifiedState } from '@/types/editor';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }) as any;
Quill.register('modules/ImageResize', ImageResize);

type Props = {
  width?: string;
  height?: string;
  setEditorHtml: (content: string) => void;
};

const QuillEditor = forwardRef<typeof ReactQuill, Props>(({ width, height, setEditorHtml }, ref) => {
  const [isEditorModified, setIsEditorModified] = useRecoilState(isEditorModifiedState);
  const quillRef = useRef<typeof ReactQuill | null>(null);
  const router = useRouter();
  const nextUrlRef = useRef<string | null>(null);

  const { confirmChanges, ConfirmDialogComponent } = useTextEditorConfirm(
    '작성한 내용은 저장되지 않았습니다.\n페이지를 벗어나시겠습니까?',
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

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.style.display = 'none';
    document.body.appendChild(input);

    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (quillRef.current) {
            const editor = quillRef.current.getEditor();
            const range = editor.getSelection(true);
            if (range) {
              const base64Data = e.target?.result as string;
              const blob = base64ToBlob(base64Data.split(',')[1], 'image/png');
              const url = URL.createObjectURL(blob);
              editor.insertEmbed(range.index, 'image', url);
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
      const observer = new MutationObserver(() => {});

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

QuillEditor.displayName = 'QuillEditor';

export default dynamic(() => Promise.resolve(QuillEditor), { ssr: false });
