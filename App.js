// App.js.
import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import { AuthenticatedUserProvider } from "./src/providers";
import { RootNavigator } from "./navigation/RootNavigator";
import theme from "./config/theme"; // Import theme

export default function App() {
  return <Navigation />;
}

export default function App() {
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
