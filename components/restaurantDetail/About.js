import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const image = "https://asianfoodnetwork.com/content/dam/afn/global/en/articles/whipping-up-a-thai-mediterranean-storm/Picture3.jpg.transform/desktop-img/img.jpg";
 
const title = "Farmhouse Kitchen Thai";
const description = "Thai Comfort Food $$ ticket 4 star (2913+";


const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={styles.aboutImg}  />
);

const RestaurantTitle = (props) => (
    <Text style={styles.textTitle}>{props.title}</Text>

);

const RestaurantDescription = (props) => (
    <Text style={styles.textDescript} >{props.description}</Text>

);

export default function About() { 
  return (
    <View  >
       <RestaurantImage image={image} />
       <RestaurantTitle title={title} />
       <RestaurantDescription description={description} />
    </View> 
  );
}



const styles = StyleSheet.create ({
    aboutImg: {
        width: '100%',
        height: 180,
    },
    textTitle: {
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,

    },
    textDescript: {
        fontSize: 15.5,
        fontWeight: '400',
        marginTop: 10,
        marginHorizontal: 15,
    },


});