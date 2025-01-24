import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config";

export default function FeedbackScreen() {
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!description) {
      alert("Please provide feedback.");
      return;
    }

    try {
      await addDoc(collection(db, "feedback"), {
        description,
        createdAt: serverTimestamp(),
      });
      alert("Thank you for your feedback!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Error occurred. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Provide your feedback:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your feedback here"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Submit Feedback" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: Colors.black },
  label: { fontSize: 18, color: Colors.white, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 20 },
});
