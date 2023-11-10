import './Header.css';
import Ellipse from '../assets/Ellipse.png';
import smallImage from '../assets/smallImage.png';
import CTA from '../components/CTA';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';
import Card from './Card';


const Header = () => {
    return (
        <>
        <div className='app__header section__padding'>
            <div className='app__header-content'>
                <h1 className='gradient__text'>SureG Media: <br/>
                Your Digital <br/> 
                Marketing Partner</h1>
                <div className="app__header-smallImage">
            
            <p>Elevate your online presence with top-notch digital marketing strategies. 🚀 </p>
            
          </div>
          <CTA />
            </div>
            <div className='app__header-image'>
              
              
               <div className='app__header-image_opacity'>
               <img src={Ellipse} alt="ellipse" />
               <div className='app__header-image_opacity-text'> <h2>+50</h2>
               <p>TYPES OF APP INTEGRATION</p></div>
              

</div>
            </div>
            <div className='app__header-icon'>
            <Link to="/service"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="15.5" fill="white" stroke="black"/>
  <path d="M21.3333 16L13.3333 20.6188V11.3812L21.3333 16Z" fill="black"/>
</svg>
</Link>

            </div>
            <div className="app__header-text">
<h2>Your Success, Our Mission!</h2>

<p>Digital Strategies Tailored for Your Success <br/> </p>

        </div>
        </div>
        <div>
            <Card />
        </div>
        <div className='app__header-social section__padding'>
        <p>Follow Us</p>
        <div className='app__header-icons'>
        <SocialIcons />
        </div>
       
        <Link to="/contact">
        <button type="button" className='header__icon-btn'> 
           Make An Appointment
           </button>
        </Link>
        </div>

        

    </>
    );
}

export default Header;
