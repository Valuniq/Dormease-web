import { pointManagementModalState } from '@/recoil';
import { TPointManagementModalState } from '@/recoil/pointManagement';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const usePointManagementModal = () => {
  const [isOpened, setIsOpened] = useRecoilState(pointManagementModalState);

  const handleOpenModal = (modalName: keyof TPointManagementModalState) => {
    setIsOpened((prev) => ({
      ...prev,
      [modalName]: true,
    }));
  };

  const handleCloseModal = (modalName: keyof TPointManagementModalState) => {
    setIsOpened((prev) => ({
      ...prev,
      [modalName]: false,
    }));
  };

  return {
    isOpened,
    handleOpenModal,
    handleCloseModal,
  };
};

export default usePointManagementModal;
