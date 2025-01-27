// metro.config.js
// Required by Metro bundler to support .cjs files for Firebase.
// More info: https://docs.expo.dev/guides/using-firebase/#configure-metro
const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Adding the .cjs extension for Firebase files
defaultConfig.resolver.sourceExts.push("cjs");

// Adding aliases for paths in the project
defaultConfig.resolver.alias = {
  screens: "./screens", // Alias to access files in the screens folder
  components: "./components", // (Optional) You can add other aliases here
  config: "./config", // (Optional) Alias for the config folder
};

module.exports = defaultConfig;
// The code snippet above configures Metro bundler to support .cjs files for Firebase. 
// It also adds aliases for paths in the project 
// to make it easier to import files from different directories.
