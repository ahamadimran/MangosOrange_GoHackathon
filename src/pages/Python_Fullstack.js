import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Python_Fullstack = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/python-mongodb.jpg" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Python,  Mongo DB/ MS Sql Server</h2>
                        <p>Learn the fundamentals of Python programming language and how to work with MongoDB or 
                            MS SQL Server to store and retrieve data. In this course, you'll learn the basics 
                            of Python programming language and how to use popular Python libraries such as 
                            NumPy, Pandas, and Matplotlib for data analysis and visualization. You'll also learn 
                            how to use MongoDB or MS SQL Server to store and retrieve data, and how to perform 
                            basic CRUD (Create, Read, Update, Delete) operations on databases. Additionally, 
                            you'll learn how to use Python with MongoDB or MS SQL Server to build web 
                            applications and perform advanced data analysis. By the end of the course, 
                            you'll have the skills to start building your own Python applications and working 
                            on real-world projects using MongoDB or MS SQL Server.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/python-sql.jpeg' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Python: syntax, data types, functions, and control flow</li>
                    <li>Flask/Django: web frameworks for back-end development</li>
                    <li>SQLAlchemy: ORM (Object Relational Mapping) for database access</li>
                    <li>MongoDB: NoSQL database for document-oriented storage</li>
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
                    <li>Restful API design: endpoints, resources, and authentication</li>
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
                        <p>Upon completion of this course, students will be able to develop scalable web 
                            applications using Python and a database management system (DBMS) such as MongoDB 
                            or Microsoft SQL Server. They will have a solid understanding of front-end web 
                            development concepts such as HTML, CSS, and JavaScript, as well as server-side 
                            scripting and frameworks such as Flask or Django. Additionally, students will have 
                            experience working with NoSQL databases such as MongoDB or relational databases 
                            such as MS SQL Server, enabling them to design and implement efficient database 
                            models. They will also be proficient in working with web development tools such as 
                            Git and PyCharm or Visual Studio. By the end of the course, students will have 
                            developed several web applications and be able to effectively collaborate with 
                            other developers using Git for version control.
                        </p> <br/>
                        <button className="btn btn-primary px-5 py-2 primary-btn">Dureation: 6-8 Weeks</button> &nbsp;
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

export default Python_Fullstack
