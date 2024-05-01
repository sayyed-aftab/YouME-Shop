import React from 'react';
import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Products from './components/pages/Products';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />



      </Routes>
    </BrowserRouter>
  );
};

export default App;
