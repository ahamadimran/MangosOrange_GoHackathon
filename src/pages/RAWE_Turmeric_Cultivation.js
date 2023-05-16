import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const RAWE_Turmeric_Cultivation = () => {
  return (
    <Fragment>
        <Menu/>
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/turmeric-cultivation.png" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Turmeric Cultivation</h2>
                        <p>Hands-on cultivation of turmeric along with all the knowledge of its area & region 
                            for cultivation, economic part used, oil content present and identification of 
                            different  parts of turmeic plant.Complete theory and practical knowledge of all 
                            the aspects of turmeric cultivation will be provided to the trainees.<br />
                        </p>
                        
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/turmeric-cultivation.jpg' alt='Dev'></img>
                    </div>
                </div>
            </div>
            
            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <h4>Socio-economic survey and on-campus training:</h4>
                        <ul>
                            <li>Area and production</li>
                            <li>Botany of turmeric</li>
                            <li>Economic part used & oil content present.</li>
                            <li><strong>Production Technology: </strong>Climate, Soil, Propagation method, Land preparation, Planting, Manure & Fertilizers, Irrigation, Inter-culture.</li>
                            <li>Cultivation on a small experimental plot by trainees.</li>
                            <li><strong>Harvesting and Processing: </strong>Harvesting, Curing, Polishing, Colouring.</li>
                            <li><strong>Value added products: </strong>Dehydrated turmeric powder, Oil.</li>
                            <li>Full setup and business plan of a turmeric farm.</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <h4>Village attachment:</h4>
                        <ul>
                            <li>Undertaking a small-scale hydroponics project</li>
                            <li>Documentation of project activities and outcomes</li>
                            <li>Data collection and analysis related to the project</li>    
                        </ul>
                        <h4>Industrial attachment:</h4>
                        <ul>
                            <li>Visits to operational hydroponic farms and facilities</li>
                            <li>Hands-on experience in setting up and maintaining hydroponic systems</li>
                            <li>Observation of crop management techniques and practices</li>
                            <li>Practical demonstrations of nutrient solution preparation and pH adjustment</li>    
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <ul>
                            <li>The trainee will Knowledge of the economic part used, oil content present 
                                and identification of different  parts of turmeic plant.
                            </li>
                            <li>They will have an Idea about distance between plant size & how much yield 
                                can be obtained from organic farming.
                            </li>
                            <li>The trainee will have complete knowledge of avg yield from the plant & 
                                processing of the turmeric. 
                            </li>
                            <li>They will be able to make vallu added products like Oil and Dehydrated powder</li>
                            <li>They will be able to setup a turmeric farm and business of their own.</li>
                        </ul>
                        {/* <p><strong>Training Cost:- ₹ 6000/-</strong></p> */}
                        <button className="btn btn-primary">Duration: 6-8 Weeks</button> &nbsp;
                        <Link to="/payment-agritech"><button className="btn btn-primary">Buy Now</button></Link> &nbsp;
                        <Link to="/contact"><button className="btn btn-primary">Know More</button></Link>
                    </div>
                    <div className='col-lg-5'>
                        <h2>Get in Touch</h2>
                        <ContactForm/>
                    </div>
                </div>    
            </div>
        </body>
        <Footer/>
    </Fragment>
  )
}

export default RAWE_Turmeric_Cultivation
