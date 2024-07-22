'use client';
import { useState } from 'react';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { createPortal } from 'react-dom';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';

const useTextEditorConfirm = (message: string, onConfirm: () => void, variant: 'blue' | 'red' | 'green') => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [resolvePromise, setResolvePromise] = useState<(value: boolean) => void>(() => {});
  const [skipConfirm, setSkipConfirm] = useState(false);

  const confirmChanges = () => {
    if (skipConfirm) {
      return Promise.resolve(true);
    }
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
          <div className='xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40'>
            <ConfirmPrompt variant={variant} label={message} onConfirm={handleConfirm} onCancel={handleCancel} />
          </div>
        </BackDrop>,
        document.body,
      )
    : null;

  return { confirmChanges, ConfirmDialogComponent, setSkipConfirm };
};

export default useTextEditorConfirm;
