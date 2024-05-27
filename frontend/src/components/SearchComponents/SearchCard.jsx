import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const locations = [
  'Guwahati',
  'Mumbai',
  'Delhi',
  'Banglore',
  'Hydrabad',
  'Pune',
  'Ahmedabad',
  'Kolkata',
  'Chhattisgarh'
];


export function SearchCard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        const filteredResults = locations.filter(location =>
          location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  };

  const handleOptionClick = location => {
    setSearchTerm(location);
    setShowDropdown(false);
    setActiveOptionIndex(-1);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm && category) {
      navigate(`/salons?location=${searchTerm}&category=${category}`);
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleKeyDown = event => {
    if (showDropdown) {
      if (event.key === 'ArrowDown') {
        setActiveOptionIndex((prevIndex) => (prevIndex + 1) % searchResults.length);
      } else if (event.key === 'ArrowUp') {
        setActiveOptionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1));
      } else if (event.key === 'Enter') {
        if (activeOptionIndex >= 0) {
          handleOptionClick(searchResults[activeOptionIndex]);
        }
      }
    }
  };

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className="w-[35rem] py-20 flex flex-col justify-center items-center border-[3px] border-black rounded-xl">
        <h2 className="text-emerald-400 text-4xl font-semibold mb-12">
          Find Your Perfect Salon
        </h2>
        <form className="max-w-lg" onSubmit={e => e.preventDefault()}>
          <div className="mb-4 relative" ref={dropdownRef}>
            <label className='font-bold'>Select Location</label>
            <input
              className="shadow appearance-none border rounded w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Search Location"
              value={searchTerm}
              onChange={handleInputChange}
              onClick={() => setShowDropdown(true)}
              onKeyDown={handleKeyDown}
            />
            {showDropdown && searchResults.length > 0 && (
              <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-[20rem]">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer py-1 px-3 ${index === activeOptionIndex ? 'bg-gray-100' : ''}`}
                    onClick={() => handleOptionClick(result)}
                    onMouseEnter={() => setActiveOptionIndex(index)}
                  >
                    {result}
                  </div>
                ))}
              </div>
            )}
          </div>
          <label className='font-bold'>Select Category</label>
          <div className="mb-4">
            <select
              className="shadow appearance-none border rounded w-[20rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              required
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="book-salon">Book Salon</option>
              <option value="home-service">Home Service</option>
            </select>
          </div>
          <button
            className="bg-emerald-500 text-center hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline block w-[20rem]"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
