import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import MapComponent from "./Components/MapComponent";
import AboutUs from './Components/AboutUs';
import PrivacyPolicy from './Components/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
      </Routes >
    </BrowserRouter >
  );
}

export default App;
