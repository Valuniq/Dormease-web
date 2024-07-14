'use client';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import BackDrop from '../BackDrop/Backdrop';
import ConfirmPrompt from '../Prompt/ConfirmPrompt/ConfirmPrompt';
import { editState, navState, targetRouteState } from '@/recoil/nav';
import { useRouter } from 'next/navigation';

const NavModal = () => {
  const [modal, setModal] = useRecoilState(navState);
  const setEditState = useSetRecoilState(editState);
  const targetRoute = useRecoilValue(targetRouteState);
  const router = useRouter();

  return (
    <BackDrop isOpen={modal}>
      <ConfirmPrompt
        variant='red'
        label='이 페이지를 떠나시면 설정 내용이 저장되지 않습니다.'
        onCancel={() => setModal(!modal)}
        onConfirm={() => {
          setModal(!modal);
          setEditState(!modal);
          router.push(targetRoute);
        }}
      />
    </BackDrop>
  );
};

export default NavModal;
