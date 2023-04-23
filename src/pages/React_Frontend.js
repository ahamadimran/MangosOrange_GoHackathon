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
        
      <div className="container">
                <div className="row">
                    <div className="aboutsection col-lg-1"></div>
                    <div className="aboutsection col-lg-10">
                        <h1 class="text-center p-3 m-2">REACT</h1>
                        <p>Learn the popular JavaScript library used to build dynamic and responsive user interfaces. In this course, you'll learn the fundamentals of React, including JSX syntax, components, state, and props. You'll also learn how to work with React Router, Redux, and React hooks, and how to use third-party libraries and frameworks with React, such as Material UI and Redux Saga. Additionally, you'll learn how to use React to build web applications, mobile applications with React Native, and server-side rendering with Next.js. By the end of the course, you'll have the skills to start building your own React applications and working on real-world React projects.</p>
                    </div>
                    <div className="aboutsection col-lg-1"></div>
                </div>
            </div>

    <div className="container">
        <div className="row justify-content-center">
            <div className="m-2 col-lg-5 p-3 shadow">
            <h2  class="text-center m-2">Coverage</h2>
                <ul>
                    <li>Setting up a development environment with Node.js and npm</li>
                    <li>HTML basics: document structure, tags, attributes, and semantics</li>
                    <li>CSS basics: selectors, properties, values, and cascading</li>
                    <li>JavaScript basics: variables, data types, operators, and functions</li>
                    <li>Introduction to React: components, state, and props</li>
                    <li>Building a front-end with React: JSX, events, and forms</li>
                    <li>Using third-party libraries and frameworks with React: Redux, Material UI, and Bootstrap</li>
                    <li>Styling in React: CSS-in-JS and CSS modules</li>
                    <li>Advanced React concepts: context, hooks, and custom hooks</li>
                    <li>Testing React components: Jest and Enzyme</li>
                    <li>Building a full-stack application with React and a back-end API</li>
                    <li>Best practices for web development: accessibility, usability, and performance</li>
                    <li>Debugging and troubleshooting common issues in React development</li>
                    <li>Version control and collaboration using Git and GitHub</li>
                    <li>Deploying and hosting React applications on the web</li>
                </ul>
            </div>
            <div className=" col-lg-5 m-2 shadow p-3">
                <h2  class="text-center m-2">Learning Outcome</h2>
                <p>Upon completion of this course, students will be able to develop scalable and interactive web applications using React. They will have a solid understanding of React's core concepts, including components, state, and props, and will be able to use React's ecosystem of tools and libraries to efficiently build user interfaces. Additionally, students will have experience working with popular front-end libraries and frameworks such as Redux and Next.js, enabling them to quickly build complex applications. By the end of the course, students will have developed several React applications and be able to effectively collaborate with other developers using Git for version control.</p>
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

export default React_Frontend
