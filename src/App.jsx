import './App.css'
import { Routes, Route } from "react-router-dom";
import BannerSection from './components/BannerSection'
import Services from './Pages/Services';
import ServiceDetail from './Pages/ServiceDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<ServiceDetail />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
