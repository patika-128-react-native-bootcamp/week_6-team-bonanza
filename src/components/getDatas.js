import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native';
const getData = props => {
  // const clearAllData = () => {
  //   AsyncStorage.getAllKeys()
  //     .then(keys => AsyncStorage.multiRemove(keys))
  //     .then(() => alert('success'));
  // };
  // clearAllData();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getAllKeys();
      global.FavItems = value;
    } catch (e) {
      console.log('Hata ' + e);
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getData();
  }, []);

  console.log(global.FavItems);
  return global.FavItems;
};

export default getData;
