import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './components/Aboutus/Aboutus';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Notification from './components/Notification';
import Services from './components/Services/Services';
import Work from './components/Work/Work';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Notification />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
