import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const PHP_MYSQL_Fullstack = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/php-mysql.jpg" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Php, MySql Server</h2>
                        <p>Learn the fundamentals of PHP programming language and how to work with MS SQL Server 
                            to store and retrieve data. In this course, you'll learn the basics of PHP 
                            programming language and how to use it for server-side web development. You'll also 
                            learn how to use MS SQL Server to store and retrieve data, and how to perform basic 
                            CRUD (Create, Read, Update, Delete) operations on databases using PHP. Additionally, 
                            you'll learn how to build web applications using PHP and MS SQL Server, and how to 
                            secure your applications against common web vulnerabilities. By the end of the 
                            course, you'll have the skills to start building your own PHP applications and 
                            working on real-world projects using MS SQL Server.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/php-mysql.png' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>PHP: syntax, data types, functions, and control flow</li>
                            <li>Laravel: web framework for back-end development</li>
                            <li>Eloquent: ORM (Object Relational Mapping) for database access</li>
                            <li>MS SQL Server: Relational database management system for structured data</li>
                            <li>HTML: tags, attributes, and semantic markup</li>
                            <li>CSS: selectors, properties, and box model</li>
                            <li>JavaScript: variables, functions, and control flow</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Bootstrap: components, grids, and responsive design</li>
                            <li>Front-end frameworks: Angular, React, and Vue</li>
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
                        <p>Upon completion of this course, students will be able to develop dynamic web 
                            applications using PHP and a database management system (DBMS) such as Microsoft 
                            SQL Server. They will have a solid understanding of front-end web development 
                            concepts such as HTML, CSS, and JavaScript, as well as server-side scripting and 
                            frameworks such as Laravel or CodeIgniter. Additionally, students will have 
                            experience working with relational databases such as MS SQL Server, enabling them 
                            to design and implement efficient database models. They will also be proficient in 
                            working with web development tools such as Git and Visual Studio Code or PHPStorm. 
                            By the end of the course, students will have developed several web applications and 
                            be able to effectively collaborate with other developers using Git for version control.
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

export default PHP_MYSQL_Fullstack
