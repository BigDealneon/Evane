module.exports = {
  presets: [
    [
      'next/babel',
      {
        // Target modern browsers to reduce polyfills and JS payload
        targets: {
          browsers: ['last 2 versions', 'not dead', 'not IE 11'],
        },
      },
    ],
  ],
  plugins: [
    // Only load essential plugins, avoid unnecessary transforms
    // Remove @babel/plugin-transform-classes in favor of native class syntax
    // Remove spread operator polyfills for modern browsers
  ],
};
