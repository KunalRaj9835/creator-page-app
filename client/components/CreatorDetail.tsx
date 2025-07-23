import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, Linking, StyleSheet } from 'react-native';
import { Creator } from '../types';

interface Props {
  creator: Creator;
  onBack: () => void;
}

const CreatorDetail: React.FC<Props> = ({ creator, onBack }) => {
  const handleLink = async (url: string) => {
    try {
      if (url && url.trim()) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Social media link not available');
      }
    } catch {
      Alert.alert('Error', 'Could not open link');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: creator.image }} style={styles.image} />
      <Text style={styles.name}>{creator.name}</Text>
      <Text style={styles.subtitle}>{creator.category} | {creator.followers}</Text>
      <Text style={styles.bio}>{creator.bio}</Text>

      {creator.social_instagram && (
        <TouchableOpacity onPress={() => handleLink(creator.social_instagram ??'')}>
          <Text style={styles.link}>Instagram</Text>
        </TouchableOpacity>
      )}
      {creator.social_youtube && (
        <TouchableOpacity onPress={() => handleLink(creator.social_youtube ?? '')}>
          <Text style={styles.link}>YouTube</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40, flex: 1 },
  image: { width: 100, height: 100, borderRadius: 50, alignSelf: 'center' },
  name: { fontSize: 20, fontWeight: 'bold', marginTop: 10, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 5 },
  bio: { fontSize: 14, marginVertical: 10, textAlign: 'center', paddingHorizontal: 10 },
  link: { color: 'blue', textDecorationLine: 'underline', textAlign: 'center', fontSize: 16 },
  back: { marginTop: 20, color: 'tomato', fontSize: 16, fontWeight: '500' },
});

export default CreatorDetail;
