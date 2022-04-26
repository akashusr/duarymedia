import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './components/Aboutus/Aboutus';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/aboutUs" element={<Aboutus />} />
        <Route path="/contactUs" element={<Contact />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
