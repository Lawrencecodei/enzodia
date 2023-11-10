import React from 'react';
import './dropDown.css';
import { Link } from 'react-router-dom';

const GoogleAds = () => {
    return (
        <div className='app__dropdown section__padding'>
            <h1>Google Ads</h1>
            <p>
             ...With Google Ads, you can create targeted, pay-per-click (PPC) advertising campaigns that appear in Google search results and across the web. This approach ensures that your business is in front of people who are already interested in what you offer. By investing in Google Ads, you can drive website traffic, increase leads, and boost conversions, ultimately growing your business's online presence and profitability.
            </p>
            <div className='app__cta-btn'>
        <Link to="/contact">
        <button type="button">TALK TO US</button>
        </Link>
           
        </div>
        
        </div>
    );
}

export default GoogleAds;
