import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HTML_CSS_Js_BS_AN_SQL_fullstack = () => {
  return (
    <Fragment>
        <div className='aspnet-fullstack'>
            <Helmet>
                <title>Learn HTML, CSS, JS, Bootstrap, Angular, SQL</title>
                <meta name="description" content="Master the complete web development stack with GoHackathon HTML, CSS, JavaScript, Bootstrap, Angular, and SQL Fullstack course."/>
                <link rel='canonical' href='http://gohackathon.in/html-css-js-angular-aspnet-fullstack'></link>
            </Helmet>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/aspnet-mssql.png" alt="Tailwind Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>HTML,CSS, JS, ASP.NET, SQL SERVER</h2>
                        <p>Learn the fundamentals of web development and how to create dynamic web applications 
                            using HTML, CSS, JavaScript, Bootstrap, ASP.Net, and Sql Server. In this course, you'll 
                            learn the basics of front-end web development, including HTML markup, CSS styling, 
                            and JavaScript programming. You'll also learn how to use Bootstrap to create 
                            responsive and mobile-friendly web designs. Additionally, you'll learn how to create 
                            back-end web applications using ASP.Net and connect them to a MySQL database to 
                            store and retrieve data. By the end of the course, you'll have the skills to start 
                            building your own web applications and working on real-world web development 
                            projects.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/hcjbam.jpeg' alt='Tailwind'></img>
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
                            <li>ASP.NET Razor View Engine</li>
                            <li>ASP.NET Web Forms or ASP.NET MVC</li>
                        </ul>
                        <strong>3. Back-End Development:</strong>
                        <ul>
                            <li>Employing the ASP.NET framework, including ASP.NET Web API or ASP.NET MVC, for creating APIs and handling requests.</li>
                            <li>ADO.NET: Leveraging ADO.NET to establish connections between the ASP.NET application and the SQL Server database</li>
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
                            <li>Deploying the ASP.NET application on IIS, the web server provided by Microsoft.</li>
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
                            <li>Strong grasp of server-side programming languages like ASP.NET</li>
                            <li>Experience in building server-side applications and APIs using frameworks</li>
                            <li>Proficiency in working with databases, including designing data models, writing queries</li>
                            <li>Competence in using Git for version control, including creating branches, merging changes, and collaborating with other developers.</li>
                            <li>Knowledge of best practices for securing web applications, including authentication, authorization, and input validation.</li>
                            <li>Understanding of different types of testing, including unit testing, integration testing, and end-to-end testing.</li>
                            <li>Knowledge of different deployment strategies and environments.</li>
                            <li>Ability to deploy web applications to cloud platforms like AWS, Azure, or Google Cloud.</li>
                        </ul>
                        <br/>
                        <p><strong>Training Cost:- ₹ 15,000/-</strong></p>
                        <button className="btn btn-primary">Duration: 6-7 Months</button> &nbsp;
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

export default HTML_CSS_Js_BS_AN_SQL_fullstack