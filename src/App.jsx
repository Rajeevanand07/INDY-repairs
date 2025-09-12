import './App.css'
import { Routes, Route } from "react-router-dom";
import BannerSection from './components/BannerSection'
import Services from './Pages/Services';

const App = () => {
  return (
    <>
        <Routes>

      <Route path="/services" element={<Services/>} />

    </Routes>

    </>
  )
}

export default App
