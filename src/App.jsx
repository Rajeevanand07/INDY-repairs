import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './Pages/ContactUs'
import FAQ from './Pages/FAQ'
const App = () => {
  return (
    <>
      <Navbar/>
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
