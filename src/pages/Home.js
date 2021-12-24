import React from 'react';
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.Image}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png',
        }}
      />
    </SafeAreaView>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  Image: {
    width: 290,
    height: 110,
    position: 'absolute',
  },
});
