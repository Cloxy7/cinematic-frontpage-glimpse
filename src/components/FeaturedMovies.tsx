
import React from 'react';
import MovieCard from './MovieCard';

const FeaturedMovies = () => {
  const featuredMovies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop",
      rating: 8.4,
      genre: ["Action", "Adventure", "Drama"],
      language: "English",
      duration: "181 min"
    },
    {
      id: 2,
      title: "Spider-Man: No Way Home",
      poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop",
      rating: 8.2,
      genre: ["Action", "Adventure", "Sci-Fi"],
      language: "English",
      duration: "148 min"
    },
    {
      id: 3,
      title: "The Dark Knight",
      poster: "https://images.unsplash.com/photo-1509347528160-9329f9dd50a5?w=300&h=450&fit=crop",
      rating: 9.0,
      genre: ["Action", "Crime", "Drama"],
      language: "English",
      duration: "152 min"
    }
  ];

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
