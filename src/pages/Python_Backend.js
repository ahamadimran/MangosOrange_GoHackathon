import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Python_Backend = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/python.jpg" alt=""/>
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
                            and interacting with databases. Additionally, you'll learn how to use popular Python 
                            libraries such as NumPy, Pandas, and Matplotlib for data analysis and visualization, 
                            as well as how to build machine learning models with scikit-learn. By the end of the 
                            course, you'll have the skills to start building your own Python applications and 
                            working on real-world Python projects.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/python.jpeg' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Introduction to back-end development using Python</li>
                    <li>Setting up a development environment with Python and pip</li>
                    <li>Python basics: variables, data types, operators, and functions</li>
                    <li>Object-oriented programming with Python: classes, inheritance, and polymorphism</li>
                    <li>Introduction to web frameworks: Flask and Django</li>
                    <li>Building a back-end with Flask/Django: routing, controllers, and models</li>
                    <li>Handling data with Flask/Django: SQL, ORM, and migrations</li>
                    <li>Creating templates with Jinja2 in Flask/Django</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Creating APIs with Flask/Django: RESTful web services, Swagger, and JSON</li>
                    <li>Implementing security in Flask/Django: authentication and authorization</li>
                    <li>Deploying and hosting Flask/Django applications on the web</li>
                    <li>Best practices for back-end development: performance, scalability, and maintainability</li>
                    <li>Debugging and troubleshooting common issues in Flask/Django development</li>
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
                        <p>Upon completion of this course, students will be able to develop scalable and robust 
                            web applications using Python. They will have a solid understanding of Python's 
                            syntax, object-oriented programming principles, and popular web development 
                            frameworks such as Django and Flask. Additionally, students will have experience 
                            working with databases, RESTful APIs, and server-side rendering. They will also be 
                            proficient in working with web development tools such as Git, Docker, and AWS. 
                            By the end of the course, students will have developed several web applications 
                            using Python and be able to effectively collaborate with other developers.
                        </p> <br/>
                        <button className="btn btn-primary px-5 py-2 primary-btn">Dureation: 6-8 Weeks</button> &nbsp;
                        <button className="btn btn-primary px-5 py-2 primary-btn">Buy Now</button> &nbsp;
                        <button className="btn btn-primary px-5 py-2 primary-btn">Know More</button>
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

export default Python_Backend
