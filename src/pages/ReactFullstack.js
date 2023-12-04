import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const React_Fullstack = () => {
  return (
    <Fragment>
        <div className='react-fullstack'>
            <Helmet>
                <title>Unlock React Expertise: Join GoHackathon's Exclusive Course</title>
                <meta name="description" content="Join GoHackathon React Course and level up your development skills. Explore React.js, build dynamic web applications, and advance your career."/>
                <link rel='canonical' href='http://gohackathon.in/react-fullstack'></link>
            </Helmet>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/react-node-mssql.png" alt="React Fullstack Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>HTML, CSS, JS, REACT, NODE.JS, MS-SQL</h2>
                        <p>Learn the fundamentals of modern web development with React, NodeJS, and MSSQL. 
                            In this course, you'll learn how to build dynamic and responsive user interfaces 
                            using React, a popular JavaScript library for building front-end web applications. 
                            You'll also learn how to use NodeJS, a powerful JavaScript runtime, to build 
                            back-end web applications and APIs. Additionally, you'll learn how to use MS Sql, 
                            a popular database, to store and retrieve data from your applications. By 
                            the end of the course, you'll have the skills to build full-stack web applications 
                            using React, NodeJS, and Ms Sql, and you'll be ready to work on real-world web 
                            development projects.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/Full-Stack-Dev.png' alt='React Development'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h2 className='coursecoverage'>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <strong>1. Introduction to Web Development:</strong>
                        <ul>
                            <li>Overview of web development technologies and concepts</li>
                            <li>Client-side vs. server-side development</li>
                            <li>Introduction to the three-tier architecture (front end, back end, and database)</li>
                        </ul>
                        <strong>2. Front-End Development:</strong>
                        <ul>
                            <li>HTML5: Semantic markup, forms, multimedia, and APIs</li>
                            <li>CSS3: Styling, layout techniques, responsive design, and CSS frameworks</li>
                            <li> JavaScript: Basics, DOM manipulation, event handling, AJAX, and JSON</li>
                            <li>Introduction to front-end frameworks like React</li>
                            <li>Web accessibility and best practices</li>
                        </ul>
                        <strong>3. Back-End Development:</strong>
                        <ul>
                            <li>Introduction to server-side programming languages like JavaScript (Node.js)</li>
                            <li>Server-side frameworks (e.g., Express.js)</li>
                            <li>Building RESTful APIs</li>
                            <li>Authentication and authorization</li>
                            <li>Database fundamentals (relational and non-relational databases)</li>
                            <li>Database management with SQL (e.g., MS-SQL)</li>
                            <li>Server deployment and hosting</li>
                        </ul>
                        <strong>4. Database Management:</strong>
                        <ul>
                            <li>Relational databases: SQL, data modeling, and querying with SQL</li>
                            <li>Database integration with the back-end</li>
                        </ul>
                        <strong>5. Version Control and Collaboration:</strong>
                        <ul>
                            <li>Git and GitHub/GitLab: Version control, branching, merging, and collaboration workflows</li>
                            <li>Working with remote repositories</li>
                            <li>Collaborative development using Git</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <strong>6. Web Security:</strong>
                        <ul>
                            <li>Common web security threats and vulnerabilities</li>
                            <li>Implementing secure authentication and authorization mechanisms</li>
                            <li>Input validation and sanitization</li>
                            <li>Security best practices for handling user data</li>
                        </ul>
                        <strong>7. Web Application Testing:</strong>
                        <ul>
                            <li>Introduction to testing methodologies and techniques</li>
                            <li>Unit testing, integration testing, and end-to-end testing</li>
                            <li>Testing frameworks</li>
                            <li>Test-driven development (TDD) and behavior-driven development (BDD)</li>
                        </ul>
                        <strong>8. Deployment and DevOps:</strong>
                        <ul>
                            <li>Deployment strategies and environments</li>
                            <li>Containerization using Docker</li>
                            <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
                            <li>Cloud platforms (e.g., AWS, Azure, Google Cloud)</li>
                            <li>Monitoring and logging</li>
                        </ul>
                        <strong>9. Project Development:</strong>
                        <ul>
                            <li>Building a full stack web application from scratch</li>
                            <li>Applying the learned concepts and technologies to develop a real-world project</li>
                            <li>Project planning, architecture, and development methodologies</li>
                            <li>Collaborative project management tools</li>
                        </ul>
                        <strong>10. Emerging Technologies:</strong>
                        <ul>
                            <li>Introduction to emerging technologies and trends in web development</li>
                            <li>Mobile development and responsive design</li>
                            <li>Progressive Web Apps (PWAs)</li>
                            <li>Serverless architecture and microservices</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <ul>
                            <li>Ability to create interactive and responsive user interfaces using HTML, CSS, and JavaScript.</li>
                            <li>Understanding of front-end frameworks and libraries like React</li>
                            <li>Strong grasp of server-side programming languages like JavaScript (Node.js)</li>
                            <li>Experience in building server-side applications and APIs using frameworks</li>
                            <li>Proficiency in working with databases, including designing data models, writing queries</li>
                            <li>Competence in using Git for version control, including creating branches, merging changes, and collaborating with other developers.</li>
                            <li>Knowledge of best practices for securing web applications, including authentication, authorization, and input validation.</li>
                            <li>Understanding of different types of testing, including unit testing, integration testing, and end-to-end testing.</li>
                            <li>Knowledge of different deployment strategies and environments.</li>
                            <li>Ability to deploy web applications to cloud platforms like AWS, Azure, or Google Cloud.</li>
                        </ul>
                        <br/>
                        <p><strong>Training Cost:- ₹ 30,000/-</strong></p>
                        <button className="btn btn-primary">Duration: 6 Months</button> &nbsp;
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
        </div>
    </Fragment>
  )
}

export default React_Fullstack
