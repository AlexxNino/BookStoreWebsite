import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Components 
import Home from './HomePage/Home.js';
import Products from './ProductsPage/Products.js';
import Navbar from './Components/Navbar.jsx';
import About from './AboutPage/About.js';
import Contact from './ContactPage/Contact.js';
import BookDetail from './Components/BookDetail';
//Styles
import './App.css';
//Will come back to this...
// import Footer from './Components/Footer';

//Dummy Data
import books from './bookData.js';


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
          <Route path="/book/:id" element={<BookDetail books={books} />} />
        </Routes>
        {/* <Footer></Footer> */}
      </div>
    </Router>
  );
}

export default App;