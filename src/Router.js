const hash = 'a24ffde7d50d7764ef14aa0df7efa918';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Comics from './pages/Comics';
import Heros from './pages/Heros';
import Favorites from './pages/Favorites';

const Tab = createBottomTabNavigator();

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Comics" component={Comics} />
        <Tab.Screen name="Heros" component={Heros} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
