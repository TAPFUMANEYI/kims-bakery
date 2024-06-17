import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
import Logo from '../images/baker-3220751_1280__1_-removebg-preview.png'

const Navigation = () => {
  return (
    <nav className="navbar">
    <div>
    <img className='logo' src={Logo} alt='logo'/>
  
      <h2>Kim's Patisserie</h2>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      </ul>
    </nav>
    
  );
};

export default Navigation;

