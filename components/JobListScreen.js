// screens/JobListScreen.js
import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { JobCard } from "../components/JobCard"; // Import the JobCard component

// Example data (you can replace this with dynamic data from an API or Firebase)
const jobData = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechFlow Inc.",
    location: "Remote",
    salary: "$70,000 - $90,000",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "CodeCraft Ltd.",
    location: "San Francisco, CA",
    salary: "$100,000 - $120,000",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "InnoTech Solutions",
    location: "New York, NY",
    salary: "$95,000 - $110,000",
  },
];

export const JobListScreen = () => {
  // Render each job listing
  const renderJobCard = ({ item }) => (
    <JobCard
      title={item.title}
      company={item.company}
      location={item.location}
      salary={item.salary}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Job Opportunities</Text>
      <FlatList
        data={jobData} // Job listings data
        keyExtractor={(item) => item.id} // Unique key
        renderItem={renderJobCard} // Function to render each job
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9", // Background color for the screen
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
});
