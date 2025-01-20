import "dotenv/config";

export default {
  expo: {
    name: "Timeless-Flow",
    slug: "timeless-flow",
    privacy: "public",
    platforms: ["ios", "android"],
    version: "0.19.0",
    orientation: "portrait",
    icon: "./assets/flame.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#F57C00",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      eas: {
        projectId: "eb2a64e6-f793-4c6a-8745-cdfb1708377c",
      },
    },
    owner: "holbiwan971",
  },
};
