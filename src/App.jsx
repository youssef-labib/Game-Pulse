import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import Navbar from './layouts/navbar';
import ErrorPage from './pages/error/error';
import ServicesPage from './pages/services/services';
import GameDetails from './pages/games/games';

const App = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </>
  );
};

export default App;