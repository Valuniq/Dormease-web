import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const noticeIdState = atom<number>({
  key: 'noticeIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
