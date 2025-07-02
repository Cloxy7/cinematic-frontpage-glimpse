
import React from 'react';
import { Star, Clock } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  genre: string[];
  language: string;
  duration: string;
}

interface MovieCardProps {
  movie: Movie;
  featured?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, featured = false }) => {
  return (
    <div className="group cursor-pointer">
      <div className={`relative overflow-hidden rounded-lg ${featured ? 'aspect-[3/4]' : 'aspect-[2/3]'} bg-gray-800`}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black bg-opacity-80 text-white px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>{movie.rating}</span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
      
      {/* Movie Info */}
      <div className="mt-4 space-y-2">
        <h3 className="text-white font-semibold text-lg line-clamp-2 group-hover:text-red-400 transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex flex-wrap gap-1">
          {movie.genre.slice(0, 2).map((g, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
              {g}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{movie.language}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{movie.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
