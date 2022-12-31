import React from "react";
import { Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 0.2 }}>
      <Text
        style={{
          textAlign: "center",
          padding: 20,
          fontSize: 35,
          color: "white",
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 20,
          padding: 20,
        }}
      >
        Little Lemon is a charming nightborhood bistro that cocktails in a
        lively but casual environment. We would love to hear more about your
        experience with us!
      </Text>
    </View>
  );
}
