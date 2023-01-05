import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LittleLemonHeader from "./components/LittleLemonHeader";
import MenuItems from "./components/MenuItems";
import FeedBackForm from "./components/FeedBackForm";
import Welcome from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import LittleLemonFooter from "./components/LittleLemonFooter";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Welcome" component={Welcome} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
