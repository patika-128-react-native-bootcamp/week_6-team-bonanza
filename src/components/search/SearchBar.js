import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = ({search}) => {
  const [text, setText] = useState('');

  const onSearch = q => {
    setText(q);
    search(q);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Comics.."
        onChangeText={onSearch}
        autoFocus
      />
    </View>
  );
};

export default SearchBar;
