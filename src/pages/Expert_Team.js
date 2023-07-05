import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Expert_Team = () => {
  return (
    <Fragment>
        <Menu />
        
        <div className="evebanner">
            <img src="img/banner/expertTeam.png" alt=""/>
        </div>
        
        <div className="past-event-box">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div className="col-lg-4">
                  <div className="card">
                    <img src="img/event/" alt=""/>
                    <div className="card-body">
                      <p className="card-text"><strong>Expert Name:- </strong>Mr. Ram Singh Rana<br/>
                      <strong>Profile:- </strong>Senior <br />
                      <strong>Experience:- </strong>10 Years <br/>
                      </p>
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Facebook</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Instagram</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">LinkedIn</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card shadow-sm">
                    <img src="img/event/" alt=""/>
                    <div className="card-body">
                      <p className="card-text"><strong>Expert Name:- </strong>Mr. Amit Gupta<br/>
                      <strong>Profile:- </strong>Senior <br />
                      <strong>Experience:- </strong>10 Years <br/>
                      </p>
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Facebook</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Instagram</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">LinkedIn</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card">
                    <img src="img/event/" alt=""/>
                    <div className="card-body">
                      <p className="card-text"><strong>Expert Name:- </strong>Dr. Vishal Kumar<br/>
                      <strong>Profile:- </strong>Senior <br />
                      <strong>Experience:- </strong>10 Years <br/>
                      </p>
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Facebook</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Instagram</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">LinkedIn</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>



        <div className="past-event-box">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div className="col-lg-4">
                  <div className="card">
                    <img src="img/event/" alt=""/>
                    <div className="card-body">
                      <p className="card-text"><strong>Expert Name:- </strong>Mr. Praveen Sharma<br/>
                      <strong>Profile:- </strong>Senior <br />
                      <strong>Experience:- </strong>10 Years <br/>
                      </p>
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Facebook</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Instagram</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">LinkedIn</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card shadow-sm">
                    <img src="img/event/" alt=""/>
                    <div className="card-body">
                      <p className="card-text"><strong>Expert Name:- </strong>Mr. Mahesh Sharma<br/>
                      <strong>Profile:- </strong>Senior <br />
                      <strong>Experience:- </strong>10 Years <br/>
                      </p>
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Facebook</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Instagram</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">LinkedIn</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card">
                    <img src="img/faculty/" alt=""/>
                    <div className="card-body">
                      <p className="card-text"><strong>Expert Name:- </strong>Mr. Ravi Rautela<br/>
                      <strong>Profile:- </strong>Senior <br />
                      <strong>Experience:- </strong>10 Years <br/>
                      </p>
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Facebook</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">Instagram</a> &nbsp;
                      <a className="btn btn-outline-secondary btn-sm" href="#" role="button">LinkedIn</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="knowmore">
          <p>Schedule a meeting with gohackathon mentors from a variety of fields and let's work to advance your career! &nbsp;
            <a href="/contact"><button className="btn btn-primary px-5 py-2 primary-btn" id="contact">Get in Touch</button></a>       
          </p>
          </div>
        </div>


        <Footer />
    </Fragment>
  )
}

export default Expert_Team
