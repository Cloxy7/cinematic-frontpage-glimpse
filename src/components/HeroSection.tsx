
import React from 'react';
import { Play, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to <span className="text-red-500">BookMyShow</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              Discover and book tickets for the latest movies, events, and entertainment experiences near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Book Tickets Now
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Browse Movies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
