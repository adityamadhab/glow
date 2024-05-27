import React from 'react';

export const SalonsCard = ({ name, rating, address, imageSrc }) => {
  return (
    <div className="bg-white cursor-pointer rounded-lg p-4 flex flex-col justify-evenly shadow transform transition-transform duration-300 ease-in hover:scale-105">
      <div className="relative w-full h-48 rounded mb-2">
        <img
          alt={name}
          src={imageSrc}
          className="object-cover rounded-md"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent'
          }}
        />
      </div>
      <div className="font-semibold mb-2 gap-2 flex items-center justify-between">
        <h2 className="text-base text-neutral-900">{name}</h2>
        <span className="flex gap-1 font-medium items-center text-xs text-white bg-neutral-900 p-2 rounded-sm">
          {rating}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </span>
      </div>
      <div className="font-normal mb-1 flex items-center gap-2">
        <p className="text-gray-600 text-sm mb-2">{address}</p>
      </div>
    </div>
  );
};
