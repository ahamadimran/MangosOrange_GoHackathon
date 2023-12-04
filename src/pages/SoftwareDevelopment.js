import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import QueryForm from './QueryForm';
import { Link } from 'react-router-dom';

const SoftwareDevelopment = () => {
  return (
    <Fragment>
        <Menu />

        <div class="evebanner">
            <img src="img/banner/software-development.png" alt="Software Development Banner"/>
        </div>

        <div className='container trainingheading'>
            {/* <h2>Elevating Businesses through Innovative Software Solutions</h2> */}
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                    <h2 >Software Development</h2> <br/>
                    <p>GoHackathon, a leading provider of software development services, excels at providing 
                        specialized custom software development services that help businesses reach new heights.
                    </p>
                    <p>With our software development services, you'll receive dedication, knowledge, and 
                        outcomes that are unmatched. Your road to success begins right here! As a top software 
                        development firm, we provide extensive custom software development services made to 
                        satisfy your organization's requirements and promote innovation. We move in step with 
                        new technology as an enterprise software development business.
                    </p>
                    <p>We create sophisticated,High-performance solutions that are suited to your business demands by utilizing the 
                        most recent software and technological platforms. For each OS, browser, and device, we 
                        can create dependable, scalable, and secure software solutions. We create specialized 
                        products and solutions that properly suit the demands and behaviors of their customers 
                        by combining our in-depth knowledge of the sector with the most recent IT developments.
                    </p>

                    <button type="button" class="btn btn-outline-info btn-lg">Web</button> &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">App</button> &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">Cloud</button> &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">Open Source</button> &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">Custom Software</button> <br/> <br/>
                    <button type="button" class="btn btn-outline-info btn-lg">Tech-Assistance</button> &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">UI/UX</button>  &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">E-Commerce</button> &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">LMS</button>

                </div>
                <div className='col-lg-5'>
                    <QueryForm />
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
            
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/resources/web-develop.jpg" alt="Web Development" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Web Development</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/resources/app-develop.jpg" alt="App Development" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>App Development</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to=""><img src="img/resources/cloud-infra.jpg" alt="Cloud Infrastructure" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Cloud Infrastructure</h4>
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
                           <Link to=""><img src="img/resources/custop-develop.jpg" alt="Open Source Software Customization" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Open Source Customization</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to=""><img src="img/resources/custom-development.jpg" alt="Custom Software Development" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Custome Software</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to=""><img src="img/resources/tech-assist.jpg" alt="Tech Assistance for Startup" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Tech-Assistant for Startup</h4>
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
                           <Link to=""><img src="img/resources/ui-ux.jpg" alt="UI/UX Designing" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>UI/UX Designing</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to=""><img src="img/resources/e-commerce.jpg" alt="E-Commerce Development" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>E-Commerce</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to=""><img src="img/resources/custom-lms.jpg" alt="Custom LMS" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Custom LMS</h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <Footer />

    </Fragment>
  )
}

export default SoftwareDevelopment
