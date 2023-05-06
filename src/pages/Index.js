import React, { Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
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
                    <h2><strong>MANTHAN</strong></h2>
                    <p><strong>Collaborate, Innovate, and Hack Your Way to Success!</strong><br />
                        We are trying to build a community where everyone can connect, learn, and grow together.
                    </p> <br /> 
                    <Link to="/training"><a href={URL}>
                        <button className="btn btn-primary px-5 py-2 primary-btn">REGISTER NOW</button>
                    </a></Link> <br/> <br/>
                    <Link to="https://docs.google.com/forms/d/1qEth27RUvjjoim_0StxvBF8Zkw3Qov3_CAoJareR4P4/edit"><a href={URL}>
                        <button className="btn btn-primary px-5 py-2 primary-btn">Submit Your Idea</button>
                    </a></Link>
                </div>
                <div className="col-lg-5 bannerimage">
                    <img src="img/development2" alt="developer2" />
                </div>
            </div>
        </div>
        <hr className="home_hr" />
    </section>

    

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
                <h2>Join Our Events to Change The World</h2>
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
                        <h3>Live Event</h3>
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
                        <h3>Upcoming Events</h3>
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
                        <h3>Past Events</h3>
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
                        <img width="368" height="207" src="img/courses/live-project.jpeg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h3>Live Industrial Projects</h3>
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
                        <h3>Winter Training</h3>
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
                        <img width="368" height="207" src="img/courses/Summer_Training.png" alt="" />
                    </figure>
                    <div className="article-body">
                        <h3>Summer Internship</h3>
                        <p>
                        Summer training programs often provide students with exposure to industry professionals 
                        and companies in their field of study. This can help students build professional 
                        networks, learn about different career paths, and gain insight into the industry. 
                        </p>
                       <Link to="/aws_devops"><a className="btn btn-primary" href="aws_devops.html" role="button">Know More</a></Link>
                    </div>
                </div>
            </article>
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
                       <Link to="/aws_devops"><a className="btn btn-primary" href="aws_devops.html" role="button">Know More</a></Link>
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
                       <Link to="/aws_devops"><a className="btn btn-primary" href="aws_devops.html" role="button">Know More</a></Link>
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
                       <Link to="/aws_devops"><a className="btn btn-primary" href="aws_devops.html" role="button">Know More</a></Link>
                    </div>
                </div>
            </article>
            <article>
                <div className="article-wrapper">
                    <figure>
                        <img width="368" height="207" src="img/courses/electric-vehicle.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h3>Electric Vehicles Design</h3>
                        <p>
                            Develop your knowledge of containers, deployment strategies, and immutable infrastructure. 
                            Create a portfolio for cloud computing containing labs, projects, and a capstone project. 
                            Discover AWS, DevOps, and more. 
                        </p>
                       <Link to="/aws_devops"><a className="btn btn-primary" href="aws_devops.html" role="button">Know More</a></Link>
                    </div>
                </div>
            </article>
        </section>
    </section>
    <section className="section-4">
        <div className="container text-center">
            <h1 className="text-dark">Institutional Partners</h1>
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
                           <a className="btn btn-primary" href="https://kecua.ac.in/" target='_blank' role="button">Know More</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 text-center">
                <div className="card mr-2 d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/Graphic_Era.png" className="img-fluid border-radius p-4" alt="" />
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
                <div className="card mr-2 d-inline-block shadow-lg">
                    <div className="card-img-top">
                        <img src="img/resources/coer-logo.png" className="img-fluid border-radius p-4" alt="" />
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
    <hr/>

    <div className="container">
        <div className="row">
            <div className="aboutsection col-lg-7">
                <h2>Gyan Goshthi - Learning While Traveling and Adventure</h2>
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
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <script src="js/main.js"></script>

    
{/* Google tag (gtag.js) */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RYHT696S35"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){'dataLayer.push(arguments);'}
  gtag('js', new Date());

  gtag('config', 'G-RYHT696S35');
</script>


   <Footer />
    </Fragment>
  )
}

export default index;
