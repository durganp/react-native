import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [costumers, setCostumers] = useState([]);
  const [textInputValue, setTextInputValue] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const costumers = await AsyncStorage.getItem("costumers");
        setCostumers(costumers === null ? [] : JSON.parse(costumers));
      } catch (err) {}
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem("costumers", JSON.stringify(costumers));
      } catch (err) {
        alert(err);
      }
    })();
  }, [costumers]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Little Lemon Costumers</Text>
        <TextInput
          placeholder="Enter the customer name"
          value={textInputValue}
          onChangeText={(data) => setTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => {
            setCostumers([...costumers, textInputValue]);
            setTextInputValue("");
          }}
          style={styles.saveButton}
        >
          <Text style={styles.buttonText}> save Costumer</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.costumerList}>Costumer: </Text>
          {costumers.map((costumer) => (
            <Text style={styles.costumerList}>{costumer} </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    fontSize: 20,
    marginVertical: 20,
    borderColor: "#333333",
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "green",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    padding: 2,
    fontSize: 25,
  },
  costumerList: {
    textAlign: "center",
    fontSize: 22,
  },
});
export default App;
