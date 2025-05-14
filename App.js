import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './projet_Web/Header';
import Home from './projet_Web/Home';
import AboutUs from './projet_Web/aboutUs';
import Objectives from './projet_Web/objectives';
import Membres from './projet_Web/membres';
import Footer from './projet_Web/footer';
import OurArchiv from './projet_Web/ourarchiv';
import Form from './projet_Web/form';
import ContactUs from './projet_Web/contactus';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/objectives" element={<Objectives />} />
        <Route path="/achievements" element={<OurArchiv />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
