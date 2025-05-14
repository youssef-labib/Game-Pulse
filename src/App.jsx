import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import Navbar from './layouts/navbar';
import ErrorPage from './pages/error/error';
import ServicesPage from './pages/services/services';

const App = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

    </>
  );
};

export default App;