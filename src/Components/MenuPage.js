import React from 'react';
import './MenuPage.css';
import FLACKYPASTRY from '../images/strawberrycake-3411553_1280.jpg';
import SWISSROLL from '../images/dessert-678071_1280.jpg';
import CREAMPUFF from '../images/cream-puff-1694333_1280.jpg';
import CAURE from '../images/cakes-3032323_1280.jpg';
import BREAD from '../images/bread-8814788_1280.jpg';
import CROISSANT from '../images/bread-1284438_1920.jpg';
import CAKE from '../images/dessert-6898136_1280.jpg';
import DANISHPASRY from '../images/danish-pastry-892909_1280.jpg';
import KIMO from '../images/bread-8814788_1280.jpg';
import CHOUX from '../images/cake-3744058_1280.jpg';
const MenuPage = () => {
  return (
    <div className='menu' >
      <h1>Our Menu</h1>
      <ul>
        <li>
          <img className='Pictures' src={FLACKYPASTRY} alt="Flaky Pastry" />
          <p>FLACKY PASTRY</p>
        </li>
        <li>
          <img className='Food' src={SWISSROLL} alt="SWISS ROLL" />
          <p>SWISSROLL</p>
        </li>
        <li>
          <img className='latte' src={CREAMPUFF} alt="CREAMPUFF" />
          <p>CREAM PUFF</p>
        </li>
        <li>
          <img className='ice' src={CAURE} alt="CAU`RE" />
          <p>CAU`RE</p>
        </li>
        <li>
          <img className='cold' src={BREAD} alt="BREAD" />
          <p>BREAD</p>
        </li>
        <li>
          <img className='water' src={CROISSANT} alt="CROISSANT" />
          <p>CROISSANT</p>
        </li><li>
          <img className='drops' src={CAKE} alt="CAKE" />
          <p>CAKE</p>
        </li>
        <li>
          <img className='wet' src={DANISHPASRY} alt="DANISH PASTRY" />
          <p>DANISHPASRY</p>
        </li>
        <li>
          <img  className='hot' src={KIMO} alt="KIMO" />
          <p>KIMO</p>
        </li>
        <li>
          <img className='heat' src={CHOUX} alt="CHOUX" />
          <p>CHOUX</p>
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;

