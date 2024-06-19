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
          
          <button class="btn">
    <span class="btn-text-one">FLACKYPASTRY</span>
    <span class="btn-text-two">$15</span>
</button>
        </li>
        <li>
          <img className='Food' src={SWISSROLL} alt="SWISS ROLL" />
         
          <button class="btn">
    <span class="btn-text-one">SWISSROLL</span>
    <span class="btn-text-two">$20</span>
</button>
        </li>
        <li>
          <img className='latte' src={CREAMPUFF} alt="CREAMPUFF" />
          
          <button class="btn">
    <span class="btn-text-one">CREAM PUFF</span>
    <span class="btn-text-two">$15</span>
</button>
        </li>
        <li>
          <img className='ice' src={CAURE} alt="CAU`RE" />
          
          <button class="btn">
    <span class="btn-text-one">CAU`RE</span>
    <span class="btn-text-two">$25</span>
</button>
        </li>
        <li>
          <img className='cold' src={BREAD} alt="BREAD" />
          
          <button class="btn">
    <span class="btn-text-one">BREAD</span>
    <span class="btn-text-two">$10</span>
</button>
        </li>
        <li>
          <img className='water' src={CROISSANT} alt="CROISSANT" />
          
          <button class="btn">
    <span class="btn-text-one">CROISSANT</span>
    <span class="btn-text-two">$20</span>
</button>
        </li><li>
          <img className='drops' src={CAKE} alt="CAKE" />
        
          <button class="btn">
    <span class="btn-text-one">CAKE</span>
    <span class="btn-text-two">$12</span>
</button>
        </li>
        <li>
          <img className='wet' src={DANISHPASRY} alt="DANISH PASTRY" />
         
          <button class="btn">
    <span class="btn-text-one">DANISHPASRY</span>
    <span class="btn-text-two">$30</span>
</button>
        </li>
        <li>
          <img  className='hot' src={KIMO} alt="KIMO" />
         
          <button class="btn">
    <span class="btn-text-one">KIMO</span>
    <span class="btn-text-two">$40</span>
</button>
        </li>
        <li>
          <img className='heat' src={CHOUX} alt="CHOUX" />
          
          <button class="btn">
    <span class="btn-text-one">CHOUX</span>
    <span class="btn-text-two">$20</span>
</button>
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;

