import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function MenuItems() {
  const menuItemsToDisplay = [
    {
      title: "Appetizers",
      data: [
        "Hummus",
        "Moutabal",
        "Falafel",
        "Marinated Olives",
        "Kofta",
        "Eggplant Salad",
      ],
    },
    {
      title: "Main Dishes",
      data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
    },
    {
      title: "Sides",
      data: [
        "Fries",
        "Buttered Rice",
        "Bread Sticks",
        "Pita Pocket",
        "Lentil Soup",
        "Greek Salad",
        "Rice Pilaf",
      ],
    },
    {
      title: "Desserts",
      data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
    },
  ];

  const Item = ({ name }) => (
    <View style={menuStyles.menuItem}>
      <Text style={menuStyles.itemText}>{name}</Text>
    </View>
  );
  const renderItem = ({ item }) => <Item name={item} />;
  const renderSectionHeader = ({ section }) => (
    <Text style={menuStyles.sectionHeader}>{section.title}</Text>
  );

  const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;
  const Saperator = () => <View style={menuStyles.saperator}></View>;
  const Footer = () => (
    <Text style={menuStyles.footerStyle}>
      {"\u00a9"} All rights reserved by Little Lemon,
      <Text style={{ fontWeight: "bold" }}> 2022</Text>
    </Text>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        ListHeaderComponent={Header}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Saperator}
      ></SectionList>
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  sectionHeader: {
    backgroundColor: "#223300",
    padding: 20,
    fontSize: 40,
    color: "#F4CE14",
  },
  headerText: {
    fontSize: 40,
    textAlign: "center",
    alignSelf: "auto",
    color: "white",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
    padding: 20,
  },
  saperator: {
    borderColor: "white",
    borderBottomWidth: 1,
  },
  footerStyle: {
    padding: 10,
    backgroundColor: "#F4CE14",
    textAlign: "center",
  },
});
