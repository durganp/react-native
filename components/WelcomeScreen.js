import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Welcome() {
  const [firstName, setFirstName] = useState("");

  return (
    <ScrollView style={styles.container} keyboardDismissMode="on-drag">
      <Text style={styles.headingSection}>
        How was your visit in Little Lemon
      </Text>
      <Text style={styles.infoSection}>
        Little Memon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. we would love
        to hear your experience with us!
      </Text>
      <TextInput
        placeholder="First Name"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
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
    backgroundColor: "#ffffff",
    fontSize: 16,
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
