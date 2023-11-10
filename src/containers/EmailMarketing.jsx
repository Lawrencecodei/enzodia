import React from 'react';
import './dropDown.css';
import { Link } from 'react-router-dom';

const EmailMarketing = () => {
    return (
        <div className='app__dropdown section__padding'>
            <h1>Email Marketing</h1>
            <p> ...It allows you to communicate directly with your customers, nurture leads, and promote your products or services. As a business owner, a well-executed email marketing strategy can help you build and maintain customer relationships, increase brand loyalty, and drive conversions. Whether you're sending newsletters, promotional offers, or personalized content, email marketing is a cost-effective and efficient way to stay top-of-mind with your target audience and achieve your business objectives.</p>
            <div className='app__cta-btn'>
        <Link to="/contact">
        <button type="button">TALK TO US</button>
        </Link>
           
        </div>
        </div>
    );
}

export default EmailMarketing;
