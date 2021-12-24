import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ComicCard from '../components/card';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
const hash = 'a24ffde7d50d7764ef14aa0df7efa918';

function ComicList() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  console.log(query);
  //API Connection
  useEffect(() => {
    const fetch = async () => {
      const tempData = await axios(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=931517162d96f2a2551ae5f33cd51066&hash=${hash}`,
      );
      //console.log(tempData.data.data.results);
      setItems(tempData.data.data.results);
      setLoading(false);
    };
    fetch();
  }, [query]);

  const renderProducts = ({item}) => (
    <ComicCard
      title={item.name}
      date={item.modified}
      img={item.thumbnail.path + '/portrait_xlarge.jpg'}
      desc={item.description}
    />
  );

  // Screen Display
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.header}>Heros</Text>
        <View style={styles.line} />
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
    backgroundColor: '#F4F4F6',
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
    fontSize: 50,
    //fontFamily: 'Gilroy-Heavy',
    fontWeight: '900',
    color: '#ec1d23',
    left: 15,
    top: 20,
  },
  line: {
    borderBottomColor: '#DDDDE1',
    borderBottomWidth: 1,
    marginTop: 25,
  },
});

export default ComicList;
