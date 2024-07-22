import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

const BackDrop = ({ children, isOpen }: Props) => {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }

    return () => {
      window.document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return createPortal(
    <div className='fixed z-backdrop top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center'>
      <div className='xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40'>{children ?? null}</div>
    </div>,
    document.body,
  );
};

export default BackDrop;
