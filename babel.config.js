module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@dao': './src/dao',
          '@hooks': './src/hooks',
          '@manager': './src/manager',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@state': './src/state',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
