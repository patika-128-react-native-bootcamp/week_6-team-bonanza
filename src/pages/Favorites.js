import React, {useContext} from 'react';
import {SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native';
import FavoritesCard from '../components/favorites';
import {Context} from '../Router';
import {useTranslation} from 'react-i18next';

function Favorites() {
  const {t} = useTranslation();
  const {dark, favorite, setFavorite} = useContext(Context);

  const renderFavorites = ({item}) => (
    <FavoritesCard title={item.id} date={item.id} desc={item.id} />
  );

  return (
    <SafeAreaView
      style={[styles.container, dark && {backgroundColor: 'black'}]}>
      <View style={styles.second}>
        <FlatList data={favorite} renderItem={renderFavorites} />
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
