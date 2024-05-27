import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../StructureComponents/UserContext';

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user, setUser, clearUser } = useContext(UserContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    } 
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    try {
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Error parsing stored user data:', error);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center" onClick={toggleDropdown}>
        <div className="flex gap-3 border rounded-full py-2 px-4 border-gray-300 shadow-md hover:bg-gray-100 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
          {!!user && (
            <div>
              Hi, {user.name.split(' ')[0]}
            </div>
          )}
        </div>
      </div>

      {
        !!user ? (
          isOpen && (
            <div className="absolute top-12 right-0 mt-2 bg-white border rounded-md shadow-md z-50">
              <ul className="py-2">
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100"><Link to={'/account'}>Account</Link></li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={async ()=> {
                  await clearUser();
                  await localStorage.removeItem('token');
                  navigate('/');
                }}>Logout</li>
              </ul>
            </div>
          )
        ) : (
          isOpen && (
            <div className="absolute top-12 right-0 mt-2 bg-white border rounded-md shadow-md">
              <ul className="py-2">
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100"><Link to={'/login'}>Login</Link></li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-100"><Link to={'/register'}>Register</Link></li>
              </ul>
            </div>
          )
        )
      }

    </div>
  );
};

