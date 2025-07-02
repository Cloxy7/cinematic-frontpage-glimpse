
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Movie {
  id: string;
  title: string;
  description: string | null;
  poster_url: string | null;
  trailer_url: string | null;
  genre: string[];
  language: string;
  duration: number;
  rating: number | null;
  release_date: string | null;
  director: string | null;
  cast: string[] | null;
  price: number;
  available_seats: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      console.log('Fetching movies from Supabase...');
      
      const { data, error } = await supabase
        .from('movies')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching movies:', error);
        throw error;
      }

      console.log('Movies fetched successfully:', data);
      return data as Movie[];
    },
  });
};
