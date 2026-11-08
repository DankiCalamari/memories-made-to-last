import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages requires a static export.
  // Next.js will generate an exportable site into `out/`.
  output: 'export',
  trailingSlash: true,

  // GitHub Pages often serves the site from a project sub-path.
  // Ensure Next-generated absolute assets (like /_next/...) point
  // at the correct base path on GitHub Pages.
  basePath: '/memories-made-to-last',
  assetPrefix: '/memories-made-to-last',

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
