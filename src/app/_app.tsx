import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import tokenManager from '@/utils/tokenManager';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import nextCookies from 'next-cookies';
import Router from 'next/router';

export default function DormeaseApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// getInitialProps를 사용하여 SSR 단계에서 토큰을 확인하고 리다이렉트 로직
DormeaseApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps> => {
  // 각 페이지의 초기 props를 가져옴
  const pageProps = await App.getInitialProps(context);
  const { ctx } = context;
  console.log(ctx.req?.headers.cookie);
  console.log('엥');

  // 모든 쿠키를 가져옴
  const allCookies = nextCookies(ctx);

  // ACCESS_TOKEN과 REFRESH_TOKEN을 쿠키에서 가져옴
  const accessTokenByCookie = allCookies[ACCESS_TOKEN];
  const refreshTokenByCookie = allCookies[REFRESH_TOKEN];

  // ACCESS_TOKEN이 존재하고, 서버 요청이 존재하며, 요청 헤더가 존재할 때
  if (accessTokenByCookie !== undefined && ctx.req && ctx.req.headers) {
    // 요청 헤더에 authorization을 추가
    ctx.req.headers.authorization = `${accessTokenByCookie}`;
    // 토큰 매니저에 ACCESS_TOKEN을 저장
    tokenManager.saveToken('ACCESS_TOKEN', accessTokenByCookie);
  }

  // ACCESS_TOKEN이 없고, 현재 페이지가 '/'가 아닌 경우
  if (!accessTokenByCookie && ctx.pathname !== '/') {
    // 서버 사이드에서 리다이렉트
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: '/' });
      ctx.res.end();
    } else {
      // 클라이언트 사이드에서 리다이렉트
      Router.push('/');
    }
  }

  // 초기 props를 반환
  return { ...pageProps };
};
