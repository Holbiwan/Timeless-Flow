import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import { signOut } from "firebase/auth";

import { auth } from "../config";

export const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  const handleFeedback = () => {
    navigation.navigate("Feedback"); // Navigates to the FeedbackScreen
  };

  return (
    <View style={styles.container}>
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
  spacer: {
    height: 20, // Space between buttons
  },
});
