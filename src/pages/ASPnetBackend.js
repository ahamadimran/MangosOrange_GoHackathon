import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ASPnet_Backend = () => {
  return (
    <Fragment>
        <div className='aspnet-backend'>
            <Helmet>
                <title>Elevate Your Backend Skills with ASP.NET</title>
                <meta name="description" content="Join the GoHackathon and dive into the world of backend development with ASP.NET."/>
                <link rel='canonical' href='http://gohackathon.in/aspnet-backend'></link>
            </Helmet>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/asp-net.png" alt="ASP.Net Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>ASP.Net</h2>
                        <p>Learn the popular framework used to build dynamic web applications with the .NET 
                            platform. In this course, you'll learn the fundamentals of ASP.NET, including 
                            building web pages with Razor syntax, working with data using Entity Framework, 
                            and handling user input with forms and validation. You'll also learn how to use 
                            ASP.NET to build APIs, handle authentication and authorization, and deploy your 
                            applications to the cloud with Azure. Additionally, you'll learn how to work with 
                            popular ASP.NET frameworks, such as ASP.NET Core and SignalR. By the end of the 
                            course, you'll have the skills to start building your own ASP.NET applications and 
                            working on real-world ASP.NET projects.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/asp-net.jpg' alt='Asp.Net Training'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2 className='coursecoverage'>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Introduction to back-end development using ASP.NET</li>
                            <li>Setting up a development environment with Visual Studio and .NET Core</li>
                            <li>C# basics: variables, data types, operators, and functions</li>
                            <li>Object-oriented programming with C#: classes, inheritance, and polymorphism</li>
                            <li>Introduction to ASP.NET: web applications, web services, and APIs</li>
                            <li>Building a back-end with ASP.NET: routing, controllers, and models</li>
                            <li>Handling data with ASP.NET: SQL, ORM, and migrations</li>
                            <li>Creating APIs with ASP.NET: RESTful web services, Swagger, and JSON</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Creating templates with Razor in ASP.NET</li>
                            <li>Implementing security in ASP.NET: authentication and authorization</li>
                            <li>Deploying and hosting ASP.NET applications on the web</li>
                            <li>Best practices for back-end development: performance, scalability, and maintainability</li>
                            <li>Debugging and troubleshooting common issues in ASP.NET development</li>
                            <li>Version control and collaboration using Git and GitHub</li>
                            <li>Integrating with other .NET tools and libraries</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will be able to develop scalable and secure 
                            web applications using ASP.NET. They will have a solid understanding of ASP.NET's 
                            core concepts, including .NET Framework, MVC architecture, and C# programming 
                            language. Additionally, students will have experience working with popular ASP.NET 
                            frameworks such as Entity Framework and Identity, enabling them to build web 
                            applications with database connectivity and user authentication. By the end of the 
                            course, students will have developed several web applications using ASP.NET and be 
                            able to effectively collaborate with other developers using Git for version control.
                        </p> <br/>
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

export default ASPnet_Backend
