const hash = 'a24ffde7d50d7764ef14aa0df7efa918';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

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
          tabBarStyle: {
            position: 'absolute',
            alignItems: 'center',
            height: 90,
            left: 20,
            right: 20,
            bottom: 25,
            elevation: 0,
            borderRadius: 15,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="home"
                size={focused ? 40 : 30}
                // eslint-disable-next-line react-native/no-inline-styles
                style={focused ? styles.onFocus : styles.offFocus}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Comics"
          component={Comics}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="book-open"
                size={focused ? 40 : 30}
                style={focused ? styles.onFocus : styles.offFocus}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Heros"
          component={Heros}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="spider-web"
                size={focused ? 40 : 30}
                style={focused ? styles.onFocus : styles.offFocus}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                size={focused ? 40 : 30}
                name="heart-multiple"
                style={focused ? styles.onFocus : styles.offFocus}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: 'yellow',
  },
  onFocus: {
    color: '#ec1d23',
    size: 40,
  },
  offFocus: {
    color: '#808080',
  },
});
