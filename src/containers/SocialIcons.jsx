import React from 'react';
import { Link } from 'react-router-dom';
import './socialIcons.css';
import {  FaFacebook, FaTwitterSquare,  FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <div className="social-icons">
       <Link to="https://api.whatsapp.com/send?phone=2349071346084">
        <FaWhatsapp />
       </Link>
      <Link to="https://www.facebook.com">
        <FaFacebook />
      </Link>
      <Link to="https://twitter.com">
      <FaTwitterSquare />
      </Link>
      <Link to="https://www.instagram.com">
        <FaInstagram />
      </Link>
      <Link to="https://www.linkedin.com">
        <FaLinkedin />
      </Link>
    </div>
    );
}

export default SocialIcons;
