import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft-Drink",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast-Food",
  },
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft-Drink",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast-Food",
  },
  
];

export default function Categories() {
  return (
    <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* Loop items */}
      {items.map((item, index) => (
 
      <View key={index} style={styles.contentItems}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.contentText}>{item.text}</Text>
      </View>

      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingLeft: 20,

  },
  itemImage: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  contentText: {
    fontSize: 13,
    fontWeight: "900",
  },
  contentItems: {
    alignItems: "center",
    marginRight: 30,
  },
});
