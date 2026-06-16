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
};
