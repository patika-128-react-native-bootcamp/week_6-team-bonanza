import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './FavoritesCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ImageBox = props => {
  const [header, setHeader] = useState();
  return (
    <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
            uri: props.img,
          }}
        />
        <View style={styles.cardDetail}>
          <Text style={styles.cardDetailHeader}>
            {props.title !== null ? props.title : props.name}
          </Text>
          <Text style={styles.cardDetailExplanation}>{props.date}</Text>
          <Text numberOfLines={6} style={styles.cardDetailExplanation}>
            {props.desc}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ImageBox;
