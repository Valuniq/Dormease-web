'use client';
import { useState } from 'react';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
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

  const ConfirmDialogComponent = isDialogOpen ? (
    <BackDrop isOpen={true}>
      <ConfirmPrompt variant={variant} label={message} onConfirm={handleConfirm} onCancel={handleCancel} />
    </BackDrop>
  ) : null;

  return { showConfirmDialog, ConfirmDialogComponent };
};

export default useConfirmDialog;
