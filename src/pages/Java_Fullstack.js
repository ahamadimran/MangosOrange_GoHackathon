import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Java_Fullstack = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
        <div className="evebanner">
        <img src="img/banner/full-stack-development.png" alt=""/>
      </div>
        
            <div className="container">
                <div className="row">
                    <div className="aboutsection col-lg-7">
                        <h1 class="text-center p-3 m-2">Full Stack Development</h1>
                        <p>Full stack development is a complex and rapidly evolving field that requires a 
                            broad range of skills and knowledge. However, it can also be a rewarding and 
                            lucrative career path for those who are passionate about web development and enjoy 
                            working on both the front-end and back-end of applications. <br/>
                        </p>
                        <p>Students receive a thorough introduction to database and full stack development 
                            in this course. With the technical understanding of front-end and back-end 
                            programming, students will discover the nuances of data structures and algorithms.
                        </p> 
                    </div>
                    <div className="imgofabout col-lg-5">
                        <img className="imgofabout" src="img/courses/full-stack.png" alt="Dev"/>
                    </div>
                </div>
            </div>

    <div className="container">
        <div className="row justify-content-center">
            <div className="m-2 col-lg-5 p-3 shadow">
            <h2  class="text-center m-2">Coverage</h2>
                <p>Full Stack Development is a comprehensive course that covers all aspects of web development, 
                    from front-end to back-end, to equip learners with the skills required to build end-to-end 
                    web applications. This course aims to provide learners with an understanding of the 
                    technologies, tools, and frameworks used in full stack development and hands-on experience 
                    in building web applications, topics that are typically covered: <br/>
                </p>
                <h3>Introduction to Web Development</h3>
                <ul>
                    <li>Web architecture and protocols</li>
                    <li>Client-server model</li>
                    <li>Basic web technologies such as HTML, CSS, and JavaScript</li>
                </ul>
                <h3>Front-End Development</h3>
                <ul>
                    <li>Introduction to front-end frameworks such as React and Angular</li>
                    <li>Responsive design and user experience</li>
                    <li>Handling user input and events</li>
                    <li>Interfacing with APIs</li>
                </ul>
                <h3>Back-End Development</h3>
                <ul>
                    <li>Server-side languages such as Node.js, ASP.NET</li>
                    <li>Relational and non-relational databases such as MySQL, MongoDB</li>
                    <li>Web servers and RESTful APIs</li>
                    <li>Security and authentication</li>
                </ul>
                <h3>Deployment</h3>
                <ul>
                    <li>Deploying web applications</li>
                    <li>Version control using Git</li>
                </ul>
                <h3>Project Work</h3>
                <ul>
                    <li>Working on a real-world full stack development project in a team environment</li>
                    <li>Applying concepts learned throughout the course to build a fully functional web application</li>
                </ul>
            </div>
            <div className=" col-lg-5 m-2 shadow p-3">
                <h2  class="text-center m-2">Learning Outcome</h2>
                    <p>Upon completing a Full Stack Development course, learners should be able to: <br/> </p>
                    <ul>
                        <li>Understand web architecture and protocols, the client-server model, and basic web technologies such as HTML, CSS, and JavaScript.</li>
                        <li>Build user interfaces using front-end frameworks such as React and Angular, and implement responsive design and user experience.</li>
                        <li>Handle user input and events, and interface with APIs to retrieve and display data.</li>
                        <li>Develop server-side applications using server-side languages such as Node.js, asp.net, and manage data using relational and non-relational databases such as MySQL, MongoDB.</li>
                        <li>Implement security and authentication in web applications, and deploy web applications.</li>
                        <li>Use continuous integration and continuous deployment (CI/CD) pipelines to automate the deployment of web applications.</li>
                        <li>Work effectively in a team environment and apply agile development methodologies.</li>
                        <li>Debug and troubleshoot web applications using tools and techniques such as logging, debugging, and profiling.</li>
                        <li>Apply best practices for testing, performance optimization, and mobile web development to ensure the quality and scalability of web applications.</li>
                    </ul>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 text-white text-center m-3 p-3 bg-secondary rounded"><h3>Duration: 6-8 Weeks</h3></div>
                <div class="col-lg-5 text-white text-center m-3 p-3 bg-secondary rounded"><h3>Pricing: 6000</h3></div>
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

export default Java_Fullstack
