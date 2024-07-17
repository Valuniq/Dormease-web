'use client';
import { useState } from 'react';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';
import { createPortal } from 'react-dom';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';

const useTextEditorConfirm = (message: string, onConfirm: () => void) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [resolvePromise, setResolvePromise] = useState<(value: boolean) => void>(() => {});

  const confirmChanges = () => {
    setIsDialogOpen(true);
    return new Promise<boolean>((resolve) => {
      setResolvePromise(() => resolve);
    });
  };

  const handleConfirm = () => {
    setIsDialogOpen(false);
    onConfirm();
    resolvePromise(true);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
    resolvePromise(false);
  };

  const ConfirmDialogComponent = isDialogOpen
    ? createPortal(
        <BackDrop isOpen={true}>
          <AlertPrompt variant='blue' label={message} onConfirm={handleConfirm} onCancel={handleCancel} />
        </BackDrop>,
        document.body,
      )
    : null;

  return { confirmChanges, ConfirmDialogComponent };
};

export default useTextEditorConfirm;
