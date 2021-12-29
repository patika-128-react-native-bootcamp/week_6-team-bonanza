import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

import ComicCard from '../components/card';
import Search from '../components/search';
import {Context} from '../Router';

const hash = '0bec9478434f6ffd8abe344711802636';

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
          `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=0a6e8a03d98494c305b8a004db928590&hash=${hash}`,
        );
        setItems(tempData.data.data.results);
      } else {
        const tempData = await axios(
          `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${query}&ts=1&apikey=0a6e8a03d98494c305b8a004db928590&hash=${hash}`,
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
      id={item.id}
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
