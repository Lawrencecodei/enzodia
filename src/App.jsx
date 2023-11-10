
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbars from './containers/Navbars';
import Header from './containers/Header';
import About from './containers/About';
import Contact from './containers/Contact';
import Blog from './containers/Blog';
import NoMatch from './containers/NoMatch';
import Footer from './components/Footer';
import Service from './containers/Service';
import './App.css'
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import ScrollToTop from './components/ScrollToTop';
import SEO from './containers/SEO';
import Website from './containers/Website';
import GoogleAds from './containers/GoogleAds';
import GoogleAnalytics from './containers/GoogleAnalytics';
import FacebookAds from './containers/FacebookAds';
import EmailMarketing from './containers/EmailMarketing';
import DMC from './containers/DMC';


function App() {
 
  return (
  

    <BrowserRouter>
        <Navbars />

        <ScrollToTop>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/dmc" element={<DMC />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/website" element={<Website />} />
          <Route path="/googleAds" element={<GoogleAds />} />
          <Route path="/googleAnalytics" element={<GoogleAnalytics />} />
          <Route path="/facebookAds" element={<FacebookAds />} />
          <Route path="/emailMarketing" element={<EmailMarketing />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        </ScrollToTop>
        <div>
          <Footer />
        </div>
      </BrowserRouter>

     
  )
}

export default App
