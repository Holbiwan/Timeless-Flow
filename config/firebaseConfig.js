import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Add securise firebase configuration
const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.apiKey,
  authDomain: Constants.expoConfig?.extra?.authDomain,
  projectId: Constants.expoConfig?.extra?.projectId,
  storageBucket: Constants.expoConfig?.extra?.storageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId,
  appId: Constants.expoConfig?.extra?.appId,
};

// Add a log to check the firebase configuration dev mode
if (__DEV__) {
  console.log("Firebase configuration (dev mode):", firebaseConfig);
}

// Validate the firebase keys are present
const requiredKeys = ["apiKey", "authDomain", "projectId", "storageBucket", "messagingSenderId", "appId"];
requiredKeys.forEach(key => {
  if (!firebaseConfig[key]) {
    throw new Error(`Missing Firebase configuration key: ${key}`);
  }
});

// Initialize the firebase app
const app = initializeApp(firebaseConfig);

// Initialize the firebase auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };

