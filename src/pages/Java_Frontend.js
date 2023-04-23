import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Java_Frontend = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
        <div className="evebanner">
        <img src="img/banner/full-stack-development.png" alt=""/>
      </div>
        
      <div className="container">
                <div className="row">
                    <div className="aboutsection col-lg-1"></div>
                    <div className="aboutsection col-lg-10">
                        <h1 class="text-center p-3 m-2">JAVA</h1>
                        <p>Learn one of the most popular programming languages used in a wide variety of applications, from building Android apps to developing enterprise-level software. In this course, you'll learn the fundamentals of Java syntax, data types, and control structures, as well as object-oriented programming principles, such as inheritance, encapsulation, and polymorphism. You'll also learn how to work with Java libraries and frameworks, such as Spring and Hibernate, and how to use Java for web development with technologies such as Servlets and JSP. By the end of the course, you'll have the skills to start building your own Java applications and working on real-world Java projects.</p>
                    </div>
                    <div className="aboutsection col-lg-1"></div>
                </div>
            </div>

    <div className="container">
        <div className="row justify-content-center">
            <div className="m-2 col-lg-5 p-3 shadow">
            <h2  class="text-center m-2">Coverage</h2>
                <ul>
                    <li>Introduction to web development using Java</li>
                    <li>Setting up a development environment with Java and Eclipse/IntelliJ</li>
                    <li>HTML basics: document structure, tags, attributes, and semantics</li>
                    <li>CSS basics: selectors, properties, values, and cascading</li>
                    <li>JavaScript basics: variables, data types, operators, and functions</li>
                    <li>Introduction to web frameworks: Spring and JavaServer Faces (JSF)</li>
                    <li>Building a back-end with Spring/JSF: routing, controllers, and models</li>
                    <li>Handling data with Spring/JSF: JDBC, JPA, and Hibernate</li>
                    <li>Creating templates with Thymeleaf in Spring/JSF</li>
                    <li>Creating and handling forms in Spring/JSF</li>
                    <li>Building a front-end with HTML, CSS, and JavaScript</li>
                    <li>Using third-party libraries and frameworks in Spring/JSF</li>
                    <li>Creating RESTful APIs with Spring/JSF</li>
                    <li>Deploying and hosting Spring/JSF applications on the web</li>
                    <li>Best practices for web development: accessibility, usability, and performance</li>
                    <li>Debugging and troubleshooting common issues in web development</li>
                    <li>Version control and collaboration using Git and GitHub</li>
                    <li>Integrating with other Java tools and libraries</li>
                </ul>
            </div>
            <div className=" col-lg-5 m-2 shadow p-3">
                <h2  class="text-center m-2">Learning Outcome</h2>
                <p>Upon completion of this course, students will be able to develop robust and scalable web applications using Java. They will have a solid understanding of Java's syntax, object-oriented programming principles, and popular Java frameworks such as Spring and Hibernate. Additionally, students will have experience working with databases, RESTful APIs, and server-side rendering. By the end of the course, students will have developed several full-stack web applications and be able to effectively collaborate with other developers using Git for version control.</p>
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

export default Java_Frontend
