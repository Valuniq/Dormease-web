import { RES_ACCOUNTS } from '@/constants/restrictions';

export const validatePassword = (password: string): boolean => {
  const lengthValid =
    password.length >= RES_ACCOUNTS.password.minLength && password.length <= RES_ACCOUNTS.password.maxLength;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).{6,20}$/;
  const patternValid = passwordRegex.test(password);
  return lengthValid && patternValid;
};
