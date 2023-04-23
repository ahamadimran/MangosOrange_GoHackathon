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
        
            <div className="container">
                <div className="row">
                    <div className="aboutsection col-lg-1"></div>
                    <div className="aboutsection col-lg-10">
                        <h1 class="text-center p-3 m-2">PYTHON</h1>
                        <p>Learn the versatile Python programming language used in a wide variety of applications, from web development to data analysis and machine learning. In this course, you'll learn the fundamentals of Python syntax, data types, and control structures, as well as how to write functions and use modules to extend the language. You'll also learn how to work with data, including reading and writing files, parsing JSON and XML data, and interacting with databases. Additionally, you'll learn how to use popular Python libraries such as NumPy, Pandas, and Matplotlib for data analysis and visualization, as well as how to build machine learning models with scikit-learn. By the end of the course, you'll have the skills to start building your own Python applications and working on real-world Python projects.</p>
                    </div>
                    <div className="aboutsection col-lg-1"></div>
                </div>
            </div>

    <div className="container">
        <div className="row justify-content-center">
            <div className="m-2 col-lg-5 p-3 shadow">
            <h2  class="text-center m-2">Coverage</h2>
                <ul>
                    <li>Introduction to back-end development using Python</li>
                    <li>Setting up a development environment with Python and pip</li>
                    <li>Python basics: variables, data types, operators, and functions</li>
                    <li>Object-oriented programming with Python: classes, inheritance, and polymorphism</li>
                    <li>Introduction to web frameworks: Flask and Django</li>
                    <li>Building a back-end with Flask/Django: routing, controllers, and models</li>
                    <li>Handling data with Flask/Django: SQL, ORM, and migrations</li>
                    <li>Creating templates with Jinja2 in Flask/Django</li>
                    <li>Creating APIs with Flask/Django: RESTful web services, Swagger, and JSON</li>
                    <li>Implementing security in Flask/Django: authentication and authorization</li>
                    <li>Deploying and hosting Flask/Django applications on the web</li>
                    <li>Best practices for back-end development: performance, scalability, and maintainability</li>
                    <li>Debugging and troubleshooting common issues in Flask/Django development</li>
                    <li>Version control and collaboration using Git and GitHub</li>
                    <li>Integrating with other Python tools and libraries</li>
                </ul>
            </div>
            <div className=" col-lg-5 m-2 shadow p-3">
                <h2  class="text-center m-2">Learning Outcome</h2>
                <p>Upon completion of this course, students will be able to develop scalable and robust web applications using Python. They will have a solid understanding of Python's syntax, object-oriented programming principles, and popular web development frameworks such as Django and Flask. Additionally, students will have experience working with databases, RESTful APIs, and server-side rendering. They will also be proficient in working with web development tools such as Git, Docker, and AWS. By the end of the course, students will have developed several web applications using Python and be able to effectively collaborate with other developers.</p>
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

export default Python_Backend
