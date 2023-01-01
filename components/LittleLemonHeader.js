import React from "react";
import { Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View
      style={{
        flex: 0.1,
        backgroundColor: "#F4CE14",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          color: "#000000",
          alignSelf: "center",
        }}
      >
        LITTLE LEMON
      </Text>
    </View>
  );
}
