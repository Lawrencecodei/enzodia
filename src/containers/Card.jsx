
import './card.css';
import InfoCard from './infoCard';
import { header1, header2, header3 } from './imports';




const Card = () => {
    return (
      <div className='app__card section__padding'>
      <div className='app__card-heading'>
      <h1>The Future Of Digital Advertising Is Here</h1>
       
      </div>
      <div className='app__card-container app__infoCard-image'>
    <div className='app__card-container-header1'>
    <InfoCard
      imgSrc={header1}
      imgAlt="header1-alt"
      title="Accelerate Your Business"
      text="We help businesses accelerate their growth by developing 
      a comprehensive digital marketing strategy tailored to their 
      specific needs. Our team will identify the most effective channels, 
      whether it's through targeted social media campaigns, 
      search engine optimization (SEO), or email marketing, 
      to maximize their online visibility."
      />
    </div>
      
     <div className='app__card-container-header1'>
     <InfoCard
      imgSrc={header2}
      imgAlt="header1-alt"
      title="Wider Reach"
      text="We'll craft engaging content and optimize your website for conversions, 
      ensuring they capture and retain a loyal customer base. 
      Through data-driven analytics, we continuously refine 
      our strategies to deliver tangible results, 
      ultimately driving increased traffic, leads, 
      and revenue for our business clients."
      />
     </div>

      <div className='app__card-container-header1'>
      <InfoCard
      imgSrc={header3}
      imgAlt="header1-alt"
      title="We Are Committed"
      text="Our commitment is to empower your business with the digital tools and 
      expertise needed to thrive in today's competitive landscape."
      />

      </div>
      </div>

      </div>
    );
  };
  
  export default Card;