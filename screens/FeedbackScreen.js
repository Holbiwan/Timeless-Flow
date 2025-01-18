import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

export default function FeedbackScreen() {
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!description) {
      alert('Please provide a description of the issue.');
      return;
    }

    try {
      await firestore().collection('feedback').add({
        description,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      alert('Thank you for your feedback!');
      navigation.goBack();
    } catch (error) {
      console.error('Error submitting feedback: ', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Describe the issue or feedback:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your feedback here"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Submit Feedback" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
