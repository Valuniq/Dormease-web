import { atom } from 'recoil';

export type accountsActiveAreaState = {
  namebox: boolean;
  passwordBox: boolean;
};

export const accountsActiveAreaState = atom<accountsActiveAreaState>({
  key: 'accountsActiveAreaState',
  default: {
    namebox: false,
    passwordBox: false,
  },
});

export type accountsModalState = {
  passwordSecure: boolean;
  passwordConfirm: false;
  passwordChanged: false;
  exit: false;
};

export const accountsModalState = atom<accountsModalState>({
  key: 'accountModalState',
  default: {
    passwordSecure: false,
    passwordConfirm: false,
    passwordChanged: false,
    exit: false,
  },
});
