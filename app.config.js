import "dotenv/config";

export default {
  expo: {
    name: "Timeless-Flow",
    slug: "timeless-flow",
    privacy: "public",
    platforms: ["ios", "android"],
    version: "0.19.0",
    orientation: "portrait",
    icon: "./assets/images/TimelessLogo.png",
    splash: {       
      image: "./assets/images/splash.png",
      resizeMode: "cover",
      backgroundColor: "#F57C00",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    android: {
      package: "com.timeless.flow",
      versionCode: 1,
      permissions: [],
    },
    ios: {
      bundleIdentifier: "com.timeless.flow",
      buildNumber: "1.0.0",
      supportsTablet: true, 
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    },
  },
};
