const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;
  const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['example.com', 'dormease-s3-bucket.s3.amazonaws.com'],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
    // 서비스 워커 비활성화
    experimental: {
      serviceWorker: false,
    },
  };

  return nextConfig;
};
