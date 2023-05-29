import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const HTML_CSS_Js_BS_AN_SQL_fullstack = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/aspnet-mssql.png" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>HTML,CSS, JavaScript, BootStrap,  ASP.Net,  MySql</h2>
                        <p>Learn the fundamentals of web development and how to create dynamic web applications 
                            using HTML, CSS, JavaScript, Bootstrap, ASP.Net, and MySQL. In this course, you'll 
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
                        <img className='imgofabout' src='img/courses/hcjbam.jpeg' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>HTML: tags, attributes, and semantic markup</li>
                    <li>CSS: selectors, properties, and box model</li>
                    <li>JavaScript: variables, functions, and control flow</li>
                    <li>Bootstrap: components, grids, and responsive design</li>
                    <li>Front-end frameworks: Angular, React, and Vue</li>
                    <li>ASP.Net: C#, MVC, and Web API</li>
                    <li>Database design: ER modeling, normalization, and schema</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>MySQL: SQL queries, joins, and stored procedures</li>
                    <li>Server-side frameworks: Node.js, Django, and Ruby on Rails</li>
                    <li>RESTful API design: endpoints, resources, and authentication</li>
                    <li>Deployment: hosting, version control, and continuous integration</li>
                    <li>Security: cross-site scripting, cross-site request forgery, and SQL injection</li>
                    <li>Performance optimization: caching, indexing, and load balancing</li>
                    <li>Testing: unit testing, integration testing, and end-to-end testing</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will be able to develop interactive and 
                            responsive web applications using HTML, CSS, JavaScript, and Bootstrap. They will 
                            have a solid understanding of client-side scripting and be able to use popular 
                            JavaScript frameworks and libraries such as jQuery and React. Additionally, 
                            students will have experience working with server-side technologies such as ASP.Net 
                            and be able to create dynamic web pages that interact with a MySQL database. 
                            They will also be proficient in working with web development tools such as Git and 
                            Visual Studio. By the end of the course, students will have developed several web 
                            applications and be able to effectively collaborate with other developers using Git 
                            for version control.
                        </p> <br/>
                        <p><strong>Training Cost:- ₹ 10,000/-</strong></p>
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

export default HTML_CSS_Js_BS_AN_SQL_fullstack