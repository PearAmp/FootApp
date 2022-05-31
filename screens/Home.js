import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <SafeAreaView style={styles.topBar}> 
    <View style={styles.navBar}>
    <HeaderTabs />
    <SearchBar />
    </View>
    <Categories />
    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#eee',
    flex: 1,
 
  },
  navBar: {
    backgroundColor: '#fff',
    padding: 15,

  },

});