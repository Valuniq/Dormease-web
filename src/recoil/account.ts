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

export type AccountsModalState = {
  [key: string]: boolean;
};

export const accountsModalState = atom<AccountsModalState>({
  key: 'accountsModalState',
  default: {
    passwordSecure: false,
    passwordConfirm: false,
    passwordChanged: false,
    passwordFailed: false,
    exit: false,
  },
});
