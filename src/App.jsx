import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'


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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
