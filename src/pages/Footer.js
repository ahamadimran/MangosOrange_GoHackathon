import React, {Fragment} from 'react'

const footer = () => {
  return (
    <Fragment>
        <footer className="footer-section">
        <div className="container">
            <div className="footer-content pt-5 pb-4">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 footer-about">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="/"><img src="img/footer_logo.jpg" className="img-fluid" alt="Footer Logo" /></a>
                            </div>
                            <div className="footer-text">
                                <p>Go Hackathon comprises eminent Industry professionals, educators, and students meant
                                    to nurture talent among budding tech professionals. </p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/people/GoHackathon/100088250115623/"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://www.instagram.com/gohackathon/"><i className="fab fa-instagram instagram-bg"></i></a>
                                <a href="https://twitter.com/GoHackathon"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="https://www.linkedin.com/company/gohackathon/?viewAsMember=true"><i className="fab fa-linkedin-in linkedin-bg"></i></a>
                                <a href="https://www.youtube.com/@gohackathon/"><i className="fab fa-youtube youtube-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 ">
                        <div className="footer-widget-links">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                   <li><a href="/">Home</a></li>
                                   <li><a href="/about">About Us</a></li>
                                   <li><a href="/event">Events</a></li>
                                   <li><a href="/training">Training</a></li>
                                   <li><a href="/gallery">Gallery</a></li>
                                   <li><a href="/contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 ">
                        <div className="footer-widget-phone">
                            <div className="footer-widget">
                                <div className="address details">
                                  <div className="footer-widget-heading">
                                    <h3>Contact Us</h3>
                                  </div>
                                    <div className="topic">
                                            <i className="fa fa-map-marker"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<strong>AAG–11, Shipra Krishna Azure, Kaushambi, Ghaziabad, U.P 201010</strong>
                                    </div>
                                </div> <br />
                                <div className="phone-details">
                                    <div className="topic"> 
                                        
                                        <i className="fa fa-phone" style={{fontsize: "20px"}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong><a href="tel:+91 7678476713">+91 7678476713</a></strong> <br />
                                        <i className="fa fa-phone" style={{fontsize: "20px"}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong><a href="tel:+91 9910018925">+91 9910018925</a></strong>
                                        {/* <i className="fa fa-phone" style={{fontsize: "20px"}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong><a href="tel:+91 7985882599">+91 7985882599</a></strong> */}
                                    </div>
                                </div> <br />
                                <div className="email-details">
                                    <div className="topic">
                                        <i className="fas fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong><a href="mailto:info@gohackathon.in">info@gohackathon.in</a></strong>  
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-3 col-md-6 ">
                        <div className="footer-widget-subscribe">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button type="submit" className="btn btn-primary">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright © 2023 | <a href="https://gohackathon.in/">Gohackathon</a> | All Right
                                Reserved.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href={URL}>Terms and Conditions</a></li>
                                <li><a href={URL}>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </Fragment>
  )
}

export default footer
