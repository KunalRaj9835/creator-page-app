import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Creator } from '../types';

interface Props {
  creator: Creator;
  onSelect: (creator: Creator) => void;
}

const CreatorCard: React.FC<Props> = ({ creator, onSelect }) => (
  <TouchableOpacity onPress={() => onSelect(creator)} style={styles.item}>
    <Image source={{ uri: creator.image }} style={styles.thumb} />
    <Text style={styles.itemName}>{creator.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CreatorCard;
