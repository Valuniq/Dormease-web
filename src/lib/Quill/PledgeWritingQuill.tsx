'use client';
import dynamic from 'next/dynamic';
import React, { useMemo, forwardRef } from 'react';

import { ImageResize } from 'quill-image-resize-module-ts';
import 'react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
Quill.register('modules/ImageResize', ImageResize);

type Props = {
  width?: string;
  height?: string;
  setEditorHtml: (content: string) => void;
  initialContent?: string;
};

const QuillEditor = forwardRef<HTMLDivElement, Props>(({ width, height, setEditorHtml, initialContent }, ref) => {
  const handleEditorChange = (content: string) => {
    setEditorHtml(content);
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
          style={{ width, height }}
          theme='snow'
          onChange={handleEditorChange}
          modules={modules}
          formats={formats}
          defaultValue={initialContent}
        />
      </div>
    </>
  );
});

QuillEditor.displayName = 'QuillEditor';

export default dynamic(() => Promise.resolve(QuillEditor), { ssr: false });
