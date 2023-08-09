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
            <li className="nav-item">
              <a className="nav-link active" href="/">HOME</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="/about">ABOUT US</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/software-development">SERVICES</a>
            </li>
            
            <li className="nav-item dropdown">
              <div className="dropdown">
                <a href="/event" className="nav-link">EVENTS</a>
                <div className="dropdown-content">
                  <a href="/live_event">Live Events</a>
                  {/* <a href="/upcoming_event">Upcoming</a> */}
                  <a href="/past_event">Past Events</a>
                 </div>
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <div className="dropdown">
                <a href="/training" className="nav-link">TRAINING</a>
                <div className="dropdown-content">
                  <a href="/training">Project Based Internship</a>
                  <a href="/agritech-training">Agritech Training</a>
                </div>
              </div>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/gallery">GALLERY</a>
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