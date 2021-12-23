const hash = 'a24ffde7d50d7764ef14aa0df7efa918';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        //Api Connection
        `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=931517162d96f2a2551ae5f33cd51066&hash=${hash}`,
      );
      console.log(result.data.data.results); // Get comics
      setItems(result.data.data.results); // Get comics list
      setLoading(false); // Loading status
    };
    fetch();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Marvel Api Connection</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
