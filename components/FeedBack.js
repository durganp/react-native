import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function FeedBack() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingSection}>
        How was your visit in Little Lemon
      </Text>
      <Text style={styles.infoSection}>
        Little Memon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. we would love
        to hear your experience with us!
      </Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onchangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onchangeText={setLastName}
      />
      <TextInput
        style={styles.messageInput}
        value={message}
        onchangeText={setMessage}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "EDEFEE",
    backgroundColor: "#F4CE14",
    fontSize: 16,
  },
  messageInput: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#edefee",
    textAlign: "center",
    backgroundColor: "#495e57",
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});
