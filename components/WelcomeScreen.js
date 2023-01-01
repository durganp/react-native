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
} from "react-native";

export default function Welcome() {
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
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
      <Text style={styles.title}>color scheme:{colorScheme} </Text>

      <Image
        style={styles.image}
        source={require("../src/img/Picture1.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../src/img/Picture2.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../src/img/Picture3.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../src/img/Picture4.png")}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
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
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 16,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
