import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import { SIGNOUT_USER_STATE } from '@/constants/userLoginState';
import tokenManager from '@/utils/tokenManager';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

// const cookieEffect =
//   (accessTokenKey: 'ACCESS_TOKEN', refreshTokenKey: 'REFRESH_TOKEN') =>
//   ({ setSelf, onSet }: any) => {
//     onSet(async () => {
//       try {
//         const accessToken = tokenManager.getAccessToken();
//         const refreshToken = tokenManager.getRefreshToken();

//         if (!accessToken || !refreshToken) {
//           tokenManager.removeTokenAll();
//           return SIGNOUT_USER_STATE;
//         }

//         const { data } = await authorizeFetch({
//           accessToken,
//           refreshToken,
//           apiURL: '/', // user 정보 불러 오는 api
//         });

//         return { isLoggedIn: true };
//       } catch (error: unknown) {
//         tokenManager.removeTokenAll();
//         console.error(error);

//         return SIGNOUT_USER_STATE;
//       }
//     });
//   };

// export const userLoginState = atom({
//   key: `user/${new Date().getUTCMilliseconds() * Math.random()}`,
//   effects: [cookieEffect(ACCESS_TOKEN, REFRESH_TOKEN)],
//   default: SIGNOUT_USER_STATE,
// });

// function authorizeFetch(arg0: {
//   accessToken: any;
//   refreshToken: any;
//   apiURL: any; // 자기 자신의 정보를 불러오는 api,
// }): { data: any } | PromiseLike<{ data: any }> {
//   throw new Error('Function not implemented.');
// }

export interface UserAuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

// 사용자 인증 상태를 관리하는 atom
export const userAuthState = atom<UserAuthState>({
  key: 'userAuthState',
  default: {
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
  },
});

// 로그인 성공 시 호출할 함수
export const useHandleLoginSuccess = () => {
  const setUserAuthState = useSetRecoilState(userAuthState);

  return (accessToken: string, refreshToken: string) => {
    setUserAuthState({
      isLoggedIn: true,
      accessToken,
      refreshToken,
    });

    // 토큰 저장
    tokenManager.saveToken(ACCESS_TOKEN, accessToken);
    tokenManager.saveToken(REFRESH_TOKEN, refreshToken);
  };
};
export const useUserAuthState = () => {
  const userAuth = useRecoilValue(userAuthState);
  return userAuth;
};
