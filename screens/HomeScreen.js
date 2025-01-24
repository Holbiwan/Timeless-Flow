import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";
import { Logo } from '../components';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  // Effect to monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  // Logout handler
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  // Navigate to Feedback Screen
  const handleFeedback = () => {
    navigation.navigate("Feedback");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/TimelessLogo.png")}
        style={styles.logo}
      />

      {/* Welcome message for logged-in user */}
      {user && (
        <Text style={styles.welcomeText}>
          Welcome back, {user.email}!
        </Text>
      )}

      <View style={styles.spacer} />

      {/* Buttons */}
      <Button title="Sign Out" onPress={handleLogout} />
      <View style={styles.spacer} />
      <Button title="Give Feedback" onPress={handleFeedback} color="#6200ea" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, // Space below the logo
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  spacer: {
    height: 20, // Space between elements
  },
});
