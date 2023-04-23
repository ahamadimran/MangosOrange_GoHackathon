import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Node_Backend = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
        <div className="evebanner">
        <img src="img/banner/Node.jpg" alt=""/>
      </div>
        
      <div className="container">
                <div className="row">
                    <div className="aboutsection col-lg-1"></div>
                    <div className="aboutsection col-lg-10">
                        <h1 class="text-center p-3 m-2">NODE.JS</h1>
                        <p>Learn the popular server-side JavaScript runtime that allows you to build scalable and high-performance applications. In this course, you'll learn the fundamentals of Node.js, including working with the Node.js event loop, asynchronous programming, and the Node.js module system. You'll also learn how to work with Node.js frameworks and libraries such as Express and Socket.io, and how to use Node.js for database connectivity with MongoDB and other databases. Additionally, you'll learn how to use Node.js for real-time communication with WebSockets, how to build RESTful APIs, and how to deploy Node.js applications to the cloud with platforms like AWS and Heroku. By the end of the course, you'll have the skills to start building your own Node.js applications and working on real-world Node.js projects.</p>
                    </div>
                    <div className="aboutsection col-lg-1"></div>
                </div>
            </div>

    <div className="container">
        <div className="row justify-content-center">
            <div className="m-2 col-lg-5 p-3 shadow">
            <h2  class="text-center m-2">Coverage</h2>
                <ul>
                    <li>Introduction to back-end development using Node.js</li>
                    <li>Setting up a development environment with Node.js and npm</li>
                    <li>JavaScript basics: variables, data types, operators, and functions</li>
                    <li>Asynchronous programming with callbacks, promises, and async/await</li>
                    <li>Node.js modules: CommonJS and ES modules</li>
                    <li>Introduction to web frameworks: Express and Nest.js</li>
                    <li>Building a back-end with Express/Nest.js: routing, controllers, and models</li>
                    <li>Handling data with MongoDB/Mongoose or SQL/Sequelize in Express/Nest.js</li>
                    <li>Creating templates with EJS/Pug in Express/Nest.js</li>
                    <li>Creating APIs with Express/Nest.js: RESTful web services, Swagger, and JSON</li>
                    <li>Implementing security in Express/Nest.js: authentication and authorization</li>
                    <li>Deploying and hosting Express/Nest.js applications on the web</li>
                    <li>Best practices for back-end development: performance, scalability, and maintainability</li>
                    <li>Debugging and troubleshooting common issues in Express/Nest.js development</li>
                    <li>Version control and collaboration using Git and GitHub</li>
                    <li>Integrating with other Node.js tools and libraries</li>
                </ul>
            </div>
            <div className=" col-lg-5 m-2 shadow p-3">
                <h2  class="text-center m-2">Learning Outcome</h2>
                <p>Upon completion of this course, students will be able to develop scalable and high-performance web applications using Node.js. They will have a solid understanding of Node.js's event-driven architecture, asynchronous programming, and popular frameworks such as Express.js and Socket.IO. Additionally, students will have experience working with databases, RESTful APIs, and server-side rendering. They will also be proficient in working with web development tools such as Git, Docker, and AWS. By the end of the course, students will have developed several web applications using Node.js and be able to effectively collaborate with other developers.</p>
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

export default Node_Backend
