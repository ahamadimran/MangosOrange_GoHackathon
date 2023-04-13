import React, { Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <Fragment>
        <Menu />
    
    <section className="section-0">
        <div className="container">
            <div className="row">
                <div className="col-lg-7  bannertext">
                    <h1>GOHACKATHON</h1>
                    <h6>Presents</h6>
                    <h2><strong>GYAN GOSHTHI</strong></h2>
                    <p><strong>Collaborate, Innovate, and Hack Your Way to Success!</strong><br />
                        We are trying to build a community where everyone can connect, learn, and grow together.
                    </p> <br />
                    <Link to="/gyan_goshthi">
                    <a href={URL}>
                        <button className="btn btn-primary px-5 py-2 primary-btn">
                            REGISTER NOW
                        </button>
                    </a></Link>
                </div>
                <div className="col-lg-5 bannerimage">
                    <img src="img/development2" alt="developer2" />
                </div>
            </div>
        </div>
        <hr className="home_hr" />
    </section>

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

    <div className="container">
        <div className="row">
            <div className="aboutsection col-lg-7">
                <h2>GYAN GOSHTHI</h2>
                <p>GYAN GOSHTHI is an event that brings together individuals from various backgrounds 
                and industries to generate creative and innovative ideas on a specific topic or 
                challenge. This event typically involves brainstorming sessions, workshops, and 
                presentations, where participants are encouraged to think outside the box and come 
                up with unique solutions to the challenge at hand. The aim of an GYAN GOSHTHI is to 
                foster collaboration and creativity, and to generate a pool of valuable ideas that 
                can be further developed and implemented. GYAN GOSHTHIs are often used by organizations 
                to generate new ideas for product development, marketing campaigns, and business strategy. 
                They are also a popular way for startups and entrepreneurs to come up with fresh, new 
                concepts and pitch them to potential investors or partners. <br />
                </p>
                <p>We create an eco-system of industry academia partnership and help in continuous and
                sustainable development of innovative ideas, which are impactful for the growing economy and
                society. Go hackathon thrives to provide best nurturing, mentorship, skills and professional opportunities to its members and participants.
                We conduct series of events, seminars, hackathons, internships and Projects.
                </p>  
            </div>
            <div className="imgofabout-gyan col-lg-5">
                <img className="imgofabout-gyan" src="img/event/agriculture-gyan.jpg" alt="Dev" />
            </div>
        </div>
    </div>
    <hr />

    {/* <section className="sponsors">
        <div className="content text-center">
            <h2 text-align="center">SPONSORS AND ASSOCIATES</h2>
        </div>
        <div className="images">
            <div className="img1">
                <img className="simg" src="img/sponsorsimg/SSIM-LOGO-1.png" alt="ssim" />
            </div>
            <div className="img2">
                <img className="simg" src="img/sponsorsimg/tp-agri-logo.png" alt="agritech" />
            </div>
            <div className="img3">
                <img className="simg" src="img/sponsorsimg/Skyfield-Agritech.png" alt="Skyfield-Agritech" />
            </div>
            <div className="img4">
                <img className="simg" src="img/sponsorsimg/MOLogo.png" alt="Mangosorange" />
            </div>
        </div>
        <hr />
    </section> */}
    
    <section className="section-2  p-0">
        <div className="cover">
            <div className="content text-center">
                <h2>Join Our Hackathon and Change the World</h2>
                <p className="text-secondary">
                    Think outside the box: Collaborate, Innovate, and Create
                </p>
            </div>
        </div>
        <section className="articles">
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img src="img/event/live-event.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>Live Event</h2>
                        <p>
                            This event typically involves brainstorming sessions, workshops, and presentations, 
                            where participants are encouraged to think outside the box and come up with unique 
                            solutions to the challenge at hand
                        </p>
                       <Link to="/live_event"><a className="btn btn-primary" href="live_event.html" role="button">Know More</a></Link>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/event/upcoming-event.avif" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>Upcoming Events</h2>
                        <p>
                            Are you seeking to solve some of the most pressing real world issues, but don’t know where to start?
                            Your idea doesn’t need to be original! You can take inspiration from others. Come join GoHackathon Events.
                        </p>
                       <Link to="/upcoming_event"><a className="btn btn-primary" href="upcoming_events.html" role="button">Know More</a></Link>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/event/past-event.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>Past Events</h2>
                        <p>
                            Since last year, GoHackathon and its team have organised an event. 
                            <strong>SAMADHAN</strong> at BTKIT Dwarahat and 
                            <strong>KRISHI-VIKALP</strong> at SSIM New Delhi 
                            are two events that have previously taken place.
                        </p>
                       <Link to="/past_event"><a className="btn btn-primary" href="past_events.html" role="button">Know More</a></Link>
                    </div>
                </div>
            </article>
        </section>
       
        <div className="purchase text-center">
            <h1>Sharpen Your Skills</h1>
            <p className="text-secondary">
                Learn, Practice, and Test Your Skills with Our Courses.
            </p>
        </div>
        <section className="articles">
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/AI&ML.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>AI and Machine Learning</h2>
                        <p>
                            This course provides students with a comprehensive introduction to data science and
                             machine learning. Students will learn how to extract insights and knowledge from 
                             large data sets using popular data analysis and machine learning techniques.  
                        </p>
                       <Link to="/ai_ml"><a className="btn btn-primary" href="ai_ml.html" role="button">Know More</a></Link>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/FullStack.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>Full Stack Development</h2>
                        <p>
                            Students receive a thorough introduction to database and full stack development in 
                            this course. With the technical understanding of front-end and back-end programming, 
                            students will discover the nuances of data structures and algorithms.
                        </p>
                       <Link to="/full_stack_dev"><a className="btn btn-primary" href="full_stack_dev.html" role="button">Know More</a></Link>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/Aws_Devops.png" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>AWS and Devops</h2>
                        <p>
                            Develop your knowledge of containers, deployment strategies, and immutable infrastructure. 
                            Create a portfolio for cloud computing containing labs, projects, and a capstone project. 
                            Discover AWS, DevOps, and more. Gain Practical Exposure to Projects & Laboratories. 
                        </p>
                       <Link to="/aws_devops"><a className="btn btn-primary" href="aws_devops.html" role="button">Know More</a></Link>
                    </div>
                </div>
            </article>
        </section>
    </section>
    <section className="section-4">
        <div className="container text-center">
            <h1 className="text-dark">Collaborate With GoHackathon</h1>
            <p className="text-secondary">Some of our collaborations with top colleges</p>
        </div>
        <div className="row team">
            <div className="col-md-4 col-12 text-center">
                <div className="card mr-2 d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/collaborator1.png" className="img-fluid border-radius p-4" alt="" />
                    </div>
                    <div   className="card-body">
                        <h3 className="card-title">BTKIT DWARAHAT</h3>
                        <p className="card-text-index">
                            GoHackathon works with BTKIT's Training and Placement cell to provide technical and 
                            professional exposure, enhance student skills and bring better job opportunities to 
                            the institute.
                        </p>
                       
                        <p>
                           <Link to=""><a className="btn btn-primary" href="contact.html" role="button">Know More</a></Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 text-center">
                <div className="card mr-2 d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/ssim-logo.png" className="img-fluid border-radius p-4" alt="" />
                    </div>
                    <div   className="card-body">
                        <h3 className="card-title">SSIM DELHI</h3>
                        <p className="card-text-index">
                            GoHackathon works with SSIM to provide research platform for students, industry, alumni, 
                            start-ups, small and medium enterprises, faculty and researchers by helping them 
                            technology innovations.
                        </p>
                        <p>
                           <Link to=""><a className="btn btn-primary" href="contact.html" role="button">Know More</a></Link>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 col-12 text-center">
                <div className="card mr-2 d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/WIT-LOGO-1-1.png" className="img-fluid border-radius p-4" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">WIT DEHRADUN</h3>
                        <p className="card-text-index">
                            GoHackathon works with WIT to promote and enhance skill development and employment generation 
                            activities with relevant skills & On the Job Training required for making them employable.
                        </p>
                        <p>
                           <Link to=""><a className="btn btn-primary" href="contact.html" role="button">Know More</a></Link>
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

   <Footer />
    </Fragment>
  )
}

export default index;
