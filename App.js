import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import { AuthenticatedUserProvider } from "./src/providers";
import { RootNavigator } from "./navigation/RootNavigator";
import { View, StyleSheet } from 'react-native';

// Define theme
const theme = {
  colors: {
    primary: "#4CAF50",
    secondary: "#FF9800",
    background: "#000000", // Black background
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticatedUserProvider>
        <SafeAreaProvider>
          <View style={styles.container}>
            <RootNavigator />
          </View>
        </SafeAreaProvider>
      </AuthenticatedUserProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background, // Use theme's background color
  },
});
