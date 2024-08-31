import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage/Home.js';
import Products from './ProductsPage/Products.js';
import Navbar from './Components/Navbar.jsx';
// import Footer from './Components/Footer';
import About from './AboutPage/About.js';
import Contact from './ContactPage/Contact.js';
// import Contact from './Contact';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer></Footer> */}
      </div>
    </Router>
  );
}

export default App;