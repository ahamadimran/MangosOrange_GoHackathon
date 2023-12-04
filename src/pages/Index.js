import React, { Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import {NavLink} from 'react-router-dom';
import ReactGA from 'react-ga4';

const index = () => {
    ReactGA.initialize("G-RYHT696S35");
  return (
    <Fragment>
        <Menu />
    
    <section className="section-0">
        <div className="container">
            <div className="row">
                <div className="col-lg-7  bannertext">
                    <h1>GOHACKATHON</h1> <br/>
                    <h6>Presents</h6>
                    <h3><strong>FullStack Web Development Internship</strong></h3>
                    <p><strong>Collaborate, Innovate, and Hack Your Way to Success!</strong><br />
                        We are trying to build a community where everyone can connect, learn, and grow together.
                    </p> <br /> 
                    <NavLink to="https://forms.gle/vxWJZwdpfURqbUgM7"><button className="btn btn-primary px-5 py-2 primary-btn">Register Now</button></NavLink>
                </div>
                <div className="col-lg-5 bannertext">
                    <img src="img/development2" alt="Fullstack Web Development" />
                </div>
            </div>
        </div>
    </section>
    
    <section className="section-2  p-0">
        <div className="purchase text-center">
            <h2>Empowering Your Vision</h2>
            <p className="text-secondary">Empowering Your Digital Vision with Cutting-Edge Solutions</p>
        </div>

        <div className='container'>
            <div class="row">

                <div class="col-sm-3">
                    <div class="card card-section">
                        <a href="/software-development" style={{textDecoration: 'none', color: 'black'}}>
                            <div class="card-body">
                                <img src='img/resources/web-icon.png' alt='Web Development'></img>
                                <h5 class="card-title">Web</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card card-section">
                        <a href="/software-development" style={{textDecoration: 'none', color: 'black'}}>
                            <div class="card-body">
                                <img src='img/resources/app-icon.png' alt='App Development'></img>
                                <h5 class="card-title">App</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card card-section">
                        <a href="/software-development" style={{textDecoration: 'none', color: 'black'}}>
                            <div class="card-body">
                                <img src='img/resources/cloud-icon.png' alt='Cloud Infrastructure'></img>
                                <h5 class="card-title">Cloud</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card card-section">
                        <a href="/software-development" style={{textDecoration: 'none', color: 'black'}}>
                            <div class="card-body">
                                <img src='img/resources/open-source-icon.png' alt='Open Source Customization'></img>
                                <h5 class="card-title">Open Source</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='container service-section'>
            <div class="row">

                <div class="col-sm-3">
                    <div class="card card-section">
                        <a href="/software-development" style={{textDecoration: 'none', color: 'black'}}>
                            <div class="card-body">
                                <img src='img/resources/custom-software-icon.png' alt='Custom Software Development'></img>
                                <h5 class="card-title">Custom Software</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card card-section">
                        <a href="/software-development" style={{textDecoration: 'none', color: 'black'}}>
                            <div class="card-body">
                                <img src='img/resources/tech-assist-icon.png' alt='Tech Assistance for Startup'></img>
                                <h5 class="card-title">Tech Assistance</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card card-section">
                        <a href="/software-development" style={{textDecoration: 'none', color: 'black'}}>
                            <div class="card-body">
                                <img src='img/resources/ui-ux-icon.png' alt='UI/UX Design'></img>
                                <h5 class="card-title">UI/UX Design</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card card-section">
                        <a href="/software-development" style={{textDecoration: 'none', color: 'black'}}>
                            <div class="card-body">
                                <img src='img/resources/ecommerce-icon.png' alt='E-Commerce Development'></img>
                                <h5 class="card-title">E-Commerce</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        

        {/* <section className="articles">
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/Summer_Training.png" alt="Summer Internship Training" />
                    </figure>
                    <div className="article-body">
                        <h3>Project Based Summer Internship</h3>
                        <p>
                        Summer training programs often provide students with exposure to industry professionals 
                        and companies in their field. This can help students build professional 
                        networks, learn about different career paths, and gain insight into the industry. 
                        </p>
                       <a className="btn btn-primary" href="/training" role="button">Know More</a>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/FullStack.jpg" alt="Project Based Winter Training" />
                    </figure>
                    <div className="article-body">
                        <h3>Project Based Winter Training</h3>
                        <p>
                            Remember, winter training is an excellent opportunity to gain practical experience, 
                            enhance your skills, and expand your professional network during the winter break 
                            from academic studies. Make the most of it by being prepared, engaged, and proactive.
                        </p>
                       <a className="btn btn-primary" href="/training" role="button">Know More</a>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/live-project.jpg" alt="Live Project Training" />
                    </figure>
                    <div className="article-body">
                        <h3>Live Industrial Projects</h3>
                        <p>
                            Work with the company to define the scope of your project. Once you have defined the 
                            scope of your project, start working on it. Keep in touch with the company throughout 
                            the process to ensure that you are meeting their expectations and to ask for help if needed. 
                        </p>
                       <a className="btn btn-primary" href="/training" role="button">Know More</a>
                    </div>
                </div>
            </article>
        </section> */}
    </section>

    <section className="section-2  p-0">
        <div className="purchase text-center">
            <h2>Popular Skills</h2>
            <p className="text-secondary">Learn, Practice, and Test Your Skills with Our Courses</p>
        </div>

        <div className='container'>
            <div className='row'>
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src="img/courses/FullStack.jpg" alt="Card cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Full Stack Development</h5>
                            <p class="card-text">Students receive a thorough introduction to database and full stack 
                            development in this course. With the technical understanding of front-end and back-end 
                            programming, students will discover the nuances of data structures and algorithms.
                            </p>
                        </div>
                        <div class="card-footer">
                            <a className="btn btn-outline-info btn-block" href="/React_Fullstack" role="button">Know More</a>
                        </div>
                    </div>
                    
                    <div class="card">
                        <img class="card-img-top" src="img/courses/cloud-infra.jpg" alt="Card cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Cloud Infrastructures</h5>
                            <p class="card-text">Develop your knowledge of containers, deployment strategies, and 
                            immutable infrastructure. Create a portfolio for cloud computing containing labs, projects, 
                            and a capstone project. Discover AWS, Azure, GCP, and more.
                            </p>
                        </div>
                        <div class="card-footer">
                            <a className="btn btn-outline-info btn-block" href="/aws" role="button">Know More</a>
                        </div>
                    </div>
                    
                    <div class="card">
                        <img class="card-img-top" src="img/courses/digital-marketing.jpg" alt="Card cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Digital Marketing</h5>
                            <p class="card-text">Are you ready to harness the power of Digital Marketing to supercharge 
                            your brand's online presence? Our Comprehensive Digital Marketing Mastery course is designed 
                            to equip you with the skills, strategies, and insights needed to excel in the dynamic world 
                            of digital marketing.
                            </p>
                        </div>
                        <div class="card-footer">
                            <a className="btn btn-outline-info btn-block" href={"URL"} role="button">Know More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <section className="articles">
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/FullStack.jpg" alt="Fullstack Web Development Training" />
                    </figure>
                    <div className="article-body">
                        <h3>Web / App Development</h3>
                        <p>
                            Students receive a thorough introduction to database and full stack development in 
                            this course. With the technical understanding of front-end and back-end programming, 
                            students will discover the nuances of data structures and algorithms. 
                        </p>
                       <a className="btn btn-primary" href="/React_Fullstack" role="button">Know More</a>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/cloud-infra.jpg" alt="Cloud Infrastructure Training" />
                    </figure>
                    <div className="article-body">
                        <h3>Cloud Infrastructures</h3>
                        <p>
                            Develop your knowledge of containers, deployment strategies, and immutable infrastructure. 
                            Create a portfolio for cloud computing containing labs, projects, and a capstone project. 
                            Discover AWS, Azure, GCP, and more. 
                        </p>
                       <a className="btn btn-primary" href="/aws" role="button">Know More</a>
                    </div>
                </div>
            </article>

            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/digital-marketing.jpg" alt="Digital Marketing" />
                    </figure>
                    <div className="article-body">
                        <h3>Digital Marketing</h3>
                        <p>Are you ready to harness the power of Digital Marketing to supercharge your brand's online presence? 
                            Our Comprehensive Digital Marketing Mastery course is designed to equip you with the 
                            skills, strategies, and insights needed to excel in the dynamic world of digital marketing.  
                        </p>
                       <a className="btn btn-primary" href="{URL}" role="button">Know More</a>
                    </div>
                </div>
            </article>
        </section> */}
    </section>

    <section className="section-2  p-0">
        <div className="purchase text-center">
            <h2>Our U.S.P</h2>
            <p className="text-secondary">Elevating Solutions, Empowering Success</p>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='card-deck'>
                    <div className='card'>
                        <div class="bg-dark text-white">
                            <img class="card-img" src="img/resources/budding-tech.jpg" alt="Budding Tech Professionals"/>
                            {/* <div class="card-img-overlay">
                                <h3 class="card-title">Budding Tech Professionals</h3>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href={"URL"}><p class="card-text">Know More</p></a>
                            </div> */}
                        </div>
                    </div>

                    <div className='card'>
                        <div class="bg-dark text-white">
                            <img class="card-img" src="img/resources/startup-tech.jpg" alt="Startup Tech Assistance"/>
                            {/* <div class="card-img-overlay">
                                <h3 class="card-title">Startup Tech Assistance</h3>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href={"URL"}><p class="card-text">Know More</p></a>
                            </div> */}
                        </div>
                    </div>

                    <div className='card'>
                        <div class="bg-dark text-white">
                            <img class="card-img" src="img/resources/hackathon-event.jpg" alt="Startup Tech Assistance"/>
                            {/* <div class="card-img-overlay">
                                <h3 class="card-title">Hackathon Events</h3>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href={"URL"}><p class="card-text">Know More</p></a>
                            </div> */}
                        </div>
                    </div>
                </div>
        
            </div>
        </div> 
    </section>
    

    <section className="section-4">
        <div className="purchase text-center">
            <h2>Corporate and Educational Partners</h2>
            <p className="text-secondary">Some of our collaborations with top Industries and Educational Institutes</p>
        </div>
        <div className='container'>
        <div className="row team">
            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/appsquadz-logo.png" className="img-fluid p-4" alt="Appsquadz Logo" />
                    </div>
                    {/* <div   className="card-body">
                        <h3 className="card-title">AppSquadz</h3>
                        <p className="card-text-index">
                            As a leading Mobile & Web App Development Company, our professional expertise lies 
                            in IoT, Blockchain, web app development, AR/VR, cross-platform. Our dedication and 
                            commitment to 100% client satisfaction is the chief reason for our global presence
                        </p>
                    </div> */}
                </div>
            </div>
            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/MTS.png" className="img-fluid p-4" alt="Migratech Logo" />
                    </div>
                    {/* <div   className="card-body">
                        <h3 className="card-title">Migratech</h3>
                        <p className="card-text-index">
                            we been delivering software development and related IT services.Our professional team 
                            works closely with you to understand your exact requirement and respond with the best 
                            eye-catching web-designs and most innovative web development solutions for you.
                        </p>
                    </div> */}
                </div>
            </div>
            
            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/gennext-logo.png" className="img-fluid p-4" alt="Gennext Logo" />
                    </div>
                    {/* <div className="card-body">
                        <h3 className="card-title">GenNext</h3>
                        <p className="card-text-index">
                            Gennext Is An Emerging Leader Of Next-Generation Information Technology Services 
                            And Solutions. To Provide Innovative Solutions To Our Customers Through Best-In-Class 
                            Technology And Industry Solutions. We Leverage Our Domain Expertise To Deliver.
                        </p>
                    </div> */}
                </div>
            </div>

            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/collaborator1.png" className="img-fluid p-4" alt="BTKIT Logo" />
                    </div>
                    {/* <div   className="card-body">
                        <h3 className="card-title">BTKIT DWARAHAT</h3>
                        <p className="card-text-index">
                            GoHackathon works with BTKIT's Training and Placement cell to provide technical and 
                            professional exposure, enhance student skills and bring better job opportunities to 
                            the institute.
                           <a className="btn btn-primary" href="https://kecua.ac.in/" role="button">Know More</a>
                        </p>
                    </div> */}
                </div>
            </div>

            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/graphic-era-logo.png" className="img-fluid p-4" alt="Graphic Era Logo" />
                    </div>
                    {/* <div className="card-body">
                        <h3 className="card-title">GRAPHIC ERA</h3>
                        <p className="card-text-index">
                            GoHackathon works with Graphic Era Hill University to provide research platform for students, industry, alumni, 
                            start-ups, small and medium enterprises, faculty and researchers by helping them 
                            technology innovations.
                           <a className="btn btn-primary" href="https://graphicerauniversity.co.in/" role="button">Know More</a>
                        </p>
                    </div> */}
                </div>
            </div>

            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/coer-logo.png" className="img-fluid p-4" alt="Coer Logo" />
                    </div>
                    {/* <div className="card-body">
                        <h3 className="card-title">COER UNIVERSITY</h3>
                        <p className="card-text-index">
                            GoHackathon works with Coer University to promote and enhance skill development and employment generation 
                            activities with relevant skills & On the Job Training required for making them employable.
                           <a className="btn btn-primary" href="https://coer.ac.in/" role="button">Know More</a>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
        </div>
    </section>
    <hr/>

    <div className="container">
        <div className="row">
            <div className="aboutsection col-lg-7">
                <h2>About GoHackathon</h2>
                <p>Go Hackathon comprises of eminent Industry professionals, educators and students meant to
                    nurture talent among budding tech professional. Industry today is looking for talented 
                    students who are equipped and experience with advanced skills, software, attitude and 
                    updated industry best practices. <br />
                </p>
                <p>We create an eco-system of industry academia partnership and help in continuous and sustainable 
                    development of innovative ideas, which are impactful for the growing economy and society. 
                    Go hackathon thrives to provide best nurturing, mentorship, skills and professional 
                    opportunities to its members and participants.We conduct series of events, seminars, 
                    hackathons, internships and Projects. <br />
                <a href="/about"><strong>Know More</strong></a>
                </p>  
            </div>
            <div className="imgofabout col-lg-5">
                <img className="imgofabout" src="img/resources/about_img.jpg" alt="Web Development Training" />
            </div>
        </div>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
    
   <Footer />
    </Fragment>
  )
}

export default index;
