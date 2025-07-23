import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Creator } from '../types';

export const useCreators = (query: string) => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCreators = async () => {
      // Clear results for empty query
      if (!query.trim()) {
        setCreators([]);
        setLoading(false);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        console.log('🔍 Searching for:', query);
        
        const searchTerm = query.trim();
        
        // Primary search: case-insensitive partial match
        let { data, error: searchError } = await supabase
          .from('Creator')
          .select('*')
          .ilike('name', `%${searchTerm}%`)
          .limit(20); // Add reasonable limit

        if (searchError) {
          throw searchError;
        }

        // If no results with ilike, try exact match (case-insensitive)
        if (!data || data.length === 0) {
          console.log('🔄 Trying exact match...');
          const { data: exactData, error: exactError } = await supabase
            .from('Creator')
            .select('*')
            .ilike('name', searchTerm)
            .limit(20);

          if (exactError) throw exactError;
          data = exactData;
        }

        // If still no results, try full-text search if available
        if (!data || data.length === 0) {
          console.log('🔄 Trying text search...');
          const { data: textData, error: textError } = await supabase
            .from('Creator')
            .select('*')
            .textSearch('name', searchTerm)
            .limit(20);

          // Don't throw error here as textSearch might not be configured
          if (!textError && textData) {
            data = textData;
          }
        }

        // Debug: Get sample records if search fails
        if ((!data || data.length === 0) && searchTerm.length >= 2) {
          console.log('🔄 Getting sample records for debugging...');
          const { data: sampleData } = await supabase
            .from('Creator')
            .select('name')
            .limit(5);
          
          console.log('📊 Sample creator names:', sampleData?.map(c => c.name));
        }

        console.log('✅ Supabase response:', data);
        setCreators(data || []);

      } catch (err: any) {
        console.error('❌ Search error:', err);
        setError(err.message || 'Search failed');
        setCreators([]);
      } finally {
        setLoading(false);
      }
    };

    // Debounce the search
    const timeoutId = setTimeout(fetchCreators, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return { creators, loading, error };
};