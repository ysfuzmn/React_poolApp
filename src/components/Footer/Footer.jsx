
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
       
        <div className=" justify-center items-center">
      
          <div className="flex items-center justify-center">
          <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="footer_logo" />
        
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



        <div className="mt-4">

          <div className="text-center">
            <p>&copy; 2024 Anketler.org. Bütün hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
