import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const PHP_backend = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
        <div className="evebanner">
        <img src="img/banner/php.jpg" alt=""/>
      </div>
        
      <div className="container">
                <div className="row">
                    <div className="aboutsection col-lg-1"></div>
                    <div className="aboutsection col-lg-10">
                        <h1 class="text-center p-3 m-2">PHP</h1>
                        <p>Learn the server-side scripting language used to create dynamic and interactive web pages. In this course, you'll learn the fundamentals of PHP syntax, data types, and control structures, as well as how to work with functions, arrays, and objects. You'll also learn how to use PHP to interact with databases, handle user input, and create web forms. In addition, you'll learn how to work with popular PHP frameworks such as Laravel and CodeIgniter, as well as how to use PHP to create APIs and interact with external APIs. Additionally, you'll learn how to use PHP for e-commerce with popular platforms like WooCommerce and Magento. By the end of the course, you'll have the skills to start building your own PHP applications and working on real-world PHP projects.</p>
                    </div>
                    <div className="aboutsection col-lg-1"></div>
                </div>
            </div>

    <div className="container">
        <div className="row justify-content-center">
            <div className="m-2 col-lg-5 p-3 shadow">
            <h2  class="text-center m-2">Coverage</h2>
                <ul>
                    <li>Introduction to back-end development using PHP</li>
                    <li>Setting up a development environment with PHP and Composer</li>
                    <li>PHP basics: variables, data types, operators, and functions</li>
                    <li>Object-oriented programming with PHP: classes, inheritance, and polymorphism</li>
                    <li>Introduction to web frameworks: Laravel and Symfony</li>
                    <li>Building a back-end with Laravel/Symfony: routing, controllers, and models</li>
                    <li>Handling data with Laravel/Symfony: SQL, ORM, and migrations</li>
                    <li>Creating templates with Blade/Twig in Laravel/Symfony</li>
                    <li>Creating APIs with Laravel/Symfony: RESTful web services, Swagger, and JSON</li>
                    <li>Implementing security in Laravel/Symfony: authentication and authorization</li>
                    <li>Deploying and hosting Laravel/Symfony applications on the web</li>
                    <li>Best practices for back-end development: performance, scalability, and maintainability</li>
                    <li>Debugging and troubleshooting common issues in Laravel/Symfony development</li>
                    <li>Version control and collaboration using Git and GitHub</li>
                    <li>Integrating with other PHP tools and libraries</li>
                </ul>
            </div>
            <div className=" col-lg-5 m-2 shadow p-3">
                <h2  class="text-center m-2">Learning Outcome</h2>
                <p>Upon completion of this course, students will be able to develop scalable and secure web applications using PHP. They will have a solid understanding of PHP's syntax, data structures, control structures, and object-oriented programming principles. Additionally, students will have experience working with popular PHP frameworks such as Laravel and Symfony, enabling them to build web applications with database connectivity and user authentication. They will also be proficient in working with web development tools such as Git, Docker, and AWS. By the end of the course, students will have developed several web applications using PHP and be able to effectively collaborate with other developers.</p>
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

export default PHP_backend
