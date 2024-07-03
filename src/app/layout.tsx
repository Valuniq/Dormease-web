import type { Metadata } from 'next';
import './globals.css';
import RecoilRootWrapper from '@/recoil/RecoilWrapper';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* react-quill CSS 파일 링크 */}
        <link rel='stylesheet' href='https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css' />
      </head>
      <body>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
