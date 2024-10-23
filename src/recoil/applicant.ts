import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// 체크박스 상태 관리
export const applicantCheckBoxIdState = atom<number>({
  key: 'applicantCheckBoxIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const nowApplicationIdState = atom<number>({
  key: 'nowApplicationIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

// 디테일 제목 관리
export const detailApplicatoinNameState = atom<string>({
  key: 'detailApplicatoinNameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
