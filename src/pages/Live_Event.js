import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Live_Event = () => {
  return (
    <Fragment>
        <Menu />
        <body className="eventbody">

        <div class="evebanner">
        <img src="img/banner/live_event.png" alt=""/>
      </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/goal_setting"><img src="img/event/goal.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Goal Setting Workshop</h4>
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
                           <Link to=""><img src="img/event/git.png" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Git and GitHub Workshop</h4>
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
                           <Link to="/gyan_goshthi"> <img src="img/courses/cloud_computing.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Gyan Goshthi</h4>
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
        
</body>
    <Footer />
    </Fragment>
  )
}

export default Live_Event
