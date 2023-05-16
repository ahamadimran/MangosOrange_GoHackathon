import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const ELP_Hydroponics = () => {
  return (
    <Fragment>
        <Menu/>
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/hydroponics.png" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Hydroponics</h2>
                        <p>Learn each and every aspect of hydroponics, along with marketing of hydroponically 
                            grown products and their packaging. This course will cover all the technical and 
                            commercial aspects of hydroponic farming. At the end of this course the trainee 
                            will be able to start their own hydroponic farm and will have a solid business 
                            plan which will cover everything from initial seeding to final packaging.<br />
                        </p>
                        
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/elp-hydroponics.jpg' alt='Dev'></img>
                    </div>
                </div>
            </div>
            
            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Fundamentals of Hydroponics Farming Method</li>
                            <li>Hydroponics Seedling & Seed Germination Techniques</li>
                            <li>Irrigation Water Quality and Its Importance in Hydroponics</li>
                            <li>Different Types of Growing Medium and its Factors</li>
                            <li>Hydroponics EC & Ph Management Practical Guide</li>
                            <li>Step by Step, Practical Demo on How to grow without soil</li>
                            <li>Learn Hydroponic Nutrient Solution & Its Properties</li>
                            <li>Different Types of Hydroponic Systems and its Function</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Hydroponic Nutrient Deficiency & How to Manage</li>
                            <li>How to make your own hydroponic system, Learn Step by Step</li>
                            <li>CAD Drawings and Material required to build a hydroponic system</li>
                            <li>Step by Step Practical Guide on, how to grow in Hydroponic System</li>
                            <li>Economics of hydroponics : Cost analysis, Market Demand-Supply Analysis,
                                Feasibility Analysis, Profitability Analysis. 
                            </li>
                            <li>Marketing and Fund raising.</li>    
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <ul>
                            <li>Trainees will have complete and in-depth knowledge of hydroponic systems, 
                                their operation and their maintenance.
                            </li>
                            <li>They will be able to setup their own hydropnic farms and will have thorough 
                                knowledge of hydroponic crops and their yield cycles.
                            </li>
                            <li>They will know how to control the EC & Ph of water, and they will be completely 
                                aware about the nutrients used in hydroponics.
                            </li>
                            <li>They will have thorough knowledge of all the type of hydroponic systems ranging 
                                from home-grown hydroponic systems to the advanced NFT systems. 
                            </li>
                            <li>Trainees will be able to effectively design their hydroponic setups through 
                                CAD drawings.
                            </li>
                            <li>They will be familiar  with each and every aspect of hydroponics as they will 
                                be given a small experimental setup for cultivation of a crop.
                            </li>
                        </ul>
                        {/* <p><strong>Training Cost:- ₹ 6000/-</strong></p> */}
                        <button className="btn btn-primary px-5 py-2 primary-btn">Dureation: 6-8 Weeks</button> &nbsp;
                        {/* <Link to="/payment"><button className="btn btn-primary px-5 py-2 primary-btn">Buy Now</button></Link> &nbsp; */}
                        <Link to="/contact"><button className="btn btn-primary px-5 py-2 primary-btn">Know More</button></Link>
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

export default ELP_Hydroponics
