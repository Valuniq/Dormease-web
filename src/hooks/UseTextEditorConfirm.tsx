import { useEffect } from 'react';

const UseTextEditorConfirm = (message: string, onConfirm: () => void) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [message, onConfirm]);

  const confirmChanges = () => {
    const shouldConfirm = window.confirm(message);
    if (shouldConfirm) {
      onConfirm();
    }
  };

  return confirmChanges;
};

export default UseTextEditorConfirm;
