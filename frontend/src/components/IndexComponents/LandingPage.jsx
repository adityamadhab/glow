import React from 'react';
import { SearchComponent } from './SearchComponent';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="relative bg-cover bg-center overflow-hidden rounded-2xl" style={{ backgroundImage: 'url("/landing.png")', minHeight: '90vh' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto p-4 text-white text-center relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 md:mb-6">Elevate Your Beauty Experience</h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 md:mb-6">Book Your Glow</h1>
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-4 md:mb-6">
            <Link to={'/search'}>
              <SearchComponent />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
}

