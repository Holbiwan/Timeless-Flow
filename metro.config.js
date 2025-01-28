const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'jsx',
  'js',
  'ts',
  'tsx',
  'json',
];

defaultConfig.resolver.assetExts = [
  ...defaultConfig.resolver.assetExts,
  'html',
];

module.exports = defaultConfig;
