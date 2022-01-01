import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = ({search, placeholder}) => {
  const [text, setText] = useState('');

  const onSearch = q => {
    setText(q);
    search(q);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'black'}
        onChangeText={onSearch}
        autoFocus
        style={{backgroundColor: 'white', color: 'black'}}
      />
    </View>
  );
};

export default SearchBar;
