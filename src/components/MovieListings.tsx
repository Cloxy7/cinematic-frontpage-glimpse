
import React from 'react';
import MovieCard from './MovieCard';

const MovieListings = () => {
  const movies = [
    {
      id: 4,
      title: "Inception",
      poster: "https://images.unsplash.com/photo-1489599363715-b6b5b5d0f9e4?w=300&h=450&fit=crop",
      rating: 8.8,
      genre: ["Action", "Sci-Fi", "Thriller"],
      language: "English",
      duration: "148 min"
    },
    {
      id: 5,
      title: "Interstellar",
      poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=450&fit=crop",
      rating: 8.6,
      genre: ["Adventure", "Drama", "Sci-Fi"],
      language: "English",
      duration: "169 min"
    },
    {
      id: 6,
      title: "The Matrix",
      poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop",
      rating: 8.7,
      genre: ["Action", "Sci-Fi"],
      language: "English",
      duration: "136 min"
    },
    {
      id: 7,
      title: "Pulp Fiction",
      poster: "https://images.unsplash.com/photo-1489599363715-b6b5b5d0f9e4?w=300&h=450&fit=crop",
      rating: 8.9,
      genre: ["Crime", "Drama"],
      language: "English",
      duration: "154 min"
    },
    {
      id: 8,
      title: "The Godfather",
      poster: "https://images.unsplash.com/photo-1509347528160-9329f9dd50a5?w=300&h=450&fit=crop",
      rating: 9.2,
      genre: ["Crime", "Drama"],
      language: "English",
      duration: "175 min"
    },
    {
      id: 9,
      title: "Forrest Gump",
      poster: "https://images.unsplash.com/photo-1489599363715-b6b5b5d0f9e4?w=300&h=450&fit=crop",
      rating: 8.8,
      genre: ["Drama", "Romance"],
      language: "English",
      duration: "142 min"
    }
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Now Playing</h2>
          <div className="flex gap-4">
            <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500">
              <option>All Languages</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
            </select>
            <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500">
              <option>All Genres</option>
              <option>Action</option>
              <option>Drama</option>
              <option>Comedy</option>
              <option>Thriller</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieListings;
