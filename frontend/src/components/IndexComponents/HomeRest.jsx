import React from 'react';
import { Link } from 'react-router-dom';

export const HomeRest = () => {
  return (
    <div className="w-full mx-auto xl:px-20 md:px-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        <Link to={'/salons'} className="bg-white cursor-pointer rounded-lg p-4 flex flex-col justify-evenly shadow transform transition-transform duration-300 ease-in hover:scale-105">
          <div className="relative w-full h-48 rounded mb-2">
            <img alt="Book Salon online" fetchpriority="high" decoding="async" data-nimg="fill" className="object-cover"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="100%"
              src="/features/f1.webp"
            />
          </div>
          <h2 className="text-lg font-semibold mb-1">Book Salon online</h2>
          <p className="text-gray-600 mb-2">Explore salons & services, compare prices, select a service, book & get a service In-Salon</p>
        </Link>

        <Link to={'/underconstruction'} className="bg-white cursor-pointer rounded-lg p-4 flex flex-col justify-evenly shadow transform transition-transform duration-300 ease-in hover:scale-105">
          <div className="relative w-full h-48 rounded mb-2">
            <img alt="Book Salon online" fetchpriority="high" decoding="async" data-nimg="fill" className="object-cover"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="100%"
              src="/features/f2.webp"
            />
          </div>
          <h2 className="text-lg font-semibold mb-1">Home Service</h2>
          <p className="text-gray-600 mb-2">Select a stlyist & get the service at the comfort of your home.</p>
        </Link>

        <Link to={'/product-shop'} className="bg-white cursor-pointer rounded-lg p-4 flex flex-col justify-evenly shadow transform transition-transform duration-300 ease-in hover:scale-105">
          <div className="relative w-full h-48 rounded mb-2">
            <img alt="Book Salon online" fetchpriority="high" decoding="async" data-nimg="fill" className="object-cover"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="100%"
              src="/features/f3.webp"
            />
          </div>
          <h2 className="text-lg font-semibold mb-1">Product Shop</h2>
          <p className="text-gray-600 mb-2">We have made it easy for you to choose your favorite beauty product and accessory</p>
        </Link>
      </div>
    </div>
  );
};
