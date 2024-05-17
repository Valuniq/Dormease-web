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

    async rewrites() {
      return isDevelopment
        ? [
            {
              source: '/:path*',
              destination: 'http://13.209.177.109:8080/:path*',
            },
          ]
        : [];
    },
  };

  return nextConfig;
};
