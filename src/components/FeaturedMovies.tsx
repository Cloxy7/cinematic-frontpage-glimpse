
import React from 'react';
import { useMovies } from '@/hooks/useMovies';
import MovieCard from './MovieCard';

const FeaturedMovies = () => {
  const { data: movies, isLoading, error } = useMovies();

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Movies</h2>
          <p className="text-red-400">Error loading movies. Please try again later.</p>
        </div>
      </section>
    );
  }

  const featuredMovies = movies?.slice(0, 3) || [];

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Movies</h2>
          <button className="text-red-500 hover:text-red-400 font-semibold transition-colors">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovies;
