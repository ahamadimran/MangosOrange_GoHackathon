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
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/git_github"><img src="img/event/git.png" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Git and GitHub Workshop</h4>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/gyan_goshthi"> <img src="img/courses/cloud_computing.jpg" alt="" height="100%" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Gyan Goshthi</h4>
                                
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
