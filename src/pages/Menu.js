import React, { Fragment, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Menu = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <Fragment>
        <NavLink className="navbar navbar-collapse navbar-expand-lg">
            <div className="container-fluid">
                <div className='navbar-header'>
                    <Link to="/"><a className="navbar-brand" href={URL}>
                        <img className="logoimg" src="img/main_logo.png" alt="" /></a></Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar"
                                aria-controls="myNavbar" aria-expanded={!isNavCollapsed ? true : false} 
                                onClick={handleNavCollapse} aria-label="Toggle navigation">
                            <i className="fas fa-align-right text-dark"></i>
                        </button>
                </div>
                <div className='collapse navbar-collapse' id='myNavbar'>
                    <div className="mr-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/about"><a className="nav-link active" href={URL}>ABOUT US</a></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <Link to="/event"><a href={URL} className="nav-link">EVENTS</a></Link>
                                <div className="dropdown-content">
                                    <Link to="/live_event"><a href={URL}>Live Events</a></Link>
                                    <Link to="/upcoming_event"><a href={URL}>Upcoming</a></Link>
                                    <Link to="/past_event"><a href={URL}>Past Events</a></Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <Link to="/training"><a href={URL} className="nav-link">TRAINING</a></Link>
                                <div className="dropdown-content">
                                    <Link to=""><a href={URL}>Project Based Training</a></Link>
                                    <Link to=""><a href={URL}>Summer Internship</a></Link>
                                    <Link to=""><a href={URL}>Winter Training</a></Link>
                                    <Link to=""><a href={URL}>Industrial Projects</a></Link>
                                    <Link to="/agritech-training"><a href={URL}>Agritech Training</a></Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery"><a className="nav-link" href={URL}>GALLERY</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact"><a className="nav-link" href={URL}>CONTACT US</a></Link>
                        </li>

                        <li>
                            { 
                                isAuthenticated && <a className="nav-link" href={URL}>{user.name}</a>
                            }
                        </li>
                            {
                                isAuthenticated ? (
                        <li>
                            <button className='btn btn-primary px-5 py-2 primary-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                  Log Out
                            </button>
                        </li>
                        ) : (
                    
                        <li>
                            <button className='btn btn-primary px-5 py-2 primary-btn' onClick={() => loginWithRedirect()}>Log In</button>
                        </li>
                        )}
            
            
                    </ul>
                </div>
            </div>
        </NavLink>
    </Fragment>
  )
}

export default Menu;
