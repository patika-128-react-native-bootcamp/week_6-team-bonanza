import React, {useState, useContext} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './FavoritesCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Context} from '../../Router';

const ImageBox = props => {
  const {dark, favorite, setFavorite} = useContext(Context);
  return (
    <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
      <View style={[styles.card, dark && {backgroundColor: 'black'}]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: props.img,
          }}
        />
        <View style={styles.cardDetail}>
          <Text style={[styles.cardDetailHeader, dark && {color: 'white'}]}>
            {props.title !== null ? props.title : props.name}
          </Text>
          <Text
            style={[styles.cardDetailExplanation, dark && {color: 'white'}]}>
            {props.date}
          </Text>
          <Text
            numberOfLines={6}
            style={[styles.cardDetailExplanation, dark && {color: 'white'}]}>
            {props.desc}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ImageBox;
