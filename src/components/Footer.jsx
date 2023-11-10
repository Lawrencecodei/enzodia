import './footer.css';
import logo1 from '../assets/logo1.png';
import { Link } from 'react-router-dom';




const Footer = () => {

   
    return (
       
        <footer className='app__footer-container section__padding'>
    
    
    
     <div className='app__footer-links'>
     <div className='app__footer-links_logo'>
   <Link to="/">  <img src={logo1} alt="logo" /></Link>
     <h3>Address</h3>
     <p>Abuja, Nigeria</p> 
     <br/>
     <h3>Call Us</h3> 
     <p>09071346084</p>
     </div>
     <div className='app__footer-links_div'>
        <h4>Useful Links</h4>
        <ul>
            <li className="p__opensans"><Link to="/about">About</Link></li>
            <li className="p__opensans"><Link to="/service">Services</Link></li>
            <li className="p__opensans"><Link to="/contact">Contact</Link></li>
            {/* <li className="p__opensans"><Link to="/blog">Blog</Link></li> */}
        </ul>
     </div>
     <div className="app__footer-links_div">
                <h4>SureG Media</h4>
               <Link to="/terms">
               <p>Terms & Conditions</p>
               </Link>
                
                <Link to="/privacy" >
                <p>Privacy Policy</p>
                </Link>
               
            </div>
     </div>
     
     <div className='app__footer-copyright'>
        <p>&copy; {new Date().getFullYear()} SUREG MEDIA. All rights reserved.</p>
      </div>
     
    </footer>
    );
}

export default Footer;
