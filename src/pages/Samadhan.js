import React, {Fragment} from 'react';
import Menu from  './Menu';
import Footer from './Footer';

const Samadhan = () => {
  return (
    <Fragment>
        <Menu />
        <body className="body">
            <div className="evebanner">
                <img src="img/banner/samadhan.png" alt="Samadhan Banner"/>
            </div>
                
                    <div className="container containereventdetail">
                        <div className="past-event">
                            <div>
                                <h6><strong>Event Name:- </strong>SAMADHAN</h6>
                                <h6><strong>Event Mascot:- <img src="img/samadhan.png" alt="Mascot"/></strong></h6>
                                <h6><strong>Event Date:- </strong>17th and 18th December 2022</h6>
                                <h6><strong>Event Duration:- </strong>24hrs (Split over 2 Days)</h6>
                                <h6><strong>Event Venue:- </strong>BTKIT Dwarahat <a href="https://goo.gl/maps/1UNyqo5NwR8kTsTVA" >https://goo.gl/maps/1UNyqo5NwR8kTsTVA</a> </h6>
                            </div> <br/>
                            <div className="past-event-text">
                                <p>The event will be hosted at BTKIT Campus situated in the beautiful hills of Ranikhet belt near
                                   Dwarahat.
                                   Dwarahat is historically rich in culture, spiritual, and commercial activities in the Almora
                                   region and now is one of the rapidly growing educational hubs of Uttarakhand.
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
                               All the Participating teams who developed their solutions (both winning and losing one’s) will
                               be now assigned to industry mentors for specific periods. The teams will focus on developing the
                               solution under the mentorship of the expert. The team who will produce the best results in the
                               desired timeframe will be selected for a paid internship for 6 months (or for a specific
                               duration of the project development)
                               On successful completion of the project, the team will have options either to continue paid
                               internship with a new project or get a job opportunity (if they have completed their studies by
                               that time.)
                               Go hackathon aims at providing continuous help and support to all the participants of their
                               events and developing a life-long bond of learning, earning, and contributing back. The aim is
                               to impact industry and society by providing continuous innovative solutions to real problems
                               faced by the industry.
                            </p>
                        </div>
                
                    </div>

                    

        <div className="container aboutgallery">
        <h2><strong>WINNERS</strong></h2> <br />
        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/EventPics/Hackathon-1st-Prize.jpg" alt="Samadhan Hackathon 1st Prize Winner" style={{width: "100%"}}/>
                <div className="caption">
                  <p><strong>Hackathon 1st Prize</strong></p>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/EventPics/Hackathon-2nd-Prize.jpg" alt="Samadhan Hackathon 2nd Prize Winner" style={{width: "100%"}}/>
                <div className="caption">
                  <p><strong>Hackathon 2nd Prize</strong></p>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/EventPics/Coding-1st-Prize.jpg" alt="Samadhan Coding Competion 1st Winner" style={{width: "100%"}}/>
                <div className="caption">
                  <p><strong>Coding Competition 1st Prize</strong></p>
                </div>
            </div>
          </div>
        </div>
    </div>

    <div className="container aboutgallery">
        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/EventPics/Ideathon-1st-Prize.jpg" alt="Samadhan Ideathon 1st Prize Winner" style={{width: "100%"}}/>
                <div className="caption">
                  <p><strong>Ideathon 1st Prize</strong></p>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/EventPics/Ideathon-2nd-Prize.jpg" alt="Samadhan Ideathon 2nd Prize Winner" style={{width: "100%"}}/>
                <div className="caption">
                  <p><strong>Ideathon 2nd Prize</strong></p>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/EventPics/Ideathon-3rd-Prize.jpg" alt="Samadhan Ideathon 3rd Prize Winner" style={{width: "100%"}}/>
                <div className="caption">
                  <p><strong>Ideathon 2nd Prize</strong></p>
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

export default Samadhan
