import { useEffect, useState } from "react";
import { FlatList, Text, SafeAreaView, View, StyleSheet } from "react-native";
import menuiItems from "./menuItems.json";

const menu = menuiItems.menu;

export default App = () => {
  // const [myJson, setMyJson] = useState([]);
  // const menuItems = () => {

  // setMyJson(menu);
  // };

  // useEffect(() => {
  //   menu();
  // }, []);

  const Item = (props) => (
    <View style={menuStyles.menuContainer}>
      <Text style={menuStyles.menuText}>{props.title}</Text>
      <Text style={menuStyles.menuText}>${props.price}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} price={item.price} />
  );

  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(menu) => menu.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: "#F4CE14",
    fontSize: 30,
    textAlign: "center",
  },
  menuContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#495E57",
  },
  menuText: {
    color: "#F4CE14",
    fontSize: 22,
  },
});
