import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Context} from '../Router';

function Home({navigation}) {
  const darkContext = useContext(Context);
  return (
    <SafeAreaView
      style={[
        styles.container,
        darkContext.dark && {backgroundColor: 'black'},
      ]}>
      <View style={styles.menu_container}>
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Animated.View style={[styles.button, styles.menu]}>
            <Icon name="menu" size={35} color="grey" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.image_container}>
        <Image
          style={styles.Image}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png',
          }}
        />
      </View>
    </SafeAreaView>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menu_container: {
    alignItems: 'flex-start',
    flex: 1,
  },
  image_container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 290,
    height: 110,
    position: 'absolute',
  },

  button: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
