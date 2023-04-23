import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const HTML_CSS_Js_Tailwind_Frontend = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
        <div className="evebanner">
        <img src="img/banner/Frontend_1.jpg" alt=""/>
      </div>
        
      <div className="container">
            <div className="row">
                <div className="aboutsection col-lg-12">
                    <h1 class="text-center p-3 m-2">HTML,CSS, JavaScript, BootStrap, Tailwind</h1>
                    <p class="m-auto text-center">HTML: Learn the basics of HTML, the markup language used to create web pages.</p>
                    <p class="m-auto text-center">CSS: Learn how to use CSS, the language used to style HTML documents and create visually appealing web pages.</p>
                    <p class="m-auto text-center">JavaScript: Learn the fundamentals of JavaScript, the programming language used to add interactivity and functionality to web pages.</p>
                    <p class="m-auto text-center">Bootstrap: Learn how to use Bootstrap, a popular CSS framework that makes it easy to create responsive, mobile-first web pages.</p>
                    <p class="m-auto text-center">Tailwind: Learn how to use Tailwind, a utility-first CSS framework that simplifies custom web design and speeds up your development workflow.</p>
                </div>
            </div>
        </div>

    <div className="container">
        <div className="row justify-content-center">
            <div className="m-2 col-lg-5 p-3 shadow">
            <h2  class="text-center m-2">Coverage</h2>
                <ul>
                    <li>Introduction to web development: front-end, back-end, and full-stack</li>
                    <li>HTML basics: document structure, tags, attributes, and semantics</li>
                    <li>CSS basics: selectors, properties, values, and cascading</li>
                    <li>Layout and positioning in CSS: display, position, float, flexbox, and grid</li>
                    <li>Responsive design and media queries in CSS</li>
                    <li>JavaScript basics: variables, data types, operators, and functions</li>
                    <li>DOM manipulation and event handling in JavaScript</li>
                    <li>Using third-party libraries and frameworks: Bootstrap and Tailwind</li>
                    <li>Creating responsive and mobile-first layouts with Bootstrap</li>
                    <li>Customizing and extending Bootstrap and Tailwind with CSS and JavaScript</li>
                    <li>Creating interactive and dynamic interfaces with JavaScript</li>
                    <li>Best practices for web development: accessibility, usability, and performance</li>
                    <li>Debugging and troubleshooting common issues in web development</li>
                    <li>Version control and collaboration using Git and GitHub</li>
                    <li>Deploying and hosting web applications on the web</li>
                </ul>
            </div>
            <div className=" col-lg-5 m-2 shadow p-3">
                <h2  class="text-center m-2">Learning Outcome</h2>
                <p>Upon completion of this course, students will have a strong understanding of HTML, CSS, and JavaScript and be able to use these technologies to create responsive and interactive websites. They will have experience working with front-end frameworks such as Bootstrap and Tailwind, enabling them to quickly create visually appealing websites with minimal effort. By the end of the course, students will have built multiple web applications and be able to effectively collaborate with other developers using Git for version control.</p>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 text-white text-center m-3 p-3 bg-secondary rounded"><h3>Duration: 6-8 Weeks</h3></div>
                <div class="col-lg-5 text-white text-center m-3 p-3 bg-secondary rounded"><h3>Pricing: 6000/-</h3></div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-12 text-center m-3 p-3 ">
                    <a className="btn btn-primary text-white" href={URL} role="button">Buy Now</a>
                </div>
            </div>
        </div>
            <div class="row">
                <div className='col-lg-1'></div>
                <div className='col-lg-10'>
                    <h2 class="text-center">Get in Touch</h2>
                    <ContactForm />
                </div>
                <div className='col-lg-1'></div>
            </div>
    </div>
</body>
        <Footer />
    </Fragment>
  )
}

export default HTML_CSS_Js_Tailwind_Frontend
