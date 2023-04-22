import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const training = () => {
  return (
    <Fragment>
      <Menu />
      <div class="evebanner">
        <img src="img/banner/Training.png" alt=""/>
      </div>
      
    <main>

        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">SUMMER INTERNISHIP</h1>
                    <p class="lead text-muted">Additionally , all the students will be groomed on Entrepreneural Skills, and Startup Formation. Interested Students or Student Group will be provided Mentorship for their startup IDEAS.</p>
                </div>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/ai_ml"><img src="img/courses/AI&ML.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>AI and Machine Learning</h4>
                                {/* <p>
                                    This course provides students with a comprehensive introduction to data science and
                                     machine learning. Students will learn how to extract insights and knowledge from 
                                     large data sets using popular data analysis and machine learning techniques.  
                                </p>
                               <Link to=""><a class="btn btn-primary" href="ai_ml.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/ai_ml"><a class="btn btn-primary" href="ai-ml.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/full_stack_dev"><img src="img/courses/FullStack.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Full Stack Development</h4>
                                {/* <p>
                                    Students receive a thorough introduction to database and full stack development in 
                                    this course. With the technical understanding of front-end and back-end programming, 
                                    students will discover the nuances of data structures and algorithms.
                                </p>
                               <Link to=""><a class="btn btn-primary" href="full-stack-dev.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/full_stack_dev"><a class="btn btn-primary" href="full-stack-dev.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to=""></Link> <img src="img/courses/Aws_Devops.png" alt="" height="100%" width="100%"/>
                            <div class="card-body">
                                <h4>Devops</h4>
                                {/* <p>
                                    Develop your knowledge of containers, deployment strategies, and immutable infrastructure. 
                                    Create a portfolio for cloud computing containing labs, projects, and a capstone project. 
                                    Discover AWS, DevOps, and more. Gain Practical Exposure to Projects & Laboratories. 
                                </p>
                               <Link to=""><a class="btn btn-primary" href="aws_devops.html"role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/aws_devops"><a class="btn btn-primary" href="aws_devops.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/cloud_computing.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Cloud Computing</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                               <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/python.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Python Programming</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/java.png" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Java Programming</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/ai_ml"><img src="img/courses/AI&ML.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>AI and Machine Learning</h4>
                                {/* <p>
                                    This course provides students with a comprehensive introduction to data science and
                                     machine learning. Students will learn how to extract insights and knowledge from 
                                     large data sets using popular data analysis and machine learning techniques.  
                                </p>
                               <Link to=""><a class="btn btn-primary" href="ai_ml.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/ai_ml"><a class="btn btn-primary" href="ai-ml.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/full_stack_dev"><img src="img/courses/FullStack.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Full Stack Development</h4>
                                {/* <p>
                                    Students receive a thorough introduction to database and full stack development in 
                                    this course. With the technical understanding of front-end and back-end programming, 
                                    students will discover the nuances of data structures and algorithms.
                                </p>
                               <Link to=""><a class="btn btn-primary" href="full-stack-dev.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/full_stack_dev"><a class="btn btn-primary" href="full-stack-dev.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to=""></Link> <img src="img/courses/Aws_Devops.png" alt="" height="100%" width="100%"/>
                            <div class="card-body">
                                <h4>Devops</h4>
                                {/* <p>
                                    Develop your knowledge of containers, deployment strategies, and immutable infrastructure. 
                                    Create a portfolio for cloud computing containing labs, projects, and a capstone project. 
                                    Discover AWS, DevOps, and more. Gain Practical Exposure to Projects & Laboratories. 
                                </p>
                               <Link to=""><a class="btn btn-primary" href="aws_devops.html"role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/aws_devops"><a class="btn btn-primary" href="aws_devops.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/cloud_computing.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Cloud Computing</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                               <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/python.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Python Programming</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/java.png" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Java Programming</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/ai_ml"><img src="img/courses/AI&ML.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>AI and Machine Learning</h4>
                                {/* <p>
                                    This course provides students with a comprehensive introduction to data science and
                                     machine learning. Students will learn how to extract insights and knowledge from 
                                     large data sets using popular data analysis and machine learning techniques.  
                                </p>
                               <Link to=""><a class="btn btn-primary" href="ai_ml.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/ai_ml"><a class="btn btn-primary" href="ai-ml.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/full_stack_dev"><img src="img/courses/FullStack.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Full Stack Development</h4>
                                {/* <p>
                                    Students receive a thorough introduction to database and full stack development in 
                                    this course. With the technical understanding of front-end and back-end programming, 
                                    students will discover the nuances of data structures and algorithms.
                                </p>
                               <Link to=""><a class="btn btn-primary" href="full-stack-dev.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/full_stack_dev"><a class="btn btn-primary" href="full-stack-dev.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to=""></Link> <img src="img/courses/Aws_Devops.png" alt="" height="100%" width="100%"/>
                            <div class="card-body">
                                <h4>Devops</h4>
                                {/* <p>
                                    Develop your knowledge of containers, deployment strategies, and immutable infrastructure. 
                                    Create a portfolio for cloud computing containing labs, projects, and a capstone project. 
                                    Discover AWS, DevOps, and more. Gain Practical Exposure to Projects & Laboratories. 
                                </p>
                               <Link to=""><a class="btn btn-primary" href="aws_devops.html"role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/aws_devops"><a class="btn btn-primary" href="aws_devops.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/cloud_computing.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Cloud Computing</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                               <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/python.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Python Programming</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/java.png" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Java Programming</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/ai_ml"><img src="img/courses/AI&ML.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>AI and Machine Learning</h4>
                                {/* <p>
                                    This course provides students with a comprehensive introduction to data science and
                                     machine learning. Students will learn how to extract insights and knowledge from 
                                     large data sets using popular data analysis and machine learning techniques.  
                                </p>
                               <Link to=""><a class="btn btn-primary" href="ai_ml.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/ai_ml"><a class="btn btn-primary" href="ai-ml.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/full_stack_dev"><img src="img/courses/FullStack.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Full Stack Development</h4>
                                {/* <p>
                                    Students receive a thorough introduction to database and full stack development in 
                                    this course. With the technical understanding of front-end and back-end programming, 
                                    students will discover the nuances of data structures and algorithms.
                                </p>
                               <Link to=""><a class="btn btn-primary" href="full-stack-dev.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/full_stack_dev"><a class="btn btn-primary" href="full-stack-dev.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to=""></Link> <img src="img/courses/Aws_Devops.png" alt="" height="100%" width="100%"/>
                            <div class="card-body">
                                <h4>Devops</h4>
                                {/* <p>
                                    Develop your knowledge of containers, deployment strategies, and immutable infrastructure. 
                                    Create a portfolio for cloud computing containing labs, projects, and a capstone project. 
                                    Discover AWS, DevOps, and more. Gain Practical Exposure to Projects & Laboratories. 
                                </p>
                               <Link to=""><a class="btn btn-primary" href="aws_devops.html"role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/aws_devops"><a class="btn btn-primary" href="aws_devops.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/cloud_computing.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Cloud Computing</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                               <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/python.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Python Programming</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/java.png" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Java Programming</h4>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
      <Footer />
    </Fragment>
  )
}

export default training
