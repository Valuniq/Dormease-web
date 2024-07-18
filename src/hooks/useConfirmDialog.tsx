import { useState } from 'react';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';

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
    <ConfirmPrompt label={message} onConfirm={handleConfirm} onCancel={handleCancel} variant={variant} />
  ) : null;

  return { showConfirmDialog, ConfirmDialogComponent };
};

export default useConfirmDialog;
