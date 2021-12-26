import React, {useState, useContext} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Context} from '../../Router';
import styles from './Card.style';

const ImageBox = props => {
  const {dark, favorite, setFavorite} = useContext(Context);
  const [fav, setFav] = useState(0);

  const changeLike = id => {
    if (fav === 0) {
      setFav(1);
      setFavorite([...favorite, {id}]);
    } else {
      const newFav = favorite.filter(val => {
        if (val.id != id) return val;
      });
      setFav(0);
      setFavorite(newFav);
    }
  };
  return (
    <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
      <View style={[styles.card, dark && {backgroundColor: 'black'}]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: props.img,
          }}
        />
        <TouchableOpacity
          style={fav === 0 ? styles.unLikeButton : styles.likeButton}
          onPress={() => {
            changeLike(props.comicId);
          }}>
          <Icon
            name="heart"
            size={30}
            style={fav === 0 ? styles.unLikeButton : styles.likeButton}
            // eslint-disable-next-line react-native/no-inline-styles
          />
        </TouchableOpacity>
        <View style={styles.cardDetail}>
          <Text style={[styles.cardDetailHeader, dark && {color: 'white'}]}>
            {props.title}
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
