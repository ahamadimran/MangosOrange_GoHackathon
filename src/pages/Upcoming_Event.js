import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Upcoming_Event = () => {
  return (
    <Fragment>
        <Menu />
        <body className="body">
    <div className="evebanner">
        <img src="img/banner/upcoming_event.png" alt=""/>
    </div>

    <div className="container aboutgallery">
        <h2><strong> Upcoming Webinar</strong></h2> <br/>
        <h6><strong>Workshop:- </strong>Git, GitHub, Soft Skill and Goal Setting</h6>
        <h6><strong>Event Date:- </strong>6th April 2023</h6>
        <h6><strong>Event Duration:- </strong>02-04 Hours</h6>
        <h6><strong>Event Venue:- </strong>Coer University</h6>
        <div className="row">
          <div className="col-md-6">
            <div className="thumbnail">
                <img src="img/event/Goalsetting.jpg" alt="Lights" style={{width: "100%"}}/>
                {/* <div className="caption">
                  <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="thumbnail">
                <img src="img/event/Git.jpg" alt="Nature" style={{width: "100%"}}/>
                
            </div>
          </div>
        </div>
    </div>
    
</body>
        <Footer />
    </Fragment>
  )
}

export default Upcoming_Event
