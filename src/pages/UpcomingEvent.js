import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Upcoming_Event = () => {
    return (
        <Fragment>
            <Menu />

            <body className="body">
                <div className="evebanner">
                    <img src="img/banner/upcoming_event.png" alt="Upcoming Event Banner" />
                </div>

                <div className='container'>
                    <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Faculty Development Program</h2>
                </div>

                <div className="past-event-box">
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <img src="img/resources/FDP.png" alt="Upcoming Event"/>
                                        <div className="card-body">
                                            <p className="card-text"><strong>Event Name:- </strong>2 Days FDP Program<br/>
                                            <strong>Event Date:- </strong>24th -25th June, 2023<br />
                                            <strong>Event Venue:- </strong>Hill Station, Bhimtal<br/>
                                            </p>
                                                <a className="btn btn-primary" href="https://forms.gle/MDfma5BjCWBSM7ju5" role="button">Register Now</a>
                                        </div>
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

export default Upcoming_Event
