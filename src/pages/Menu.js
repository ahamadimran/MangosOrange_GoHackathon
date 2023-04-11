import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Menu = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <Fragment>
        <nav className="navbar navbar-expand-lg">
            <Link to="/">
    <a className="navbar-brand" href={URL}>
        <img className="logoimg" src="img/main_logo.png" alt="" /></a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-align-right text-dark"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <div className="mr-auto"></div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/about">
                <a className="nav-link active" href={URL}>ABOUT US</a></Link>
            </li>
            <li className="nav-item dropdown">
                <div className="dropdown">
                    <Link to="/event">
                    <a href={URL} className="nav-link">EVENTS</a></Link>
                    <div className="dropdown-content">
                       <Link to="/live_event"><a href={URL}>Live Events</a></Link>
                       <Link to="/upcoming_event"><a href={URL}>Upcoming</a></Link>
                       <Link to="/past_event"><a href={URL}>Past Events</a></Link>
                       <Link to="/leaderboard"><a href="leaderboard.html">Leader Board</a></Link>
                    </div>
                </div>
            </li>
            <li className="nav-item dropdown">
                <div className="dropdown">
                    <Link to="/training">
                    <a href={URL} className="nav-link">TRAINING</a></Link>
                    <div className="dropdown-content">
                       
                       <Link to="/practice_set"><a href="practiceset.html">Practice Test</a></Link>
                       {/* <Link to="/participants"><a href="participants.html">PARTICIPANTS</a></Link>
                       <Link to="/winner"><a href="winners.html">WINNERS</a></Link>
                        <a href="result.html">RESULT</a> */}
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <Link to="/gallery">
                <a className="nav-link" href={URL}>GALLERY</a></Link>
            </li>
            <li className="nav-item">
                <Link to="/contact">
                <a className="nav-link" href={URL}>CONTACT US</a></Link>
            </li>
            {/* <li className="nav-item">
                <Link to="/training">
                <a className="nav-link" href={URL}>TRAINING</a></Link>
            </li> */}
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
                        {/* <button className="btn btn-primary px-5 py-2 primary-btn" id="login-btn">Login/Signup</button> */}
                    </li>
                ) : (
                    
                    <li>
                        <button className='btn btn-primary px-5 py-2 primary-btn' onClick={() => loginWithRedirect()}>Log In</button>
                        {/* <button className="btn btn-primary px-5 py-2 primary-btn" id="login-btn">Login/Signup</button> */}
                    </li>
                )}
            
            
        </ul>
    </div>
</nav>
    </Fragment>
  )
}

export default Menu;
