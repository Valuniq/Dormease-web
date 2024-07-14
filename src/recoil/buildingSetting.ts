import { atom } from 'recoil';

export const buildingSettingIdState = atom<number>({
  key: 'buildingSettingIdState',
  default: 0,
});
