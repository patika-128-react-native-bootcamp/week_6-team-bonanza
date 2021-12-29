import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native';
import FavoritesCard from '../components/favorites';
import {Context} from '../Router';
import getData from '../components/getDatas';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

const hash = '0bec9478434f6ffd8abe344711802636';

function Favorites() {
  const {t} = useTranslation();
  const {dark, favorite, setFavorite} = useContext(Context);
  const renderProducts = ({item}) => {
    // const fetch = async () => {
    //   const tempData = await axios(
    //     `https://gateway.marvel.com:443/v1/public/characters/${item}?ts=1&apikey=0a6e8a03d98494c305b8a004db928590&hash=${hash}`,
    //   );
    //   var likes = tempData.data.data.results;
    // };
    // fetch();
    return (
      <FavoritesCard
        title={item}
        date={item}
        // img={likes.thumbnail.path + '/portrait_xlarge.jpg'}
      />
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, dark && {backgroundColor: 'black'}]}>
      <View style={styles.first}>
        <Text style={styles.header}>{t('favorites')}</Text>
      </View>
      <View style={styles.second}>
        <FlatList data={getData()} renderItem={renderProducts} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: 'white',
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
    fontSize: 30,
    fontWeight: '900',
    color: '#ec1d23',
    left: 15,
    top: 5,
    marginBottom: 20,
  },
  line: {
    borderBottomColor: '#DDDDE1',
    borderBottomWidth: 1,
    marginTop: 25,
  },
});

export default Favorites;
