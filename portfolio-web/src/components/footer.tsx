import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <hr></hr>
      <ul className="social-list">
     
        
        <li className="social-list__item">
          <a className="social-list__link" href="www.linkedin.com/in/marcelino-ghaleb-0223a7233" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
  <a className="social-list__link" href="https://wa.me/96181522644/?text=Hello%20there!%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer">
  <i className="fab fa-whatsapp"></i>
  </a>
</li>

      
      </ul>
    </footer>
  );
};

export default Footer;