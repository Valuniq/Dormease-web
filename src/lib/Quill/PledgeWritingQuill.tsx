'use client';
import dynamic from 'next/dynamic';
import React, { useMemo, useState, forwardRef } from 'react';

import { ImageResize } from 'quill-image-resize-module-ts';
import 'react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';
import { POL_STANDARD } from '@/constants/policy';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
Quill.register('modules/ImageResize', ImageResize);

type Props = {
  width?: string;
  height?: string;
  setEditorHtml: (content: string) => void;
  initialContent?: string;
};

const QuillEditor = forwardRef<HTMLDivElement, Props>(({ width, height, setEditorHtml, initialContent }, ref) => {
  const [editorContent, setEditorContent] = useState<string>(initialContent || '');

  const handleEditorChange = (content: string) => {
    const textContent = content.replace(/<[^>]*>/g, ''); // HTML 태그 제거 후 실제 텍스트 길이 확인
    const totalLength = textContent.length; // 전체 텍스트 길이 계산

    if (totalLength <= POL_STANDARD.pledgeWriting.maxLength) {
      setEditorContent(content); // 에디터 내부 상태 업데이트
      setEditorHtml(content); // 부모 컴포넌트에 변경사항 전달
    } else {
      // 텍스트가 5000자를 넘으면, 그 이후의 입력을 자름
      const truncatedContent = content.substring(0, POL_STANDARD.pledgeWriting.maxLength); // 5000자까지만 허용
      setEditorContent(truncatedContent); // 자른 내용을 에디터에 반영
      setEditorHtml(truncatedContent); // 부모 컴포넌트에 자른 내용 전달
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link'],
          ['clean'],
        ],
      },
      clipboard: {
        matchVisual: false,
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
  ];

  return (
    <>
      <div ref={ref} style={{ width, height }}>
        <ReactQuill
          value={editorContent} // editor value를 state로 관리
          style={{ width, height }}
          theme='snow'
          onChange={handleEditorChange}
          modules={modules}
          formats={formats}
        />
      </div>
    </>
  );
});

QuillEditor.displayName = 'QuillEditor';

export default dynamic(() => Promise.resolve(QuillEditor), { ssr: false });
