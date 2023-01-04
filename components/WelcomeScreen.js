import React, { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
  useWindowDimensions,
  Pressable,
} from "react-native";

export default function Welcome({ navigation }) {
  const colorScheme = useColorScheme();
  const { height, width, fontScale } = useWindowDimensions();
  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme
          ? { backgroundColor: "#" }
          : { backgroundColor: "#333333", color: "#fff" },
      ]}
    >
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../src/img/littleLemonHeader.png")}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediteranean Bistrof
      </Text>
      <Text style={styles.title}>Color Scheme:{colorScheme} </Text>
      <Pressable onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    color: "#fff",
  },
  title: {
    marginTop: 16,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
});
