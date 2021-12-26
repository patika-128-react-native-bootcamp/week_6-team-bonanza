import 'react-native-gesture-handler';
import React, {createContext, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet, Appearance} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home';
import Comics from './pages/Comics';
import Heros from './pages/Heros';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const Context = createContext();

function Tabs() {
  const {t} = useTranslation();
  const darkContext = useContext(Context);
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
          backgroundColor: darkContext.dark ? 'black' : 'white',
        },
        tabBarActiveTintColor: darkContext.dark ? 'white' : 'black',
      }}>
      <Tab.Screen
        name={t('home')}
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
        name={t('comics')}
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
        name={t('heros')}
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
        name={t('favorites')}
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
  );
}

export default function App() {
  const {t} = useTranslation();
  const init = Appearance.getColorScheme() == 'dark' ? true : false;
  const [dark, setDark] = useState(init);
  const [favorite, setFavorite] = useState([]);
  Appearance.addChangeListener(scheme => {
    if (scheme.colorScheme == 'dark') setDark(true);
    else setDark(false);
  });
  return (
    <Context.Provider value={{dark, setDark, favorite, setFavorite}}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerStyle: {
              backgroundColor: dark ? 'black' : 'white',
              width: 200,
            },
          }}>
          <Drawer.Screen
            name={t('overview')}
            component={Tabs}
            options={{
              headerShown: false,
              drawerActiveTintColor: dark ? 'white' : 'black',
              drawerInactiveTintColor: dark ? 'white' : 'black',
            }}
          />
          <Drawer.Screen
            name={t('settings')}
            component={Settings}
            options={{
              headerShown: false,
              drawerActiveTintColor: dark ? 'white' : 'black',
              drawerInactiveTintColor: dark ? 'white' : 'black',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}
const styles = StyleSheet.create({
  onFocus: {
    color: '#ec1d23',
  },
  offFocus: {
    color: '#808080',
  },
});
