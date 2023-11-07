import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const Footer = () => {
  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const footerStyle = {
    backgroundColor: 'rgb(8, 21, 40)',
    padding: '50px',
    position: 'relative',
  };

  const footerContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '28px',
    cursor: 'pointer',
  };

  const addressStyle = {
    color: '#6f7f92',
    fontSize: '17px',
    paddingTop: '20px',
    textAlign: 'center',
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px',
    fontSize: '30px',
    color: 'white',
    cursor: 'pointer',
  };

  const copyrightStyle = {
    color: '#6f7f92',
    paddingBottom: '70px',
    fontSize: '17px',
    lineHeight: '28px',
    textAlign: 'center',
  };

  const backToTopStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: showScrollToTop ? 'block' : 'none',
  };

  return (
    <div style={footerStyle}>
      <img width={'11%'} src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="img" />
      <div style={footerContentStyle}>
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Contact Us</h3>
        <h3>Privacy Policy</h3>
        <h3>Sitemap</h3>
      </div>
      <div style={addressStyle}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</div>
      <div style={socialIconsStyle}>
        <div>
          <FaTwitterSquare />
        </div>
        <div>
          <FaLinkedin />
        </div>
      </div>
      <div style={copyrightStyle}>© 2022. Ntwist Inc.</div>
      <div style={backToTopStyle}>
        <a href="#" onClick={scrollToTop}>
          <IoIosArrowDropupCircle style={{ width: '100%', height: '60px', color: '#003358' }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

