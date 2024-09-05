const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;
  // railing Slash 문제 해결
  // output: 'export' 옵션을 사용하면 next export 명령어로 정적 사이트를 빌드하게 된다.
  // next export의 경우, 기본적으로 모든 경로는 슬래시(/)로 끝나도록 처리됨.
  // 이 문제를 해결하려면 trailingSlash 옵션을 추가
  const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    trailingSlash: false,
    output: 'export',
    images: {
      unoptimized: true, // 이미지 최적화 비활성화
      domains: ['example.com', 'dormease-s3-bucket.s3.amazonaws.com'],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },

    // async rewrites() {
    //   return isDevelopment
    //     ? [
    //         {
    //           source: '/:path*',
    //           destination: 'http://13.209.177.109:8080/:path*',
    //         },
    //       ]
    //     : [];
    // },
  };

  return nextConfig;
};
