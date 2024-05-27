import React from 'react';

export function SearchComponent() {
  return (
    <div className="mt-6 mx-auto sm:mt-8 w-[90%] max-w-lg py-3 px-4 rounded-md text-lg md:text-xl shadow-lg transition duration-300">
      <div
        className="border-[2px] w-full md:w-auto py-2 rounded-md shadow-sm bg-white hover:shadow-md transition border-neutral-600 cursor-pointer text-neutral-500"
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium px-6">
            <span className="text-lg text-rose-600">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
              </svg>
            </span>
            <div>
              <p>Assam</p>
            </div>
          </div>
          <div className="hidden sm:block text-sm font-medium px-6 border-x-[2px] border-neutral-200 flex-1 text-left whitespace-nowrap">Search Location</div>
          <div className="text-sm pl-6 pr-2 flex flex-row items-center gap-3">
            <div className="p-2 bg-neutral-100 rounded-md text-black">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
