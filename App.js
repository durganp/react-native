import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import MenuItems from "./components/MenuItems";
import FeedBackForm from "./components/FeedBackForm";
import Welcome from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import LittleLemonFooter from "./components/LittleLemonFooter";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <LittleLemonHeader />
      {/* <MenuItems /> */}
      {/* <FeedBackForm /> */}
      <Welcome />
      {/* <LoginScreen /> */}
      <LittleLemonFooter />
    </View>
  );
}
