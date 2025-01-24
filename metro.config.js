// metro.config.js
// Required by Metro bundler to support .cjs files for Firebase.
// More info: https://docs.expo.dev/guides/using-firebase/#configure-metro
const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push("cjs");

module.exports = defaultConfig;
