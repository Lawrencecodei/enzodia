import React from 'react';
import './Service.css';
import InfoCard from './infoCard';
import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.png';
import googleads from '../assets/googleads.png';
import googlitcs from '../assets/googlitcs.png';
import website from '../assets/website.png';
import email from '../assets/email.png';
import seo from '../assets/seo.png';

const Service = () => {
    return (
        <div className='app__service-container  section__padding'>

<div className='app__service-heading'>
            <h1>Comprehensive Digital Marketing Solutions</h1>
        </div>
        <div className='app__service '>

        
         <div className='app__service-web'>
         <Link to="/emailMarketing"> 
         <InfoCard 
         imgSrc={email}
        title="Email Marketing"
        text="Email marketing remains one of the most effective ways to engage with your audience and drive business growth..."
        />
         </Link>
        <Link to="/website">
        <InfoCard 
        imgSrc={website}
        title="Website Design"
        text="Your website is the digital face of your business, and professional web design plays a pivotal role in shaping that image..."
        />
        </Link>

        <Link to="/seo">
        <InfoCard 
        imgSrc={seo}
        title="Search Engine Optimization(SEO)"
        text="Search Engine Optimization (SEO) is the digital compass that guides your business toward online success..."
        />
        </Link>

        </div>

        <div />

         <div className='app__service-web'>
         <Link to="/facebookAds">
        <InfoCard 
        imgSrc={facebook}
        title="Facebook Ads"
        text="Facebook Ads are a driving force behind your ability to reach a highly targeted and engaged audience,..."
        />
        </Link>

       <Link to="/googleAnalytics">
       <InfoCard 
       imgSrc={googlitcs}
        title="Google Analytics"
        text="Understanding your website's performance is vital for making informed decisions... "
        />
       </Link>
       <Link to="/googleAds">
       <InfoCard 
       imgSrc={googleads}
        title="Google Ads"
        text="Google Ads is an essential tool for business owners who want to reach potential customers actively searching for their products or services..."
        />
       </Link>
         </div>   
         <div className='app__cta-btn'>
        <Link to="/contact">
        <button type="button">TALK TO US</button>
        </Link>
           
        </div>
        </div>
        </div>
    );
}

export default Service;
