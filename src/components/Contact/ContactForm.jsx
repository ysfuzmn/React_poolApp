import React, { useState } from 'react';
import './ContactPage.css'; 

const ContactPage = () => {
  const [messageStatus, setMessageStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessageStatus('Mesaj gönderildi');
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>İletişim</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ad:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name"  required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesajınız:</label>
            <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit">Gönder</button>
          {messageStatus && <p className="message-status">{messageStatus}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
