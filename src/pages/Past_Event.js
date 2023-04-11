import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Past_Event = () => {
  return (
    <Fragment>
      <Menu />
      <div className="evebanner">
        <img src="img/banner/past_event.png" alt=""/>
      </div>

      <main>


      <div className="past-event-box">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div className="col-lg-6">
                  <div className="card">
                    <img src="img/event/git.png" alt=""/>
                    <div className="card-body">
                      <p className="card-text"><strong>Event Name:- </strong>Git and GitHub Workshop<br/>
                      <strong>Event Date:- </strong>06th April 2023 <br />
                      <strong>Event Venue:- </strong>COER University, Roorkee, Uttarakhand <br/>
                      </p>
                      <Link to="">
                      <a className="btn btn-primary" href="krishi-vikalp.html" role="button">Know More</a></Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card shadow-sm">
                    <img src="img/event/goal.jpg" alt="" />
                    <div className="card-body">
                      <p className="card-text"><strong>Event Name:- </strong>Goal Setting Workshop<br/>
                      <strong>Event Date:- </strong>29th March 2023 <br/>
                      <strong>Event Venue:- </strong>Women Institute of Technology, Dehradun <br/>
                      </p>
                      <Link to="">
                      <a className="btn btn-primary" href="samadhan.html" role="button">Know More</a></Link>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-4">
                  <div className="card">
                    <img src="img/event/git.png" alt=""/>
                    <div className="card-body">
                      <p className="card-text"><strong>Event Name:- </strong>Git,GitHub and Gaol Setting<br/>
                      <strong>Event Date:- </strong>29th March 2023 <br />
                      <strong>Event Venue:- </strong>Women Institute of Technology, Dehradun, Uttarakhand <br/>
                      </p>
                      <Link to="">
                      <a className="btn btn-primary" href="krishi-vikalp.html" role="button">Know More</a></Link>
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>



        <div className="past-event-box">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div className="col-lg-6">
                  <div className="card">
                    <img src="img/event/krishi-vikalp.jpg" alt=""/>
                    <div className="card-body">
                      <p className="card-text"><strong>Event Name:- </strong>KRISHI-VIKALP<br/>
                      <strong>Event Date:- </strong>25th Feb 2023 <br />
                      <strong>Event Venue:- </strong>Sri Sukhmani Institute of Management, Dwarka, New Delhi <br/>
                      </p>
                      <Link to="/krishi_vikalp">
                      <a className="btn btn-primary" href="krishi-vikalp.html" role="button">Know More</a></Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card shadow-sm">
                    <img src="img/event/samadhan.png" alt="" />
                    <div className="card-body">
                      <p className="card-text"><strong>Event Name:- </strong>SAMADHAN<br/>
                      <strong>Event Date:- </strong>17th and 18th Dec 2022 <br/>
                      <strong>Event Venue:- </strong>Bipin Tripathi Kumaon Institute of Technology, Uttarakhand <br/>
                      </p>
                      <Link to="/samadhan">
                      <a className="btn btn-primary" href="samadhan.html" role="button">Know More</a></Link>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-4">
                  <div className="card">
                    <img src="img/event/git.png" alt=""/>
                    <div className="card-body">
                      <p className="card-text"><strong>Event Name:- </strong>Git,GitHub and Gaol Setting<br/>
                      <strong>Event Date:- </strong>29th March 2023 <br />
                      <strong>Event Venue:- </strong>Women Institute of Technology, Dehradun, Uttarakhand <br/>
                      </p>
                      <Link to="">
                      <a className="btn btn-primary" href="krishi-vikalp.html" role="button">Know More</a></Link>
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="knowmore">
          <p>If you want to participate in such events do contact us and win the exiciting prizes. &nbsp;
            <Link to="/contact">
            <a href={URL}><button className="btn btn-primary px-5 py-2 primary-btn" id="contact">Get in Touch</button></a> </Link>       
          </p>
          </div>
        </div>

      </main>

      <Footer />
    </Fragment>
  )
}

export default Past_Event;
