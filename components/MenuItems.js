import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function MenuItems() {
  const menuItemsToDisplay = [
    {
      title: "Appetizers",
      data: [
        { name: "Hummus", price: "$5.00" },
        { name: "Moutabal", price: "$5.00" },
        { name: "Falafel", price: "$7.50" },
        { name: "Marinated Olives", price: "$5.00" },
        { name: "Kofta", price: "$5.00" },
        { name: "Eggplant Salad", price: "$8.50" },
      ],
    },
    {
      title: "Main Dishes",
      data: [
        { name: "Lentil Burger", price: "$10.00" },
        { name: "Smoked Salmon", price: "$14.00" },
        { name: "Kofta Burger", price: "$11.00" },
        { name: "Turkish Kebab", price: "$15.50" },
      ],
    },
    {
      title: "Sides",
      data: [
        { name: "Fries", price: "$3.00", id: "11K" },
        { name: "Buttered Rice", price: "$3.00" },
        { name: "Bread Sticks", price: "$3.00" },
        { name: "Pita Pocket", price: "$3.00" },
        { name: "Lentil Soup", price: "$3.75" },
        { name: "Greek Salad", price: "$6.00" },
        { name: "Rice Pilaf", price: "$4.00" },
      ],
    },
    {
      title: "Desserts",
      data: [
        { name: "Baklava", price: "$3.00" },
        { name: "Tartufo", price: "$3.00" },
        { name: "Tiramisu", price: "$5.00" },
        { name: "Panna Cotta", price: "$5.00" },
      ],
    },
  ];

  const MenuSection = ({ item }) => (
    <View style={menuStyles.menuItem}>
      <Text style={menuStyles.itemText}>{item.name}</Text>
      <Text style={menuStyles.itemText}>{item.price}</Text>
    </View>
  );
  const renderItem = ({ item }) => <MenuSection item={item} />;
  const renderSectionHeader = ({ section }) => (
    <View>
      <Text style={menuStyles.sectionHeader}>{section.title}</Text>
    </View>
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
    flex: 0.9,
  },
  sectionHeader: {
    backgroundColor: "#223300",
    padding: 20,
    fontSize: 40,
    color: "#F4CE14",
  },
  headerText: {
    padding: 30,
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
