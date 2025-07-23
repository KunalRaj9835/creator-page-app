import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
import CreatorCard from '@/components/CreatorCard';
import CreatorDetail from '@/components/CreatorDetail';
import SearchInput from '@/components/SearchInput';
import { useCreators } from '@/hooks/useCreators';
import { Creator } from '@/types';

export default function Home() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Creator | null>(null);
  
  // Destructure the hook return value properly
  const { creators, loading, error } = useCreators(query);

  if (selected) {
    return <CreatorDetail creator={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <View style={styles.container}>
      <SearchInput value={query} onChange={setQuery} />
      
      {/* Show loading indicator */}
      {loading && (
        <View style={styles.centered}>
          <ActivityIndicator size="large" />
          <Text>Searching...</Text>
        </View>
      )}
      
      {/* Show error message */}
      {error && (
        <View style={styles.centered}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      )}
      
      {/* Show results */}
      {!loading && !error && (
        <FlatList
          data={creators}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <CreatorCard creator={item} onSelect={setSelected} />
          )}
          ListEmptyComponent={
            query.trim() ? (
              <View style={styles.centered}>
                <Text>No creators found for "{query}"</Text>
              </View>
            ) : (
              <View style={styles.centered}>
                <Text>Start typing to search for creators</Text>
              </View>
            )
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});