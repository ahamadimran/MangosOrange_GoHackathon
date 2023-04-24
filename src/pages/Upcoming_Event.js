import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Upcoming_Event = () => {
    return (
        <Fragment>
            <Menu />

            <body className="body">
                <div className="evebanner">
                    <img src="img/banner/upcoming_event.png" alt="" />
                </div>

                <div class="album py-5 bg-light">
                    <div class="container">
                        <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">MANTHAN</h2>
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                            <div class="col-lg-4">
                                <div class="card shadow-sm">
                                    <Link to="/Gigabit"><img src="img\GIGABIT-01.png" alt="GIGABIT" height="200px" width="200px" /></Link>
                                    <div class="card-body">
                                        <h4>GIGABIT</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card shadow-sm">
                                    <Link to="/Robosync"><img src="img\robosync-01-01.png" alt="Python" height="200px" width="200px" /></Link>
                                    <div class="card-body">
                                        <h4>ROBOSYNC</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card shadow-sm">
                                    <Link to="/Kurukshetra"><img src="img\kurukshetra-01.png" alt="Python" height="200px" width="200px" /></Link>
                                    <div class="card-body">
                                        <h4>KURUKSHETRA</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="album py-5 bg-light">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                            <div class="col-lg-4">
                                <div class="card shadow-sm">
                                    <Link to="/Hackathon"><img src="img\hackathon-01.png" alt="HTML,CSS, JavaScript, BootStrap, Tailwind" height="200px" width="200px" /></Link>
                                    <div class="card-body">
                                        <h4>HACKATHON</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card shadow-sm">
                                    <Link to="/Strategem"><img src="img\STRATEGEM-01.png" alt="Python" height="200px" width="200px" /></Link>
                                    <div class="card-body">
                                        <h4>STRATEGEM</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card shadow-sm">
                                    <Link to="/Prayog"><img src="img\PRAYOG-01.png" alt="Python" height="200px" width="200px" /></Link>
                                    <div class="card-body">
                                        <h4>PRAYOG</h4>
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
