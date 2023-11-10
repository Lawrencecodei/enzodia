import './About.css';
import Glass2 from '../assets/Glass2.png';

const About = () => {
    return (
        <div className='app__about section__padding'>
      
        <div className='app__about-text'>
        <h1>About Us</h1>
        <p> Welcome to SureG Media, a platform founded by the visionary entrepreneur 
            Lawrence Ijele. At SureG Media, we're dedicated to providing top-notch digital 
            marketing services tailored to the unique needs of small businesses. 
            <br/> <br/> Our journey began with a simple yet powerful goal: to empower small 
            businesses to connect with their customers, increase sales, and establish a robust 
            digital presence. <br />
            <br /> Driven by a passion for business growth and innovation, we recognized the challenges faced 
            by small enterprises in a fast-paced digital landscape. Hence, SureG Media was born to bridge the 
            gap.<br/> <br/> Our commitment to helping businesses thrive in the online world is at the heart of 
            everything we do. We believe that your success is our success, and we look forward to embarking on 
            this exciting digital journey with you. Let's transform your business and make your digital dreams a 
            reality, together.
        </p>
        </div>
       
        <div className='app__about-image'>
            <img src={Glass2} alt='aboutImage' />
        </div>
        </div>
       
        
    );
}

export default About;
