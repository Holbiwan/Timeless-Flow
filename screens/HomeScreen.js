import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../config";
import { onAuthStateChanged } from "firebase/auth";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const handleFeedback = () => {
    navigation.navigate("Feedback");
  };

  return (
    <View style={styles.container}>
      {user && <Text style={styles.welcomeText}>Welcome back, {user.email}!</Text>}
      <View style={styles.spacer} />
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
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  spacer: {
    height: 20,
  },
});
