import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={styles.itemIcons}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
            <View style={styles.contentSearch}>
            <AntDesign name="clockcircle" size={11} style={styles.iconsClock} />
                <Text>Search</Text>
            </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 15,
    flexDirection: "row",
  },

  itemIcons: {
    marginLeft: 10,
  },

  contentSearch: {
      flexDirection: 'row',
      marginRight: 8,
      backgroundColor: '#fff',
      padding: 9,
      borderRadius: 30,
      alignItems: 'center'

  },

  iconsClock: {
      marginRight: 6,
  },
});
