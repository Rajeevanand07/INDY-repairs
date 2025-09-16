import './App.css'
import { Routes, Route } from "react-router-dom";
import BannerSection from './components/BannerSection'
import Services from './Pages/Services';
import ServiceDetail from './Pages/ServiceDetail';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BannerSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<ServiceDetail />} />
      </Routes>
    </>
  )
}

export default App
