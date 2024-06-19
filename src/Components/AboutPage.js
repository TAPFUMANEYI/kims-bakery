import React from 'react';
import './AboutPage.css';
import background from '../images/cereals-563796_1280.jpg';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="hero">
        <img src={background} alt="Bakery" className="hero-image" 
         b   />
        <div className="hero-text">
          <h1>About Us

          </h1>
        </div>
      </div>
      <div className="about-content">
        <h2>Welcome to Kim's Patisserie

        </h2>
        <p className="lead">Where the art of baking meets passion and tradition!

        </p>
        <p>Founded in 1990 by Kimberly Tapfumaneyi,
           a pastry chef who trained in the renowned bakeries of Paris, our family-owned bakery has become a cherished part of the community.
            Kim's dream was to bring the exquisite flavors of French patisserie to our town, and her legacy continues with every delightful creation we offer.</p>
        <p>Our mission is to share the joy of exceptional baking, using only the finest,
           locally-sourced ingredients to craft mouthwatering treats that bring a smile to every face. 
           At Kim's Patisserie, we value quality, integrity, and customer satisfaction. 
           Join us for a delightful experience where every pastry tells a story of love, dedication, and culinary artistry.</p>
      </div>
    </div>
  );
};

export default AboutPage;
