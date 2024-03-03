

import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
      <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="logo" />
      </div>  
      <div className="main-section">

        <a href="/React_poolApp"><span>Ana Sayfa</span></a> 
      </div>
      <div className="pools-section">
  
        <span>Anketler</span>

        <div className="flyout-menu">
          <ul>
          <a href="/React_poolApp"> <li>31 Mart 2024 Seçimi</li></a>
            
        
          </ul>
        </div>
      </div>
      <div className="contact-section">

        <a href="/contact"><span>İletişim</span> </a>
      </div>
    </div>
  );
};

export default Navbar;
