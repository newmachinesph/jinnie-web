import type { NextConfig } from "next";

const assetOrigin = process.env.JINNIE_ASSET_ORIGIN?.replace(/\/$/, '');

const nextConfig: NextConfig = {
  async headers() {
    return [{
      source: '/downloads/:filename(.*\\.apk)',
      headers: [
        { key: 'Content-Type', value: 'application/vnd.android.package-archive' },
        { key: 'Content-Disposition', value: 'attachment' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
      ],
    }];
  },
  async rewrites() {
    return {
      // Keep same-origin media URLs for the native WebView and offline worker,
      // while production fetches the bytes from the public R2 asset origin.
      beforeFiles: assetOrigin ? [{
        // Vercel external rewrites can cache a partial body with status 200.
        // Stream audio/video through a handler that preserves Range and 206.
        source: '/learn-assets/:kind(audio|video)/:path*',
        destination: '/api/media/:kind/:path*',
      }, ...['learn-assets', 'screens'].map(prefix => ({
        source: `/${prefix}/:path*`,
        destination: `${assetOrigin}/${prefix}/:path*`,
      }))] : [],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
