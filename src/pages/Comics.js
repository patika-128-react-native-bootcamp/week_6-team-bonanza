import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

import ComicCard from '../components/card';
import Search from '../components/search';
import {Context} from '../Router';

const hash = 'a24ffde7d50d7764ef14aa0df7efa918';

function ComicList() {
  const {t} = useTranslation();
  const darkContext = useContext(Context);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  //API Connection
  useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        const tempData = await axios(
          `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=931517162d96f2a2551ae5f33cd51066&hash=${hash}`,
        );
        setItems(tempData.data.data.results);
      } else {
        const tempData = await axios(
          `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${query}&ts=1&apikey=931517162d96f2a2551ae5f33cd51066&hash=${hash}`,
        );
        //console.log(tempData.data.data.results);
        setItems(tempData.data.data.results);
      }
    };
    fetch();
  }, [query]);

  const renderProducts = ({item}) => (
    <ComicCard
      title={item.title}
      date={item.modified}
      img={item.thumbnail.path + '/portrait_xlarge.jpg'}
      comicId={item.id}
    />
  );

  // Screen Display
  return (
    <SafeAreaView
      style={[
        styles.container,
        darkContext.dark && {backgroundColor: 'black'},
      ]}>
      <View style={styles.first}>
        <Text style={styles.header}>{t('comics')}</Text>
        <Search
          search={q => setQuery(q)}
          placeholder={t('search_comics_placeholder')}
        />
      </View>
      <View style={styles.second}>
        <FlatList data={items} renderItem={renderProducts} />
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

export default ComicList;
