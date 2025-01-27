// JobCard.js
import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

/**
 * JobCard Component
 * Displays a job offer with  details
 * @param {string} title - Job title.
 * @param {string} company - Company name.
 * @param {string} location - Job location.
 * @param {string} description - Short description of the job.
 * @param {function} onPress - Callback when "Apply" or "Details" button is pressed.
 */
export const JobCard = ({ title, company, location, description, onPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>See Details</Text>
      </TouchableOpacity>
    </View>
  );
};

// PropTypes for validation
JobCard.propTypes = {
  title: PropTypes.string.isRequired, // Job title
  company: PropTypes.string.isRequired, // Company name
  location: PropTypes.string.isRequired, // Job location
  description: PropTypes.string.isRequired, // Short job description
  onPress: PropTypes.func, // Callback function for button press
};

// Default props
JobCard.defaultProps = {
  onPress: () => {},
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  company: {
    fontSize: 16,
    color: "#666",
    marginVertical: 4,
  },
  location: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#6bff",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
