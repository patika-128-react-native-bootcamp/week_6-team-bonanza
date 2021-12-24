import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './Card.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ImageBox = props => {
  const [state, setState] = useState(0);

  const changeLike = () => {
    if (state === 0) {
      setState(1);
    } else {
      setState(0);
    }
  };
  return (
    <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
            uri: props.img,
          }}
        />
        <TouchableOpacity
          style={state === 0 ? styles.unLikeButton : styles.likeButton}
          onPress={() => {
            changeLike();
          }}>
          <Icon
            name="heart"
            size={30}
            style={state === 0 ? styles.unLikeButton : styles.likeButton}
            // eslint-disable-next-line react-native/no-inline-styles
          />
        </TouchableOpacity>
        <View style={styles.cardDetail}>
          <Text style={styles.cardDetailHeader}>{props.title}</Text>
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
