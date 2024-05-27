import React, { useEffect, useState } from 'react';
import './App.css';
import { Layout } from './components/StructureComponents/Layout';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserContextProvider } from './components/StructureComponents/UserContext';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingBar from 'react-top-loading-bar';
import { IndexPage } from './pages/IndexPage';
import { LoginPage } from './pages/LoginPage'; 
import { RegisterPage } from './pages/RegisterPage'; 
import { ProfilePage } from './pages/ProfilePage';
import { BookingsPage } from './pages/BookingsPage';
import { FilterPage } from './pages/FilterPage';
import { SalonPage } from './pages/SalonPage';
import { SearchCard } from './components/SearchComponents/SearchCard';
import { ProductPage } from './pages/ProductPage';
import { BlogPage } from './pages/BlogPage';
import { BlogsDetailPage } from './pages/BlogDetailsPage';
import { SupportPage } from './pages/SupportPage';
import { SalonService } from './components/SalonComponents/SalonService';
import { SalonReview } from './components/SalonComponents/SalonReview';
import { SalonPhotos } from './components/SalonComponents/SalonPhotos';
import { UnderConstruction } from './pages/UnderConstruction';



axios.defaults.baseURL = 'http://localhost:3000/api/v1';

function App() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(30);
    }, 200);
    setTimeout(() => {
      setProgress(70);
    }, 300);
    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [location]);

  return (
    <UserContextProvider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoadingBar
              color='#f11946'
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
            <Routes location={location}>
              <Route path='/' element={<Layout />}>
                <Route index element={<IndexPage />} />
                <Route path='/underconstruction' element={<UnderConstruction />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/account' element={<ProfilePage />} />
                <Route path='/account/bookings' element={<BookingsPage />} />
                <Route path='/salons' element={<FilterPage />} />
                <Route path='/salons/:id' element={<SalonPage />} />
                <Route path='/salons/:id/services' element={<SalonService />} />
                <Route path='/salons/:id/reviews' element={<SalonReview />} />
                <Route path='/salons/:id/photos' element={<SalonPhotos />} />
                <Route path='/search' element={<SearchCard />} />
                <Route path='/product-shop' element={<ProductPage />} />
                <Route path='/blogs' element={<BlogPage />} />
                <Route path='/blogs/:id' element={<BlogsDetailPage />} />
                <Route path='/support' element={<SupportPage />} />
              </Route>
            </Routes>
          </motion.div>
        </AnimatePresence>
      </React.Suspense>
    </UserContextProvider>
  )
}

export default App;
