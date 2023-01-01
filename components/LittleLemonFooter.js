import React from "react";
import { View, Text } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        flex: 0.1,
        padding: 1,
        backgroundColor: "#F4CE14",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        {"\u00A9"} All rights reserved by Little Lemon,
        <Text style={{ fontWeight: "bold" }}> 2022</Text>
      </Text>
    </View>
  );
}
