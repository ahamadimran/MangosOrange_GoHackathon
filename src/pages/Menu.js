import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Menu = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <a href="/"><img className="logoimg" src="img/main_logo.png" alt=""/></a>
        </div>

        {/* 2nd menu part  */}
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li className="nav-item">
              <Link to="/about"><a className="nav-link active" href="#">ABOUT US</a></Link>
            </li>
            
            <li className="nav-item dropdown">
              <div className="dropdown">
                <Link to="/event"><a href="#" className="nav-link">EVENTS</a></Link>
                <div className="dropdown-content">
                  <Link to="/live_event"><a href="#">Live Events</a></Link>
                  <Link to="/upcoming_event"><a href="#">Upcoming</a></Link>
                  <Link to="/past_event"><a href="#">Past Events</a></Link>
                 </div>
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <div className="dropdown">
                <Link to="/training"><a href="#" className="nav-link">TRAINING</a></Link>
                <div className="dropdown-content">
                  <Link to="/training"><a href="">Project Based Internship</a></Link>
                  <Link to="/agritech-training"><a href="#">Agritech Training</a></Link>
                </div>
              </div>
            </li>
            
            <li className="nav-item">
              <Link to="/gallery"><a className="nav-link" href="">GALLERY</a></Link>
            </li>
            
            <li className="nav-item">
              <Link to="/contact"><a className="nav-link" href="#">CONTACT US</a></Link>
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
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;