import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import FavoritesCard from '../components/favorites';
function Favorites() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.header}>Favorites</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.second}>
        <FavoritesCard
          title="Sueda Çiçekli"
          img="https://yt3.ggpht.com/MamZP51gExu-1sJIYcE2kE06487o3nuRxmzX36kc1YPpVxx1ta1aHx4TGKv2qgkQVGEVSt-7qXc=s900-c-k-c0x00ffffff-no-rj"
          date="xx.xx.1999"
          desc="Junior IOS Developer"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#F4F4F6',
  },
  first: {
    flex: 0.17,
    alignContent: 'center',
  },
  second: {
    flex: 0.83,
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    //fontFamily: 'Gilroy-Heavy',
    fontWeight: '900',
    color: '#ec1d23',
    left: 15,
    top: 5,
  },
  line: {
    borderBottomColor: '#DDDDE1',
    borderBottomWidth: 1,
    marginTop: 25,
  },
});

export default Favorites;
