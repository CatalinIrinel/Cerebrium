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
import Afectiuni from './pages/Afectiuni';
import Serviciu from './pages/Serviciu';
import Frecventa from './pages/Frecventa';
import 'remixicon/fonts/remixicon.css';
import ResursePage from './pages/ResursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GDPR from './pages/GDPR';
import TermeniConditii from './pages/TermeniConditii';
import TermeniUtilizare from './pages/TermeniUtilizare';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <ToastContainer position="top-center" limit={1} />
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/termeni-utilizare" element={<TermeniUtilizare />} />
        <Route path="/termeni-conditii" element={<TermeniConditii />} />
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/afectiuni" element={<Afectiuni />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/serviciu/:id" element={<Serviciu />} />
        <Route path="/servicii" element={<Servicii />} />
        <Route path="/frecventa-optima" element={<Frecventa />} />
        <Route path="/ce-este-neurofeedback-ul" element={<NeurofeedPage />} />
        <Route path="/resurse" element={<ResursePage />} />
        <Route path="/despre" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
