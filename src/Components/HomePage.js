// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to Our Bakery</h1>
        <p>Delicious treats baked fresh daily.</p>
      </div>
      <div className="image-container">
        <img src="src/images/cake-3744058_1280.jpg" alt="Bakery" />
      </div>
    </div>
  );
};

export default Home;


