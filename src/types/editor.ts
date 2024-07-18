import { atom } from 'recoil';

export const isEditorModifiedState = atom<boolean>({
  key: 'isEditorModifiedState',
  default: false,
});
