import React from 'react';
import { Link } from 'react-router-dom';

const locations = [
  { name: 'Guwahati', url: '/salons?location=Guwahati&category=book-salon' },
  { name: 'Mumbai', url: '/salons?location=Mumbai&category=book-salon' },
  { name: 'Delhi', url: '/salons?location=Delhi&category=book-salon' },
  { name: 'Banglore', url: '/salons?location=Banglore&category=book-salon' },
  { name: 'Hydrabad', url: '/salons?location=Hydrabad&category=book-salon' },
  { name: 'Pune', url: '/salons?location=Pune&category=book-salon' },
  { name: 'Ahmedabad', url: '/salons?location=Ahmedabad&category=book-salon' },
  { name: 'Kolkata', url: '/salons?location=Kolkata&category=book-salon' },
  { name: 'Chhattisgarh', url: '/salons?location=Chhattisgarh&category=book-salon' }
];

export default function PopularLocations() {
  return (
    <div className="mx-auto pt-5">
      <div className="text-center">
        <h2 className="pt-6 sm:pt-10 text-md font-extrabold md:text-2xl lg:text-4xl text-neutral-800 capitalize">
          Popular Locations In India
        </h2>
        <div className="mt-10 text-sm sm:text-lg m-auto flex items-center justify-center">
          <p>
            From beauty to health treatment through different means, Salonsia
            covers it all. It is the most promising part of wellness in the
            world. The place that leaves you feeling great.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 items-center justify-between m-auto">
        {locations.map((location, index) => (
          <Link
            key={index}
            to={location.url}
            className="mt-10 justify-between flex items-center text-md md:text-xl font-medium px-14 rounded-xl py-6 text-center bg-neutral-100 cursor-pointer"
          >
            {location.name} Salons{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
};
