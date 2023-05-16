import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "react-toggle/style.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <a href="/#">About Us</a>
        <a href="/#">Events</a>
        <a href="/#">Training</a>
        <a href="/#">Gallery</a>
        <a href="/#">Contact Us</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
}

export default Navbar;