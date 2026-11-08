import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages requires a static export.
  // Next.js will generate an exportable site into `out/`.
  output: 'export',
  trailingSlash: true,

  // Asset paths must be absolute for `next/font`.
  assetPrefix: '/',

  // `output: 'export'` + route segment configs can conflict with
  // component caching. Keep the build/export path reliable for Pages.
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
