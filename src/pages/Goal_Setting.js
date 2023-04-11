import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Goal_Setting = () => {
  return (
    <Fragment>
        <Menu />
        <body className="body">
            <div className="evebanner">
                <img src="img/banner/Goal-Setting.png" alt=""/>
            </div>
                
                    <div className="container containereventdetail">
                        <div className="past-event">
                            <div>
                                <h6><strong>Topic:- </strong>Goal Setting Exercise </h6>
                                <h6><strong>Event Duration:- </strong>02 - 03 Hours</h6>
                                <h6><strong>Speaker:- </strong>Ravi Rautela- Motivational Trainer and Entrepreneur</h6>
                            </div> <br/>
                            <div className="past-event-text">
                                <p> <strong>Coverage:- </strong> This activity is an eye opener for students it reflects upon the gap between their future aspirations and present action. <br/>
                                    Students will be learning by doing hands on. <br />
                                </p>
                                <h6><strong>Audience:- </strong>Students of B. Tech  1st 2nd  3rd & 4th Year </h6>
                                <h6><strong>Requirements:- </strong>White Board, Marker,  Chart Paper (8-10 sheets) 
                                Crayons ( 8-10 packets) or sketch pens (8-10 packets)</h6>

                            </div>
                        </div>
                
                    </div>

                    

        <div className="container aboutgallery">
        {/* <h2><strong>WINNERS</strong></h2> <br /> */}
        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/EventPics/Goal_Event-01.jpg" alt="Lights" style={{width: "100%"}}/>
                {/* <div className="caption">
                  <p><strong>Hackathon 1st Prize</strong></p>
                </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                {/* <img src="img/EventPics/" alt="Nature" style={{width: "100%"}}/> */}
                {/* <div className="caption">
                  <p><strong>Hackathon 2nd Prize</strong></p>
                </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                {/* <img src="img/EventPics/" alt="Fjords" style={{width: "100%"}}/> */}
                {/* <div className="caption">
                  <p><strong>Coding Competition 1st Prize</strong></p>
                </div> */}
            </div>
          </div>
        </div>
    </div>

    <div className="container aboutgallery">
        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail">
                {/* <img src="img/EventPics/" alt="Lights" style={{width: "100%"}}/> */}
                {/* <div className="caption">
                  <p><strong>Ideathon 1st Prize</strong></p>
                </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                {/* <img src="img/EventPics/" alt="Nature" style={{width: "100%"}}/> */}
                {/* <div className="caption">
                  <p><strong>Ideathon 2nd Prize</strong></p>
                </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                {/* <img src="img/EventPics/" alt="Fjords" style={{width: "100%"}}/> */}
                {/* <div className="caption">
                  <p><strong>Ideathon 2nd Prize</strong></p>
                </div> */}
            </div>
          </div>
        </div>
    </div>
                
        </body>
        <Footer />
    </Fragment>
  )
}

export default Goal_Setting
