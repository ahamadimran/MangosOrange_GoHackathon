import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HTML_CSS_Js_Tailwind_Frontend = () => {
  return (
    <Fragment>
        <div className='html-css-js-frontend'>
            <Helmet>
                <title>Elevate Your Skills: HTML, CSS, JS, and Bootstrap Frontend </title>
                <meta name="description" content="Join GoHackathon comprehensive Frontend Training program and sharpen your skills in HTML, CSS, JavaScript, and Bootstrap. "/>
                <link rel='canonical' href='http://gohackathon.in/html-css-javascript'></link>
            </Helmet>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/html-css-js.png" alt="HTML Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>HTML,CSS, Bootstrap, JavaScript</h2>
                        <p>Learn the basics of HTML, the markup language used to create web pages. Learn how 
                            to use CSS, the language used to style HTML documents and create visually appealing 
                            web pages. Learn the fundamentals of JavaScript, the programming language used to 
                            add interactivity and functionality to web pages. Learn how to use Bootstrap, 
                            a popular CSS framework that makes it easy to create responsive, mobile-first web 
                            pages. Learn how to use Tailwind, a utility-first CSS framework that simplifies 
                            custom web design and speeds up your development workflow.<br />
                        </p>
                        
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/html-css-js.jpg' alt='HTML CSS JS Frontend'></img>
                    </div>
                </div>
            </div>
            
            <div className='container'>
            <h2 className='coursecoverage'>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Introduction to web development: front-end, back-end, and full-stack</li>
                            <li>HTML basics: document structure, tags, attributes, and semantics</li>
                            <li>CSS basics: selectors, properties, values, and cascading</li>
                            <li>Layout and positioning in CSS: display, position, float, flexbox, and grid</li>
                            <li>Responsive design and media queries in CSS</li>
                            <li>JavaScript basics: variables, data types, operators, and functions</li>
                            <li>DOM manipulation and event handling in JavaScript</li>
                            <li>Using third-party libraries and frameworks: Bootstrap and Tailwind</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Creating responsive and mobile-first layouts with Bootstrap</li>
                            <li>Customizing and extending Bootstrap and Tailwind with CSS and JavaScript</li>
                            <li>Creating interactive and dynamic interfaces with JavaScript</li>
                            <li>Best practices for web development: accessibility, usability, and performance</li>
                            <li>Debugging and troubleshooting common issues in web development</li>
                            <li>Version control and collaboration using Git and GitHub</li>
                            <li>Deploying and hosting web applications on the web</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will have a strong understanding of HTML, 
                            CSS, and JavaScript and be able to use these technologies to create responsive and 
                            interactive websites. They will have experience working with front-end frameworks 
                            such as Bootstrap and Tailwind, enabling them to quickly create visually appealing 
                            websites with minimal effort. By the end of the course, students will have built
                             multiple web applications and be able to effectively collaborate with other 
                             developers using Git for version control.<br /> 
                        </p> <br/>
                        <p><strong>Training Cost:- ₹ 6000/-</strong></p>
                        <button className="btn btn-primary">Duration: 6-8 Weeks</button> &nbsp;
                        <Link to="/payment"><button className="btn btn-primary">Buy Now</button></Link> &nbsp;
                        <Link to="/contact"><button className="btn btn-primary">Know More</button></Link>
                    </div>
                    <div className='col-lg-5'>
                        <h2>Get in Touch</h2>
                        <ContactForm/>
                    </div>
                </div>    
            </div>
        </body>

        <Footer />
        </div>
    </Fragment>
  )
}

export default HTML_CSS_Js_Tailwind_Frontend
