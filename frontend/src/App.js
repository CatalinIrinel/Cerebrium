import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Servicii from './pages/Servicii';
import NeurofeedPage from './pages/NeurofeedPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import ScrollToTop from './ScrollToTop';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/servicii" element={<Servicii />} />
        <Route path="/ce-este-neurofeedback-ul" element={<NeurofeedPage />} />
        <Route path="/despre" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
