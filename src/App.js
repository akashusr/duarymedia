import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './components/Aboutus/Aboutus';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Notification from './components/Notification';
import Work from './components/Work/Work';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Notification />} />
        <Route path="/aboutUs" element={<Aboutus />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
