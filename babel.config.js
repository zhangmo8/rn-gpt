module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.ts', '.tsx'],
        alias: {
          '*': ['./src'],
        },
      },
    ],
  ],
};
