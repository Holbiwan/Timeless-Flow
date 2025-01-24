import React, { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthenticatedUserContext } from "../providers";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { auth } from "../config";

// Home screen for authenticated users
const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Welcome to the App!</Text>
  </View>
);

// Login screen for unauthenticated users
const LoginScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Please log in to continue.</Text>
  </View>
);

// Define navigation stacks
const Stack = createNativeStackNavigator();

// Stack for authenticated users
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

// Stack for unauthenticated users
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

// Main component of the RootNavigator
export const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Monitor authentication state with Firebase
    const unsubscribeAuthStateChanged = onAuthStateChanged(auth, (authenticatedUser) => {
      setUser(authenticatedUser || null);
      setIsLoading(false);
    });

    // Clean up the listener when unmounted
    return unsubscribeAuthStateChanged;
  }, []);

  // Display a loading indicator while verifying user state
  if (isLoading) {
    return <LoadingIndicator />;
  }

  // Return navigation based on user state
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
