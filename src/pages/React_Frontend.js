import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const React_Frontend = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/react.jpg" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>React</h2>
                        <p>Learn the popular JavaScript library used to build dynamic and responsive user 
                            interfaces. In this course, you'll learn the fundamentals of React, including 
                            JSX syntax, components, state, and props. You'll also learn how to work with 
                            React Router, Redux, and React hooks, and how to use third-party libraries and 
                            frameworks with React, such as Material UI and Redux Saga. Additionally, you'll 
                            learn how to use React to build web applications, mobile applications with React 
                            Native, and server-side rendering with Next.js. By the end of the course, you'll 
                            have the skills to start building your own React applications and working on 
                            real-world React projects. <br />
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/react-js.png' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Setting up a development environment with Node.js and npm</li>
                            <li>HTML basics: document structure, tags, attributes, and semantics</li>
                            <li>CSS basics: selectors, properties, values, and cascading</li>
                            <li>JavaScript basics: variables, data types, operators, and functions</li>
                            <li>Introduction to React: components, state, and props</li>
                            <li>Building a front-end with React: JSX, events, and forms</li>
                            <li>Using third-party libraries and frameworks with React: Redux, Material UI, and Bootstrap</li>
                            <li>Styling in React: CSS-in-JS and CSS modules</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Advanced React concepts: context, hooks, and custom hooks</li>
                            <li>Testing React components: Jest and Enzyme</li>
                            <li>Building a full-stack application with React and a back-end API</li>
                            <li>Best practices for web development: accessibility, usability, and performance</li>
                            <li>Debugging and troubleshooting common issues in React development</li>
                            <li>Version control and collaboration using Git and GitHub</li>
                            <li>Deploying and hosting React applications on the web</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will be able to develop scalable and 
                            interactive web applications using React. They will have a solid understanding 
                            of React's core concepts, including components, state, and props, and will be 
                            able to use React's ecosystem of tools and libraries to efficiently build user 
                            interfaces. Additionally, students will have experience working with popular 
                            front-end libraries and frameworks such as Redux and Next.js, enabling them to 
                            quickly build complex applications. By the end of the course, students will have 
                            developed several React applications and be able to effectively collaborate with 
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

export default React_Frontend
