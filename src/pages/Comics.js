import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Card from '../components/card';
function Comics() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.header}>Comics</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.second}>
        <Card
          title="Iron-Man"
          desc="Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk."
          img="https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png"
          date="July 2018"
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
    top: 20,
  },
  line: {
    borderBottomColor: '#DDDDE1',
    borderBottomWidth: 1,
    marginTop: 25,
  },
  explanation: {
    fontSize: 14,
    textAlign: 'left',
    //fontFamily: 'Gilroy-Regular',
    left: 15,
    marginTop: 25,
    marginBottom: 20,
  },
});
export default Comics;
