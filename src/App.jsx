import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import About2 from './pages/About2'
import Services2 from './pages/Services2'
import Home2 from './pages/Home2'
import ServiceDetails from './pages/ServiceDetails'
import Contact from './pages/Contact'
import FAQs from './pages/FAQs'
import NotFound2 from './pages/NotFound2'
import About2 from './pages/About2'




// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  // Ensure browser doesn't restore previous scroll position
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const doScroll = () => {
      // Try multiple targets to be safe across environments
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const root = document.getElementById('root');
      if (root) root.scrollTop = 0;
    };

    const raf = requestAnimationFrame(doScroll);
    return () => cancelAnimationFrame(raf);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

const App = () => {
  return (
    <>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<About2 />} />
        <Route path="/services" element={<Services2 />} />
        <Route path="/service/:slug" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FAQs/>} />
        <Route path="*" element={<NotFound2 />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
