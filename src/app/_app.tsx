import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import tokenManager from '@/utils/tokenManager';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';

import nextCookies from 'next-cookies';

type AppOwnProps = { example: string };

export default function MyApp({ Component, pageProps, example }: AppProps & AppOwnProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (context: AppContext): Promise<AppOwnProps & AppInitialProps> => {
  const appProps = await App.getInitialProps(context);
  const { ctx } = context;
  const allCookies = nextCookies(ctx);

  const accessTokenByCookie = allCookies[ACCESS_TOKEN];
  const refreshTokenByCookie = allCookies[REFRESH_TOKEN];

  if (accessTokenByCookie !== undefined) {
    tokenManager.saveToken('ACCESS_TOKEN', accessTokenByCookie);
  }
  return { ...appProps, example: 'data' };
};
