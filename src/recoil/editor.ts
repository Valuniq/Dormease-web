import { atom } from 'recoil';

export const isEditorModifiedState = atom<boolean>({
  key: 'isEditorModifiedState',
  default: false,
});
export const uploadedImagesState = atom<string[]>({
  key: 'uploadedImagesState',
  default: [],
});
