import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <header className="header">
        <div className="logo">
            {/* <img src="/assets/125bgGrey_Minimalist_Bookstore_Business_Logo__1_-removebg-preview.png" alt="Logo" /> */}
            <a href='/' className='logo'>The Booktown</a>
        </div>
        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/Products">Shop</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
        </nav>
    </header>

  )
}

export default Navbar