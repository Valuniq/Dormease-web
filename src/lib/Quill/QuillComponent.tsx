import dynamic from 'next/dynamic';
import useTextEditorConfirm from '@/hooks/useTextEditorConfirm';
import { ImageResize } from 'quill-image-resize-module-ts';
import React, { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }) as any;
Quill.register('modules/ImageResize', ImageResize);

type Props = {
  width?: string;
  height?: string;
  onSave: () => void; // 에디터 변경 사항 저장 함수
  setEditorHtml: (content: string) => void; // 에디터 내용을 상위 컴포넌트로 전달하는 함수
};

const QuillComponent = ({ width, height, onSave, setEditorHtml }: Props) => {
  const [isEditorModified, setIsEditorModified] = useState<boolean>(false);

  useTextEditorConfirm('변경 사항이 저장되지 않았습니다. 페이지를 벗어나시겠습니까?', () => {
    if (isEditorModified) onSave();
  });

  const handleEditorChange = (content: string) => {
    setEditorHtml(content);
    console.log(content);
    setIsEditorModified(true);
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
      ['emoji'],
    ],
    clipboard: {
      matchVisual: false,
    },
    ImageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize'],
    },
  };

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
    <ReactQuill
      style={{ width, height }}
      theme='snow'
      onChange={handleEditorChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default QuillComponent;
