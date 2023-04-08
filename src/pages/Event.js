import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const event = () => {
  return (
    <Fragment>
      <Menu />
      <body className="eventbody">

  <div className="evebanner">
    <img src="img/banner/Events.png" alt=""/>
  </div>
  <br/>
  <h2 className="text-center">Join Our Hackathon and Change the World</h2>
  <p className="text-secondary">
      Think outside the box: Collaborate, Innovate, and Create
  </p>
    <section className="articles">
        <article>
            <div className="article-wrapper">
                <figure>
                    <img src="img/event/live-event.jpg" alt="" />
                </figure>
                <div className="article-body">
                    <h2>Live Event</h2>
                    <p>
                      This event typically involves brainstorming sessions, workshops, and presentations, 
                      where participants are encouraged to think outside the box and come up with unique 
                      solutions to the challenge at hand
                  </p>
                    <a className="btn btn-primary" href="live_event.html" role="button">Know More</a>
                </div>
            </div>
        </article>
        <article>
            <div className="article-wrapper">
                <figure>
                    <img width="368" height="207" src="img/event/upcoming-event.avif" alt="" />
                </figure>
                <div className="article-body">
                    <h2>Upcoming Events</h2>
                    <p>
                      These events often focus on specific themes or industries, such as technology, 
                      healthcare, or sustainability, and are often organized by companies, universities, 
                      or other organizations looking to stimulate innovation.
                  </p>
                    <a className="btn btn-primary" href="upcoming_events.html" role="button">Know More</a>
                </div>
            </div>
        </article>
        <article>
            <div className="article-wrapper">
                <figure>
                    <img width="368" height="207" src="img/event/past-event.jpg" alt="" />
                </figure>
                <div className="article-body">
                    <h2>Past Events</h2>
                    <p>
                      They are also sometimes organized by universities or other educational institutions 
                      as a way to give students experience working on real-world software projects to engage 
                      with the tech community and innovation.
                  </p>
                    <a className="btn btn-primary" href="past_events.html" role="button">Know More</a>
                </div>
            </div>
        </article>
    </section>
</body>
      <Footer />
    </Fragment>
  )
}

export default event
