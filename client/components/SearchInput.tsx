import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => (
  <TextInput
    style={styles.input}
    placeholder="Search Creator..."
    value={value}
    onChangeText={onChange}
  />
);

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default SearchInput;
