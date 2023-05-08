import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const Java_Backend = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/java.jpg" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Java</h2>
                        <p>Learn one of the most popular programming languages used in a wide variety of 
                            applications, from building Android apps to developing enterprise-level software. 
                            In this course, you'll learn the fundamentals of Java syntax, data types, and 
                            control structures, as well as object-oriented programming principles, such as 
                            inheritance, encapsulation, and polymorphism. You'll also learn how to work with 
                            Java libraries and frameworks, such as Spring and Hibernate, and how to use Java 
                            for web development with technologies such as Servlets and JSP. Additionally, 
                            you'll learn how to use Java for mobile development with Android, as well as how 
                            to build desktop applications with JavaFX. By the end of the course, you'll have 
                            the skills to start building your own Java applications and working on real-world 
                            Java projects.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/java-01.jpg' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Introduction to back-end development using Java</li>
                    <li>Setting up a development environment with Java and Maven/Gradle</li>
                    <li>Java basics: variables, data types, operators, and functions</li>
                    <li>Object-oriented programming with Java: classes, inheritance, and polymorphism</li>
                    <li>Introduction to web frameworks: Spring Boot and Jakarta EE</li>
                    <li>Building a back-end with Spring Boot/Jakarta EE: routing, controllers, and models</li>
                    <li>Handling data with Spring Boot/Jakarta EE: SQL, ORM, and migrations</li>
                    <li>Creating templates with Thymeleaf in Spring Boot/Jakarta EE</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Creating APIs with Spring Boot/Jakarta EE: RESTful web services, Swagger, and JSON</li>
                    <li>Implementing security in Spring Boot/Jakarta EE: authentication and authorization</li>
                    <li>Deploying and hosting Spring Boot/Jakarta EE applications on the web</li>
                    <li>Best practices for back-end development: performance, scalability, and maintainability</li>
                    <li>Debugging and troubleshooting common issues in Spring Boot/Jakarta EE development</li>
                    <li>Version control and collaboration using Git and GitHub</li>
                    <li>Integrating with other Java tools and libraries</li>
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
                        <p><strong>Training Cost:- ₹ 6000/-</strong></p>
                        <button className="btn btn-primary px-5 py-2 primary-btn">Dureation: 6-8 Weeks</button> &nbsp;
                        <Link to="/payment"><button className="btn btn-primary px-5 py-2 primary-btn">Buy Now</button></Link> &nbsp;
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

export default Java_Backend
