import React, { Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link, NavLink } from 'react-router-dom';
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
                    <h1>GOHACKATHON</h1>
                    <h6>Presents</h6>
                    <h2><strong>Project Based Summer Internship</strong></h2>
                    <p><strong>Collaborate, Innovate, and Hack Your Way to Success!</strong><br />
                        We are trying to build a community where everyone can connect, learn, and grow together.
                    </p> <br /> 
                    <NavLink to="https://forms.gle/DRSMSzoRDhKqxQ8X7"><button className="btn btn-primary px-5 py-2 primary-btn">REGISTER NOW</button></NavLink>
                    {/* <Link to="/https://forms.gle/DRSMSzoRDhKqxQ8X7"><a href="#">
                        <button className="btn btn-primary px-5 py-2 primary-btn">REGISTER NOW</button>
                    </a></Link> */}
                </div>
                <div className="col-lg-5 bannertext">
                    <img src="img/development2" alt="Internship" />
                </div>
            </div>
        </div>
    </section>
    
    <section className="section-2  p-0">
        <div className="purchase text-center">
            <h1>Budding Tech Professional</h1>
            <p className="text-secondary">
                Learn, Practice, and Test Your Skills with Our Training.
            </p>
        </div>
        <section className="articles">
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/Summer_Training.png" alt="" />
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
                        <img width="368" height="207" src="img/courses/FullStack.jpg" alt="" />
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
                        <img width="368" height="207" src="img/courses/live-project.jpg" alt="" />
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
        </section>
    </section>

    <section className="section-2  p-0">
        <div className="purchase text-center">
            <h1>Popular Courses</h1>
            <p className="text-secondary">
                Learn, Practice, and Test Your Skills with Our courses.
            </p>
        </div>
        <section className="articles">
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/AI&ML.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h3>AI and Machine Learning</h3>
                        <p>
                            This course provides students with a comprehensive introduction to data science and
                             machine learning. Students will learn how to extract insights and knowledge from 
                             large data sets using popular data analysis and machine learning techniques. 
                        </p>
                       <a className="btn btn-primary" href="/ai_machine_learning" role="button">Know More</a>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/FullStack.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h3>Full Stack Development</h3>
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
                        <img width="368" height="207" src="img/courses/cloud-infra.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h3>Cloud Infrastructures</h3>
                        <p>
                            Develop your knowledge of containers, deployment strategies, and immutable infrastructure. 
                            Create a portfolio for cloud computing containing labs, projects, and a capstone project. 
                            Discover AWS, DevOps, and more. 
                        </p>
                       <a className="btn btn-primary" href="/aws" role="button">Know More</a>
                    </div>
                </div>
            </article>
        </section>
    </section>

    <section className="section-4">
        <div className="container text-center">
            <h1 className="text-dark">Industrial Partners</h1>
            <p className="text-secondary">Some of our collaborations with top Industry</p>
        </div>
        <div className="row team">
            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/appsquadz-logo.png" className="img-fluid p-4" alt="" />
                    </div>
                    <div   className="card-body">
                        <h3 className="card-title">AppSquadz</h3>
                        <p className="card-text-index">
                            As a leading Mobile & Web App Development Company, our professional expertise lies 
                            in IoT, Blockchain, web app development, AR/VR, cross-platform. Our dedication and 
                            commitment to 100% client satisfaction is the chief reason for our global presence
                        </p>
                       
                        <p>
                           {/* <a className="btn btn-primary" href="#" role="button">Know More</a> */}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/MTS.png" className="img-fluid p-4" alt="" />
                    </div>
                    <div   className="card-body">
                        <h3 className="card-title">Migratech</h3>
                        <p className="card-text-index">
                            we been delivering software development and related IT services.Our professional team 
                            works closely with you to understand your exact requirement and respond with the best 
                            eye-catching web-designs and most innovative web development solutions for you.
                        </p>
                        <p>
                           {/* <a className="btn btn-primary" href="#" target='_blank' role="button">Know More</a> */}
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/gennext-logo.png" className="img-fluid p-4" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">GenNext</h3>
                        <p className="card-text-index">
                            Gennext Is An Emerging Leader Of Next-Generation Information Technology Services 
                            And Solutions. To Provide Innovative Solutions To Our Customers Through Best-In-Class 
                            Technology And Industry Solutions. We Leverage Our Domain Expertise To Deliver.
                        </p>
                        <p>
                           {/* <a className="btn btn-primary" href="#" target='_blank' role="button">Know More</a> */}
                        </p>
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
                <a href="about.html"><strong>Know More</strong></a>
                </p>  
            </div>
            <div className="imgofabout col-lg-5">
                <img className="imgofabout" src="img/resources/about_img.jpg" alt="Dev" />
            </div>
        </div>
    </div>
    <hr/>

    <section className="section-4">
        <div className="container text-center">
            <h1 className="text-dark">Institutional Partners</h1>
            <p className="text-secondary">Some of our collaborations with top colleges</p>
        </div>
        <div className="row team">
            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/collaborator1.png" className="img-fluid p-4" alt="" />
                    </div>
                    <div   className="card-body">
                        <h3 className="card-title">BTKIT DWARAHAT</h3>
                        <p className="card-text-index">
                            GoHackathon works with BTKIT's Training and Placement cell to provide technical and 
                            professional exposure, enhance student skills and bring better job opportunities to 
                            the institute.
                        </p>
                       
                        <p>
                           <a className="btn btn-primary" href="https://kecua.ac.in/" target='_blank' role="button">Know More</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/graphic-era-logo.png" className="img-fluid p-4" alt="" />
                    </div>
                    <div   className="card-body">
                        <h3 className="card-title">GRAPHIC ERA</h3>
                        <p className="card-text-index">
                            GoHackathon works with Graphic Era Hill University to provide research platform for students, industry, alumni, 
                            start-ups, small and medium enterprises, faculty and researchers by helping them 
                            technology innovations.
                        </p>
                        <p>
                           <a className="btn btn-primary" href="https://graphicerauniversity.co.in/" target='_blank' role="button">Know More</a>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 col-12 text-center">
                <div className="card d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/coer-logo.png" className="img-fluid p-4" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">COER UNIVERSITY</h3>
                        <p className="card-text-index">
                            GoHackathon works with Coer University to promote and enhance skill development and employment generation 
                            activities with relevant skills & On the Job Training required for making them employable.
                        </p>
                        <p>
                           <a className="btn btn-primary" href="https://coer.ac.in/" target='_blank' role="button">Know More</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <script src="js/main.js"></script>

    
{/* Google tag (gtag.js) */}
{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-RYHT696S35"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){'dataLayer.push(arguments);'}
  gtag('js', new Date());

  gtag('config', 'G-RYHT696S35');
</script> */}


   <Footer />
    </Fragment>
  )
}

export default index;
