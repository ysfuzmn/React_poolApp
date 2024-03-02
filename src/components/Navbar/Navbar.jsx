// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
      <a href="/"><img src="/logo1.png" alt="logo" /></a> 

      </div>  
      <div className="main-section">
        {/* Your main page content goes here */}
        <a href="/"><span>Ana Sayfa</span></a> 
      </div>
      <div className="pools-section">
        {/* Your pools component or link goes here */}
        <span>Anketler</span>
        {/* Flyout Menu for Pools */}
        <div className="flyout-menu">
          <ul>
            <li>31 Mart 2024 Seçimi</li>
            <li>14 Mayıs 2023 Seçimi</li>
            {/* Add more pool options as needed */}
          </ul>
        </div>
      </div>
      <div className="contact-section">
        {/* Your contact component or link goes here */}
        <a href="/contact"><span>İletişim</span> </a>
      </div>
    </div>
  );
};

export default Navbar;
