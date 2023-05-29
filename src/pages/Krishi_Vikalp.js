import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Krishi_Vikalp = () => {
  return (
    <Fragment>
        <Menu />
        <body className="body">
            <div className="evebanner">
                <img src="img/banner/krishi-vikalp.png" alt=""/>
            </div>
                
                    <div className="container containereventdetail">
                        <div className="past-event">
                            <div>
                                <h6><strong>Event Name:- </strong>KRISHI-VIKALP</h6>
                                <h6><strong>Event Mascot:- <img src="img/Krishi.jpg" alt=""/></strong></h6>
                                <h6><strong>Event Date:- </strong>25th feb 2023</h6>
                                <h6><strong>Event Duration:- </strong>2-4 Hours</h6>
                                <h6><strong>Event Venue:- </strong>Sri Sukhmani Institute of Management, Dwarka, New Delhi <a href="https://goo.gl/maps/4gtb1MFV8qjh2vqaA">https://goo.gl/maps/4gtb1MFV8qjh2vqaA</a> </h6>
                            </div> <br/>
                            <div className="past-event-text">
                                <p>Sri Sukhmani Institute of Management,Dwarka, New Delhi and MangosOrange is organizing a Startup India 
                                    Business Case Presentation-KRISHI- VIKALP ,an event for budding managers(PGDM students) to showcase 
                                    their entrepreneurial skills by presenting innovative ideas that can bring about a revolution in farming 
                                    in India.The event is powered by Gohackathon.in.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h6><strong>Event Uniqueness:-</strong></h6>
                            <p>This event brings real industry problem statements to different teams from across the country,
                               the teams are given specific problem statements for which they develop solutions. Professional
                               industry mentors evaluate the level and choose the winning team. The winning team gets the prize
                               money.
                               The story does not end here, it goes beyond that, here most of the hackathons end up with the
                               winning team, and in this event, the opportunity is for everybody who participates in it.
                               Go hackathon aims at providing continuous help and support to all the participants of their
                               events and developing a life-long bond of learning, earning, and contributing back. The aim is
                               to impact industry and society by providing continuous innovative solutions to real problems
                               faced by the industry.
                            </p>
                        </div>
                
                    </div>


    <div className="container aboutgallery">
        <h2><strong>PARTICIPANTS</strong></h2> <br />
        <div className="row">
          <div className="col-md-3">
            <div className="thumbnail">
                <img src="img/SSIMEventPics/team-01.png" alt="Lights" style={{width: "100%"}}/>
                <div className="caption">
                  <p><strong>Team 01</strong></p>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
                <img src="img/SSIMEventPics/team-02.png" alt="Nature" style={{width: "100%"}}/>
                <div className="caption">
                  <p><strong>Team 02</strong></p>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
                <img src="img/SSIMEventPics/team-03.png" alt="Fjords" style={{width: "100%"}}/>
                <div className="caption">
                  <p><strong>Team 03</strong></p>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
                <img src="img/SSIMEventPics/team-04.png" alt="Fjords" style={{width: "100%"}}/>
                <div className="caption">
                  <p><strong>Team 04</strong></p>
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

export default Krishi_Vikalp
