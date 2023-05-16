import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const ELP_Organic_Farming = () => {
  return (
    <Fragment>
        <Menu/>
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/organic-farming.png" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Organic Farming</h2>
                        <p>Learn and experience organic farming and its practices right from seed to harvest 
                            along with on farm input production and soil management waste management and project 
                            reports. You will also learn marketing and economic viability, nutrient, pest and 
                            seed management.<br />
                        </p>
                        
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/elp-organic-farming.jpg' alt='Dev'></img>
                    </div>
                </div>
            </div>
            
            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Principles of Organic Farming</li>
                            <li>Organic Farming v/s Chemical Farming</li>
                            <li>Basic Concept of Organic Farming</li>
                            <li>On Farm Input production</li>
                            <li>Minerals / elements essential for Plants</li>
                            <li>Testing the quality of soil and its management</li>
                            <li>Proper handling of farm waste and household waste</li>
                            <li>Harvesting and storage of Organic products</li>
                            <li>Training on Friend and Enemy Insects/Pests</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Making of Project Reports, Visit to Banks for knowledge on criteria for loans and its repayment</li>
                            <li>Training on Cluster Making</li>
                            <li>Practices of Organic Farming</li>
                            <li>Visit to organic farmer’s fields & Vermi-compost unit</li>
                            <li>Marketing of Organic Products</li>
                            <li>Economic viability of Organic Farming</li>
                            <li>Integrated Nutrition, Pest and Weed Management</li>
                            <li>Basic concept of Nucleus/Breeder/Foundation/Certified Seeds</li>    
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <ul>
                            <li>The trainee will have complete knowledge of the principles and concepts of 
                                organic farming.
                            </li>
                            <li>The trainee will be able to produce on-farm inputs such as Jaivik Chabutra 
                                and Fortified Compost.
                            </li>
                            <li>They will have knowledge of minerals and elements essential for plants and 
                                how to test soil quality and manage it effectively. 
                            </li>
                            <li>The trainee will have the proper knowledge of handling of farm and household 
                                waste, harvesting and storage of organic products, and making project reports.
                            </li>
                            <li>Trainee will be able to market organic products and will know about economic 
                                viability of organic farming.
                            </li>
                            <li>In-depth knowledge of integrated nutrient management, economic threshold level, 
                                integrated pest management, and integrated weed management.
                            </li>
                            <li>They will have  knowledge of the basic concepts of nucleus, breeder, foundation, 
                                and certified seeds.
                            </li>
                            <li>Trainees will be able to identify friend and enemy insects and pests and how 
                                to manage them effectively. 
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

export default ELP_Organic_Farming
