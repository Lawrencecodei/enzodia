import React from 'react';
import './cta.css';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <div className="app__cta-btn">
             <Link to="/service">
             <button type="button" >
            Learn More
            </button>
             </Link>
            </div>
    );
}

export default CTA;
