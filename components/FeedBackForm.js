import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function FeedBackForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>
          How was your visit in Little Lemon
        </Text>
        <Text style={styles.infoSection}>
          Little Memon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. we would
          love to hear your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
          onFocus={() => Alert.alert("First Name Focused")}
          onBlur={() => Alert.alert("first name blur")}
          clearButtonMode={"always"} //Only works in ios
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.messageInput}
          value={message}
          onChangeText={setMessage}
          multiline={true}
          placeholder="Please leave Message"
          maxLength={250}
        />
      </ScrollView>
    </KeyboardAvoidingView>
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
    backgroundColor: "#",
    fontSize: 16,
  },
  messageInput: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    justifyContent: "flex-start",
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
