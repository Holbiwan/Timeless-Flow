import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Retrieve Firebase configuration securely from `Constants.manifest.extra`
const extra = Constants.manifest?.extra || Constants.expoConfig?.extra;

// Check if Firebase configuration variables exist
if (!extra) {
  throw new Error("Firebase config is missing in Constants.manifest.extra or Constants.expoConfig.extra");
}

// Firebase configuration object
const firebaseConfig = {
  apiKey: extra.API_KEY,
  authDomain: extra.AUTH_DOMAIN,
  projectId: extra.PROJECT_ID,
  storageBucket: extra.STORAGE_BUCKET,
  messagingSenderId: extra.MESSAGING_SENDER_ID,
  appId: extra.APP_ID,
};

// Validate the presence of required Firebase keys
const requiredKeys = ["apiKey", "authDomain", "projectId", "storageBucket", "messagingSenderId", "appId"];
requiredKeys.forEach((key) => {
  if (!firebaseConfig[key]) {
    throw new Error(`Firebase configuration key is missing: ${key}`);
  }
});

// Log the Firebase configuration in development mode only
if (__DEV__) {
  console.log("Firebase configuration (dev mode):", firebaseConfig);
}

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
