import { useState } from 'react';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';

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
    if (onCancel) onCancel();
    setIsDialogOpen(false);
  };

  const showConfirmDialog = (arg?: any) => {
    setConfirmArg(arg);
    setIsDialogOpen(true);
  };

  const ConfirmDialogComponent = isDialogOpen ? (
    <AlertPrompt label={message} onConfirm={handleConfirm} onCancel={handleCancel} variant={variant} />
  ) : null;

  return { showConfirmDialog, ConfirmDialogComponent };
};

export default useConfirmDialog;
