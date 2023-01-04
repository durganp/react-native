import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import MenuItems from "./components/MenuItems";
import FeedBackForm from "./components/FeedBackForm";
import Welcome from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import LittleLemonFooter from "./components/LittleLemonFooter";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <LittleLemonHeader /> */}
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Menu" component={MenuItems} />
        <Stack.Screen name="Feedback" component={FeedBackForm} />

        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
      <LittleLemonFooter />
    </NavigationContainer>
  );
}
