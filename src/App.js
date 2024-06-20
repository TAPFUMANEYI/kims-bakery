import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Components/AboutPage';
import MenuPage from './Components/MenuPage';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import ContactPage from './Components/ContactPage';
import Values from './Pages/Values'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Navigation />
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={
              <>
              <AboutPage />
              <Values/>
              </>
              } />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

  export default App
    






