import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <a href="/"><img className="logoimg" src="img/main_logo.png" alt="Gohackathon Logo"/></a>
        </div>

        {/* 2nd menu part  */}
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>

            <li className="nav-item dropdown">
              <div className="dropdown">
                <a href="/about" className="nav-link">ABOUT US</a>
                <div className="dropdown-content">
                  <a href="/about">Who We Are</a>
                  <a href="/event">Events</a>
                  <a href="/gallery">Gallery</a>
                 </div>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/training">TRAINING</a>
            </li>

            {/* <li className="nav-item dropdown">
              <div className="dropdown">
                <a href="/training" className="nav-link">TRAINING</a>
                <div className="dropdown-content">
                  <a href="{URL}">Web Development (Full Stack)</a>
                  <a href="{URL}">Web Design (UI/UX)</a>
                  <a href="{URL}">Digital Marketing</a>
                  <a href="/training">Project Based Internship</a>
                  <a href="{URL}">Learning Tours</a>
                </div>
              </div>
            </li> */}

            <li className="nav-item dropdown">
              <div className="dropdown">
                <a href="/software-development" className="nav-link">SERVICES</a>
                <div className="dropdown-content">
                  <a href="/software-development">Web Development</a>
                  <a href="/software-development">App Development</a>
                  <a href="/software-development">Cloud Infrastructure</a>
                  <a href="/software-development">Open Source</a>
                  <a href="/software-development">Custom Software</a>
                  <a href="/software-development">Tech Assistance</a>
                  <a href="/software-development">UI/UX Designing</a>
                  <a href="/software-development">E-Commerce</a>
                  <a href="/software-development">Custom LMS </a>
                </div>
              </div>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/contact">CONTACT</a>
            </li>
            
            <li>
              {
                  isAuthenticated && <a className="nav-link" href={URL}>{user.name}</a>
              }
            </li>
            
            {
                isAuthenticated ? (
                <li>
                  <button className='btn btn-primary' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                </li>
                ) : (
                <li>
                  <button className='btn btn-primary' onClick={() => loginWithRedirect()}>Log In</button>
                </li>
                )
            }
          </ul>
        </div>
        
        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href={URL} onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;