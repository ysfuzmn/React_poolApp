// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        {/* Top Row */}
        <div className=" justify-center items-center">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <img src="/logo1.png" alt="Logo" className="footer_logo" />
            {/* Description Section */}
            <p className='font-light'>Bu sitenin herhangi bir siyasi oluşumla alakası yoktur.Sadece kamuoyu anket şirketlerinin verilerini göstermek amacıyla hazırlanmıştır.</p>
          </div>
         
          
      
        </div>

        <div className="footer_links items-center font-bold mt-4 "> 
          <a href="/" className="hover:text-blue-800 mr-4 ">
            Ana Sayfa
          </a>
          
          <a href="/" className="hover:text-blue-800 mr-4 p-4">
            Anketler
          </a>
          
          <a href="/contact" className="hover:text-blue-800">
            İletişim
          </a>
        </div>


        {/* Bottom Row */}
        <div className="mt-4">
          {/* Copyright Section */}
          <div className="text-center">
            <p>&copy; 2024 Anketler.org. Bütün hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
