import React, {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Switch,
  View,
} from 'react-native';
import {Context} from '../Router';
import SelectDropdown from 'react-native-select-dropdown';
import {useTranslation} from 'react-i18next';

function Settings() {
  const {t, i18n} = useTranslation();
  const {dark, setDark, language, setLanguage} = useContext(Context);
  const languages = ['English', 'Turkish'];
  return (
    <SafeAreaView style={[styles.container, dark && styles.container_black]}>
      <View style={styles.darkmode_container}>
        <Text style={[styles.text, dark && styles.text_black]}>
          {t('dark_mode')}
        </Text>
        <Switch
          value={dark}
          onValueChange={val => {
            setDark(val);
          }}
        />
      </View>
      <View style={styles.darkmode_container}>
        <Text style={[styles.text, dark && styles.text_black]}>
          {t('language')}
        </Text>
        <SelectDropdown
          data={languages}
          onSelect={(selectedItem, index) => {
            if (selectedItem === 'English') i18n.changeLanguage('en');
            else i18n.changeLanguage('tr');
          }}
          buttonStyle={[
            {
              borderRadius: 10,
              backgroundColor: 'white',
              width: 100,
              borderWidth: 1,
              borderColor: dark ? 'white' : 'black',
            },
            dark && {backgroundColor: 'black'},
          ]}
          buttonTextStyle={[
            {color: 'black', fontSize: 15},
            dark && {color: 'white'},
          ]}
          dropdownStyle={
            dark ? {backgroundColor: 'black'} : {backgroundColor: 'white'}
          }
          rowTextStyle={[
            {color: 'black', fontSize: 15},
            dark && {color: 'white'},
          ]}
          defaultValue={i18n.language === 'en' ? 'English' : 'Turkish'}
        />
      </View>
    </SafeAreaView>
  );
}
export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container_black: {
    backgroundColor: 'black',
  },
  darkmode_container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  text_black: {
    color: 'white',
  },
});
