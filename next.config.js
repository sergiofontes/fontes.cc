const svgrOptions = {
  // Drop the width/height attributes so icons are driven by their viewBox and
  // sized via CSS (matching the logos), instead of clipping when resized.
  dimensions: false,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          // Keep the viewBox so icons scale correctly when resized via CSS.
          overrides: { removeViewBox: false },
        },
      },
    ],
  },
};

module.exports = {
  turbopack: {
    // Pin the workspace root so Turbopack doesn't pick the wrong directory when a
    // stray lockfile exists higher up (e.g. ~/package-lock.json).
    root: __dirname,
    rules: {
      '*.svg': {
        loaders: [{ loader: '@svgr/webpack', options: svgrOptions }],
        as: '*.js',
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: svgrOptions }],
    });

    return config;
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    // Serve modern formats; the optimizer negotiates per request via Accept.
    formats: ['image/avif', 'image/webp'],
    // 75 is the default for most mockups; 90 for the large, detail-heavy device
    // composite (block 6) whose screenshots soften at the default quality.
    qualities: [75, 90],
    // Small fixed widths the composed mockups/cards render at, so the browser can
    // pick a tight candidate instead of jumping to the smallest device size (640).
    imageSizes: [16, 32, 48, 64, 96, 128, 200, 256, 320, 384, 512],
    // 2560 lets the wide device composite (block 6) stay sharp on retina screens
    // (~2740px needed); every other image caps well below it via its `sizes`.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
  },
  async redirects() {
    // /work has no page of its own; send it to the only case.
    return [
      {
        source: '/work',
        destination: '/work/catalog',
        permanent: true,
      },
    ];
  },
};
