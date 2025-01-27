const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Add extension .cjs to sourceExts
defaultConfig.resolver.sourceExts.push("cjs");
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, "jsx", "js", "ts", "tsx"];


// Add alias for config, components and screens
defaultConfig.resolver.alias = {
    config: "./config", // Alias pour le dossier config
    components: "./components", // Alias pour le dossier components
    screens: "./screens", // Alias pour le dossier screens
};

module.exports = defaultConfig;
