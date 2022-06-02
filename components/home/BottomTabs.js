import { View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from 'react-native';

export default function BottomTabs() {
  return (
    <View style={styles.container}>
    <Icon icon="home" text="Home" />
    <Icon icon="search" text="Browse" />
    <Icon icon="shopping-bag" text="Grocery" />
    <Icon icon="receipt" text="Orders" />
    <Icon icon="user" text="Account" />
      

    </View>
  );
}

const Icon = (props) => (
   <TouchableOpacity>
     <View style={styles.itemFont}>
        <FontAwesome5 name={props.icon} size={25} style={styles.imageIcon} />
        <Text>{props.text}</Text>
   </View>
   </TouchableOpacity>

);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
    },

    imageIcon: {
        marginBottom: 3,
        alignSelf: 'center',

    },
    itemFont: {

    },

});