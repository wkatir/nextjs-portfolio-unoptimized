import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default withSentryConfig(
  nextConfig,
  {
    org: 'wilmer-salazar',
    project: 'javascript-nextjs',
    silent: !process.env.CI,
    widenClientFileUpload: true,
    reactComponentAnnotation: {
      enabled: true,
    },
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
    sourcemaps: {
      deleteSourcemapsAfterUpload: true,
    },
  },
  {}
);
