import React,{Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const Agritech_Training = () => {
  return (
    <Fragment>
        <Menu/>
        <div class="evebanner">
            <img src="img/banner/agritech.png" alt=""/>
        </div>

        <div className='container trainingheading'>
            <h2>Bringing the Power of Technology and Innovations</h2>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                    <h2>Revolutionizing Agriculture for a Sustainable Future</h2> <br/>
                    <p>MangosOrange Agritech India Private Limited is an Agritech startup envisaging the vision 
                        of creating startup culture in Agriculture using technology and innovation. Help develop 
                        entrepreneurship through creating centre of excellence, innovation labs, training labs, 
                        high-tech farms. Seek funding from investors and provide implementation of high-tech 
                        farms and build commercial farming setup for interested educational institutions, 
                        private bodies and individuals, farmers and investors.
                    </p>
                    <ul>
                        <li>Research and Development</li>
                        <li>Modern Innovation Farming</li>
                        <li>Educating and Consulting</li>
                    </ul>

                </div>
                <div className='col-lg-5'>
                    <ContactForm/>
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-2"></div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/Git_hub"><img src="img/courses/ppt.jpg" alt="GiT & GiTHub" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>PPT Making</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/figma"> <img src="img/courses/figma.jpeg" alt="Figma Design Tool" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Figma Design Tool</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                    
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
            <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Rural Agricultural Work Experience (RAWE)</h2> <br/> <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/rawe-apiculture"><img src="img/courses/apiculture.jpg" alt="Apiculture" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Apiculture</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/rawe-organic-farming"><img src="img/courses/organic-farming.jpg" alt="Organic Farming" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Organic Farming</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/rawe-turmeric-cultivation"> <img src="img/courses/turmeric-cultivation.jpg" alt="Turmeric Cultivation" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Turmeric Cultivation</h4>
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
                        <Link to="/rawe-mushroom-cultivation"><img src="img/courses/mushroom-cultivation.jpg" alt="Mushroom Cultivation" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Mushroom Cultivation</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/rawe-hydroponics"><img src="img/courses/hydroponics.jpg" alt="Hydroponics" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Hydroponics</h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
            <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Experiential Learning Program (ELP)</h2> <br/> <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/elp-apiculture"><img src="img/courses/elp-apiculture.jpg" alt="Apiculture" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Apiculture</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/elp-organic-farming"><img src="img/courses/elp-organic-farming.jpg" alt="Organic Farming" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Organic Farming</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/elp-turmeric-cultivation"> <img src="img/courses/elp-turmeric-cultivation.jpg" alt="Turmeric Cultivation" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Turmeric Cultivation</h4>
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
                        <Link to="/elp-mushroom-cultivation"><img src="img/courses/elp-mushroom-cultivation.jpg" alt="Mushroom Cultivation" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Mushroom Cultivation</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/elp-hydroponics"><img src="img/courses/elp-hydroponics.jpg" alt="Hydroponics" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Hydroponics</h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <Footer/>
    </Fragment>
  )
}

export default Agritech_Training
