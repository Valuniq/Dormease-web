import { ImageResize } from 'quill-image-resize-module-ts';
import React, { useState, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
Quill.register('modules/ImageResize', ImageResize);

const QuillComponent: React.FC = () => {
  const [editorHtml, setEditorHtml] = useState<string>('');
  const [isEditorModified, setIsEditorModified] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isEditorModified) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isEditorModified]);

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
    <div>
      <ReactQuill theme='snow' value={editorHtml} onChange={handleEditorChange} modules={modules} formats={formats} />
    </div>
  );
};

export default QuillComponent;
