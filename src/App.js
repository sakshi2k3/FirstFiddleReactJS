
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Brands from './Component/Brands';
import OurTeam from './Component/OurTeam';
import Contact from './Component/Contact';
import PressRelease from './Component/PressRelease';

function App() {
  return (
   <>
   < Header />
  <Routes>
  <Route path = '/' element = { <Home/> } />
  <Route path = '/about' element = { <About/> } />
  <Route path = '/brand' element = { <Brands/> } />
  <Route path = '/ourteam' element = { <OurTeam/> } />
  <Route path = '/contact' element = { <Contact/> } />
  <Route path = '/pressrelease' element = { <PressRelease/> } />
  </Routes>
   <Footer />
   </>
  );
}

export default App;
