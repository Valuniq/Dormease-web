'use client';
import { useState } from 'react';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { createPortal } from 'react-dom';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';

// confirm 창 열고 닫기

const useConfirmDialog = (
  message: string,
  onConfirm: (arg?: any) => void | Promise<void>,
  variant: 'blue' | 'red' | 'green',
  onCancel?: () => void,
) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [confirmArg, setConfirmArg] = useState<any>(null);

  const handleConfirm = async () => {
    await onConfirm(confirmArg);
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
    if (onCancel) onCancel();
  };

  const showConfirmDialog = (arg?: any) => {
    setConfirmArg(arg);
    setIsDialogOpen(true);
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

  return { showConfirmDialog, ConfirmDialogComponent };
};

export default useConfirmDialog;
