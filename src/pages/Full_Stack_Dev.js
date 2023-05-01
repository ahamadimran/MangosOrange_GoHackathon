import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Full_Stack_Dev = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/full-stack-development.png" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Full Stack Development</h2>
                        <p>Full stack development is a complex and rapidly evolving field that requires a 
                            broad range of skills and knowledge. However, it can also be a rewarding and 
                            lucrative career path for those who are passionate about web development and enjoy 
                            working on both the front-end and back-end of applications. <br />
                        </p>
                        <p>Students receive a thorough introduction to database and full stack development 
                            in this course. With the technical understanding of front-end and back-end 
                            programming, students will discover the nuances of data structures and algorithms.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/full-stack.png' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-12'>
                        <h2>Course Description</h2>
                        <p>Full Stack Development is a comprehensive course that covers all aspects of web development, 
                           from front-end to back-end, to equip learners with the skills required to build end-to-end 
                           web applications. This course aims to provide learners with an understanding of the 
                           technologies, tools, and frameworks used in full stack development and hands-on experience 
                           in building web applications, topics that are typically covered:
                        </p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <strong>Introduction to Web Development</strong>
                        <ul>
                            <li>Web architecture and protocols</li>
                            <li>Client-server model</li>
                            <li>Basic web technologies such as HTML, CSS, and JavaScript</li>
                        </ul>
                        <strong>Front-End Development</strong>
                        <ul>
                            <li>Introduction to front-end frameworks such as React and Angular</li>
                            <li>Responsive design and user experience</li>
                            <li>Handling user input and events</li>
                            <li>Interfacing with APIs</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <strong>Back-End Development</strong>
                        <ul>
                            <li>Server-side languages such as Node.js, ASP.NET</li>
                            <li>Relational and non-relational databases such as MySQL, MongoDB</li>
                            <li>Web servers and RESTful APIs</li>
                            <li>Security and authentication</li>
                        </ul>
                        <strong>Project Work</strong>
                        <ul>
                            <li>Working on a real-world full stack development project in a team environment</li>
                            <li>Applying concepts learned throughout the course to build a fully functional web application</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completing a Full Stack Development course, learners should be able to: <br /> </p>
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
                        </ul> <br/>
                        <button className="btn btn-primary px-5 py-2 primary-btn">Dureation: 2-6 Weeks</button> &nbsp;
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

export default Full_Stack_Dev
