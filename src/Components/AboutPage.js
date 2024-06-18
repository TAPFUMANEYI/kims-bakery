// src/pages/AboutPage.js
import React from 'react';
import './AboutPage.css';
import about from '../images/cake-1850011_1920.jpg'
const AboutPage = () => {
  return (
    < div className='about'>
    <div className='text'>
      <h1> About Us</h1>
      <p>  Kim's Patisserie has been serving the community with delightful pastries since 1990. Our mission is to bring joy through our delicious baked goods.</p>
    </div>
    <div className='image'>
      <img src={about} alt='bakery'/>
    </div>
    </div>
  );
};

export default AboutPage;
