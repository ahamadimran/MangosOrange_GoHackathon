import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import QueryForm from './QueryForm';

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
                    <h2 >Custom Software Development</h2> <br/>
                    <p>GoHackathon, a leading provider of software development services, excels at providing 
                        specialized custom software development services that help businesses reach new heights.
                    </p>
                    <p>With our software development services, you'll receive dedication, knowledge, and 
                        outcomes that are unmatched. Your road to success begins right here! As a top software 
                        development firm, we provide extensive custom software development services made to 
                        satisfy your organization's requirements and promote innovation. We move in step with 
                        new technology as an enterprise software development business. We create sophisticated, 
                        high-performance solutions that are suited to your business demands by utilizing the 
                        most recent software and technological platforms. For each OS, browser, and device, we 
                        can create dependable, scalable, and secure software solutions. We create specialized 
                        products and solutions that properly suit the demands and behaviors of their customers 
                        by combining our in-depth knowledge of the sector with the most recent IT developments.
                    </p>

                    <button type="button" class="btn btn-outline-info btn-lg">ERP</button> &nbsp; &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">CRM</button> &nbsp; &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">HRMS</button> <br/> <br/>
                    <button type="button" class="btn btn-outline-info btn-lg">E-Commerce</button> &nbsp; &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">Applications</button> &nbsp; &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-info btn-lg">CMS Development</button>
                </div>
                <div className='col-lg-5'>
                    <QueryForm />
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
            <h3 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Choose the best Software Development Company for your project</h3> <br/> <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <img src="img/resources/ui-ux.jpg" alt="UI/UI Design" height="200px" width="100%"/>
                            <div class="card-body">
                                <h4>UI / UX</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <img src="img/resources/web-develop.jpg" alt="Web Development" height="200px" width="100%"/>
                            <div class="card-body">
                            <h4>Web Development</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <img src="img/resources/app-develop.jpg" alt="App Development" height="200px" width="100%"/>
                            <div class="card-body">
                            <h4>App Development</h4>
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
                           <img src="img/resources/custop-develop.jpg" alt="Open Source Software Customization" height="200px" width="100%"/>
                            <div class="card-body">
                                <h4>Open Source Customization</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <img src="img/resources/cloud-infra.jpg" alt="Cloud Infrastructure" height="200px" width="100%"/>
                            <div class="card-body">
                                <h4>Cloud Infrastructure</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <img src="img/resources/tech-assist.jpg" alt="React Frontend Training" height="200px" width="100%"/>
                            <div class="card-body">
                                <h4>Tech-Assistant for Startup</h4>
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
