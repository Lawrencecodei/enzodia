import React from 'react';
import './dropDown.css';
import { Link } from 'react-router-dom';

const GoogleAnalytics = () => {
    return (
        <div className='app__dropdown section__padding'>
            <h1>Google Analytics</h1>
            <p> ...Google Analytics allows you to gain valuable insights into user behavior, engagement, and conversion rates. As a business owner, this data is invaluable for optimizing your website and marketing strategies. It helps you identify what's working, what isn't, and where you should focus your efforts. With Google Analytics, you can fine-tune your digital presence and ensure that every aspect of your online presence is contributing to your business's success.</p>
        
            <div className='app__cta-btn'>
        <Link to="/contact">
        <button type="button">TALK TO US</button>
        </Link>
           
        </div>
        
        </div>
    );
}

export default GoogleAnalytics;
