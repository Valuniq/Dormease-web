import { POL_ACCOUNTS } from '@/constants/policy';

export const validatePassword = (password: string): boolean => {
  const lengthValid =
    password.length >= POL_ACCOUNTS.password.minLength && password.length <= POL_ACCOUNTS.password.maxLength;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).{6,20}$/;
  const patternValid = passwordRegex.test(password);
  return lengthValid && patternValid;
};
