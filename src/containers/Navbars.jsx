
import './Navbars.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';


const Navbars = () => {
const [toggleMenu, setToggleMenu] = useState(false);



    return (
        <nav className='app__navbar'>
         <Link to="/">
            <div className='app__brandname'>
            
            <img src={logo1} alt="logo-svg"/>
           
            </div>
            </Link>
            <ul className='app__navbar-links'>
            <li className='p__opensans'><Link to="/">Home</Link></li>
            <li className="p__opensans"><Link to="/about">About</Link></li>
            <li className="p__opensans"><Link to="/contact">Contact</Link></li>
            {/* <li className="p__opensans"><Link to="/blog">Blog</Link></li> */}
            <li className="p__opensans"><Link to="/service">Services  </Link> </li>
            </ul>
            <div className='app__navbar-smallscreen'>
           <button className='hamburger' onClick={() => setToggleMenu(true)}
           >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
           </button>
           {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide__bottom' onClick={() => setToggleMenu(false)}>
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 overlay__close">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

        <ul className='app__navbar-smallscreen_links'>
        <li className='p__opensans'><Link to="/">Home</Link></li>
            <li className="p__opensans"><Link to="/about">About</Link></li>
            <li className="p__opensans"><Link to="/contact">Contact</Link></li>
            {/* <li className="p__opensans"><Link to="/blog">Blog</Link></li> */}
            <li className="p__opensans"><Link to="/service">Services </Link> </li>
            </ul>
            </div>
           )}
            </div>
        </nav>
    );
}

export default Navbars;
