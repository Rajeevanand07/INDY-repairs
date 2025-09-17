import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<ServiceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
