const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

const tokenManager = {
  saveToken: (key: string, token: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, token);
    }
  },
  getToken: (key: string): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  },
  removeToken: (key: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  },
};

export default tokenManager;
