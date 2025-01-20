import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements"; // Import ThemeProvider
import { AuthenticatedUserProvider } from "./providers";
import { RootNavigator } from "./navigation/RootNavigator";

// Optionally, define a custom theme
const theme = {
  colors: {
    primary: "#4CAF50", // Example: green as primary color
    secondary: "#FF9800", // Example: orange as secondary color
  },
  Button: {
    raised: true, // All buttons will be raised by default
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

export default App;
