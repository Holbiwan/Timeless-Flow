import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import { AuthenticatedUserProvider } from "./providers";
import { RootNavigator } from "./navigation/RootNavigator";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Constants from "expo-constants";

// Get the Firebase configuration from the app.config.js file
const firebaseConfig = Constants.expoConfig.extra;

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Define the theme
const theme = {
  colors: {
    primary: "#4CAF50", // Exemple green as primary color
    secondary: "#FF9800", // Exemple orange as secondary color
  },
  Button: {
    raised: true, //All buttons will be raised
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticatedUserProvider>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </AuthenticatedUserProvider>
    </ThemeProvider>
  );
};

//testing tempory log
console.log("Firebase Config:", firebaseConfig);

export default App;
