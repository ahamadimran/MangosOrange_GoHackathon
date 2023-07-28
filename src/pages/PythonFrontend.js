import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const Python_Frontend = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/Python.png" alt="Python Frontend Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Python</h2>
                        <p>Learn the versatile Python programming language used in a wide variety of applications, 
                            from web development to data analysis and machine learning. In this course, you'll 
                            learn the fundamentals of Python syntax, data types, and control structures, as well 
                            as how to write functions and use modules to extend the language. You'll also learn 
                            how to work with data, including reading and writing files, parsing JSON and XML data, 
                            and interacting with databases. By the end of the course, you'll have the skills to 
                            start building your own Python applications and working with popular libraries such as 
                            NumPy and Pandas.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/python-01.jpg' alt='Python Development'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2 className='coursecoverage'>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Introduction to full-stack web development using Python</li>
                            <li>Setting up a development environment with Python, pip, and virtualenv</li>
                            <li>HTML basics: document structure, tags, attributes, and semantics</li>
                            <li>CSS basics: selectors, properties, values, and cascading</li>
                            <li>JavaScript basics: variables, data types, operators, and functions</li>
                            <li>Introduction to web frameworks: Flask and Django</li>
                            <li>Building a back-end with Flask/Django: routing, views, and models</li>
                            <li>Handling data with Flask/Django: SQL, ORM, and migrations</li>
                            <li>Creating templates with Jinja2 in Flask/Django</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Creating and handling forms in Flask/Django</li>
                            <li>Building a front-end with HTML, CSS, and JavaScript</li>
                            <li>Using third-party libraries and frameworks in Flask/Django</li>
                            <li>Creating APIs with Flask/Django: RESTful and GraphQL</li>
                            <li>Deploying and hosting Flask/Django applications on the web</li>
                            <li>Best practices for web development: accessibility, usability, and performance</li>
                            <li>Debugging and troubleshooting common issues in web development</li>
                            <li>Version control and collaboration using Git and GitHub</li>
                            <li>Integrating with other Python tools and libraries</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will be able to write Python code to solve a 
                            variety of programming challenges, from simple scripts to complex applications. 
                            They will have a solid understanding of Python's syntax, data structures, control 
                            structures, and object-oriented programming principles. Additionally, students will
                             have hands-on experience working with popular Python libraries and frameworks for 
                             web development, data analysis, and machine learning. By the end of the course, 
                             students will have completed several programming assignments and projects that 
                             showcase their mastery of Python.
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
    </Fragment>
  )
}

export default Python_Frontend
