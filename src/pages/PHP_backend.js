import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const PHP_backend = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/php.png" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Php</h2>
                        <p>Learn the server-side scripting language used to create dynamic and interactive web 
                            pages. In this course, you'll learn the fundamentals of PHP syntax, data types, 
                            and control structures, as well as how to work with functions, arrays, and objects. 
                            You'll also learn how to use PHP to interact with databases, handle user input, and 
                            create web forms. In addition, you'll learn how to work with popular PHP frameworks 
                            such as Laravel and CodeIgniter, as well as how to use PHP to create APIs and 
                            interact with external APIs. By the end of the course, you'll have the skills to 
                            start building your own PHP applications and working on real-world PHP projects.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/php.jpeg' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2 className='coursecoverage'>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Introduction to web development using PHP</li>
                    <li>Setting up a development environment with PHP, Apache, and MySQL</li>
                    <li>HTML basics: document structure, tags, attributes, and semantics</li>
                    <li>CSS basics: selectors, properties, values, and cascading</li>
                    <li>JavaScript basics: variables, data types, operators, and functions</li>
                    <li>Introduction to web frameworks: Laravel and CodeIgniter</li>
                    <li>Building a back-end with Laravel/CodeIgniter: routing, controllers, and models</li>
                    <li>Handling data with Laravel/CodeIgniter: SQL, ORM, and migrations</li>
                    <li>Creating templates with Blade/Twig in Laravel/CodeIgniter</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Creating and handling forms in Laravel/CodeIgniter</li>
                    <li>Building a front-end with HTML, CSS, and JavaScript</li>
                    <li>Using third-party libraries and frameworks in Laravel/CodeIgniter</li>
                    <li>Creating RESTful APIs with Laravel/CodeIgniter</li>
                    <li>Deploying and hosting Laravel/CodeIgniter applications on the web</li>
                    <li>Best practices for web development: accessibility, usability, and performance</li>
                    <li>Debugging and troubleshooting common issues in web development</li>
                    <li>Version control and collaboration using Git and GitHub</li>
                    <li>Integrating with other PHP tools and libraries</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will be able to develop dynamic and 
                            interactive web applications using PHP. They will have a solid understanding of
                             PHP's syntax, data structures, control structures, and object-oriented programming 
                             principles. Additionally, students will have experience working with popular PHP 
                             frameworks such as Laravel and CodeIgniter, enabling them to quickly build 
                             scalable and secure web applications. By the end of the course, students will 
                             have built several web applications and be able to effectively collaborate with 
                             other developers using Git for version control.
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

export default PHP_backend
