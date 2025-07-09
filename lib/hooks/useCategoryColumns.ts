import { useState, useEffect } from 'react';
import type { CategoryGroup, CategoryColumnsResponse } from '@/app/api/category-columns/route';

interface UseCategoryColumnsReturn {
  data: CategoryGroup[] | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useCategoryColumns = (): UseCategoryColumnsReturn => {
  const [data, setData] = useState<CategoryGroup[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/category-columns', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Enable caching
        cache: 'force-cache',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: CategoryColumnsResponse = await response.json();

      if (!result.success) {
        throw new Error('Failed to fetch data');
      }

      setData(result.data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Error fetching category columns:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

// Helper hook to get specific group data
export const useCategoryGroup = (groupId: string) => {
  const { data, loading, error, refetch } = useCategoryColumns();
  
  const groupData = data?.find(group => group.id === groupId) || null;
  
  return {
    groupData,
    loading,
    error,
    refetch,
  };
};
