import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// 체크박스 상태 관리
export const applicantCheckBoxIdState = atom<number>({
  key: 'applicantCheckBoxIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const nowApplicationSettingIdState = atom<number>({
  key: 'nowApplicationSettingIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

// 디테일 제목 관리
export const detailApplicatoinNameState = atom<string>({
  key: 'detailApplicatoinNameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

// 모달
export type applicantModalState = {
  inspectionStart: boolean;
  inspectionCompleted: boolean;
};

export const applicantModalState = atom<applicantModalState>({
  key: 'applicantModalState',
  default: {
    inspectionCompleted: false,
    inspectionStart: false,
  },
});
