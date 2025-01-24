//HomeScreen.js
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";
import { Logo } from "../components";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  const handleLogout = () => signOut(auth).catch(console.log);

  return (
    <View style={styles.container}>
      <Logo />
      {user && <Text style={styles.welcomeText}>Welcome back, {user.email}!</Text>}
      <Button title="Sign Out" onPress={handleLogout} />
      <Button title="Give Feedback" onPress={() => navigation.navigate("Feedback")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  welcomeText: { fontSize: 18, fontWeight: "bold", marginVertical: 20 },
});
