import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Package from './components/Package';

import Home from  './pages/Home';
import RSVP from './pages/RSVP';
import Gallery from './pages/Gallery';
import Packages from './pages/Packages'; 
import AboutPage from './pages/AboutPage'; 
import ContactPage from './pages/ContactPage'



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
         <Route path="/about" element={<AboutPage />} /> 
          <Route path="/contact" element={<ContactPage />} /> 

        
      </Routes>
   
    </Router>
  );
}

export default App;
