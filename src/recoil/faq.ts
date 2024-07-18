import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const faqIdState = atom<number>({
  key: 'faqIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
