import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

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
];

export default function Categories() {
  return (
    <ScrollView horizontal>
    <View style={styles.contentItems}>
    <Image source={items[0].image} style={styles.itemImage} /> 
      <Text style={styles.contentText} >{items[0].text}</Text>
    </View>
    {/* items2 */}
    <View style={styles.contentItems}>
    <Image source={items[1].image} style={styles.itemImage} /> 
      <Text style={styles.contentText} >{items[1].text}</Text>
    </View>
    {/* items3 */}
    <View style={styles.contentItems}>
    <Image source={items[2].image} style={styles.itemImage} /> 
      <Text style={styles.contentText} >{items[2].text}</Text>
    </View>
    {/* items4 */}
    <View style={styles.contentItems}>
    <Image source={items[3].image} style={styles.itemImage} /> 
      <Text style={styles.contentText} >{items[3].text}</Text>
    </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    itemImage: {
        width: 50,
        height: 40,
        resizeMode: 'contain', 
    },
    contentText: {
        fontSize: 13,
        fontWeight: '900',

    },
    contentItems: {
        alignItems: 'center',
        marginRight: 30,
    },


});