import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#495E57",
      }}
    >
      <LittleLemonHeader />
      <MenuItems />
    </View>
  );
}
