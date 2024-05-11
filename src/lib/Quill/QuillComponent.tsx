'use client';
import UseTextEditorConfirm from '@/hooks/UseTextEditorConfirm';
import { ImageResize } from 'quill-image-resize-module-ts';
import React, { useState, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
Quill.register('modules/ImageResize', ImageResize);

type Props = {
  width?: string;
  height?: string;
  onSave: () => void; // 에디터 변경 사항 저장 함수
};

const QuillComponent = ({ width, height, onSave }: Props) => {
  const [editorHtml, setEditorHtml] = useState<string>('');
  const [isEditorModified, setIsEditorModified] = useState<boolean>(false);

  UseTextEditorConfirm('변경 사항이 저장되지 않았습니다. 페이지를 벗어나시겠습니까?', () => {
    if (isEditorModified) onSave();
  });

  const handleEditorChange = (content: string) => {
    setEditorHtml(content);
    setIsEditorModified(true);
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
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
    'video',
  ];

  return (
    <ReactQuill
      style={{ width, height }}
      theme='snow'
      value={editorHtml}
      onChange={handleEditorChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default QuillComponent;
