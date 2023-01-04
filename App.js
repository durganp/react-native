import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LittleLemonHeader from "./components/LittleLemonHeader";
import MenuItems from "./components/MenuItems";
import FeedBackForm from "./components/FeedBackForm";
import Welcome from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import LittleLemonFooter from "./components/LittleLemonFooter";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Logo() {
  return (
    <Image
      style={{
        height: 40,
        width: 300,
        resizeMode: "contain",
        alignSelf: "center",
      }}
      source={require("./src/img/littleLemonHeader.png")}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(props) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (props.route.name === "Welcome") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (props.route.name === "Menu") {
              iconName = "ios-list";
            } else if (props.route.name === "Login") {
              iconName = "ios-log-in";
            } else if (props.route.name === "Feedback") {
              iconName = "ios-mail-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Menu" component={MenuItems} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Feedback" component={FeedBackForm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
