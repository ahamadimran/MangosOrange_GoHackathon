import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const React_Fullstack = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/react-node-mongo.jpg" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>REACT, NODE.JS, MONGO DB</h2>
                        <p>Learn the fundamentals of modern web development with React, NodeJS, and MongoDB. 
                            In this course, you'll learn how to build dynamic and responsive user interfaces 
                            using React, a popular JavaScript library for building front-end web applications. 
                            You'll also learn how to use NodeJS, a powerful JavaScript runtime, to build 
                            back-end web applications and APIs. Additionally, you'll learn how to use MongoDB, 
                            a popular NoSQL database, to store and retrieve data from your applications. By 
                            the end of the course, you'll have the skills to build full-stack web applications 
                            using React, NodeJS, and MongoDB, and you'll be ready to work on real-world web 
                            development projects.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/react-node-mdb.jpeg' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>JavaScript: syntax, data types, functions, and control flow</li>
                    <li>NodeJS: server-side JavaScript runtime environment</li>
                    <li>Express: web framework for back-end development</li>
                    <li>MongoDB: NoSQL database for document-oriented storage</li>
                    <li>Mongoose: ORM (Object Relational Mapping) for database access</li>
                    <li>React: front-end JavaScript library for building user interfaces</li>
                    <li>Redux: state management library for React applications</li>
                    <li>HTML: tags, attributes, and semantic markup</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>CSS: selectors, properties, and box model</li>
                    <li>Material-UI: component library for React with pre-built UI elements</li>
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
                        <p>Upon completion of this course, students will be able to develop scalable and 
                            responsive web applications using React, NodeJS, and a NoSQL database management 
                            system (DBMS) such as MongoDB. They will have a solid understanding of front-end 
                            web development concepts such as HTML, CSS, and JavaScript, as well as server-side 
                            scripting and frameworks such as Express or NestJS. Additionally, students will 
                            have experience working with NoSQL databases such as MongoDB, enabling them to 
                            design and implement efficient database models. They will also be proficient in 
                            working with web development tools such as Git and VS Code or WebStorm. By the 
                            end of the course, students will have developed several web applications and be 
                            able to effectively collaborate with other developers using Git for version control.
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

export default React_Fullstack
