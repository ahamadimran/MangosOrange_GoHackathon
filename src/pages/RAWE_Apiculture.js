import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const Apiculture = () => {
  return (
    <Fragment>
        <Menu/>
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/apiculture.png" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Apiculture</h2>
                        <p>Learn all about apiculture from behavioural study of honey bees to purification of 
                            extracted honey.In this course you will learn the basics of rearing honey bees, 
                            their management, how to unite and divide a colony, seasonal management, honey 
                            extraction and purification, value addition and marketing. Get complete hands-on 
                            experience and training of each and every aspect and process making you capable 
                            enough to start your own apiary.<br />
                        </p>
                        
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/apiculture.jpg' alt='Dev'></img>
                    </div>
                </div>
            </div>
            
            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <h4>Socio-economic survey and on-campus training:</h4>
                        <ul>
                            <li>Honey bee intro</li>
                            <li>Behavioural studies</li>
                            <li>Know about swarming absconding and how to catch these</li>
                            <li>How to control different disease</li>
                            <li>How to control pest attack</li>
                            <li>How to manage an Apiary</li>
                            <li>Rearing of honey bees and queen bee</li>
                            <li>Season-wise management</li>
                            <li>Extraction of honey from honey bee</li>
                            <li>Purification of extracted honey</li>
                            <li>Honey made product making</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <h4>Village attachment:</h4>
                        <ul>
                            <li>Undertaking a small-scale beekeeping project</li>
                            <li>Documentation of project activities and outcomes</li>
                            <li>Data collection and analysis related to the project</li>    
                        </ul>
                        <h4>Industrial attachment:</h4>
                        <ul>
                            <li>Visit to operational beekeeping farms and apiaries</li>
                            <li>Hands-on experience in hive management and bee handling</li>
                            <li>Field observations of pollination services and bee behavior</li>
                            <li>Practical demonstrations of honey extraction and processing</li>    
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <ul>
                            <li>Will have knowledge on the behavior of honey bees, including swarming and 
                                absconding, and how to catch these populations. Additionally, it will cover 
                                how to manage these populations properly, which is crucial in maintaining 
                                honeybee colonies.
                            </li>
                            <li>Will know how to identify, control, and prevent different diseases and pest 
                                attacks in an apiary. Additionally, it will cover the theory and practical 
                                aspects of apiary management and maintaining a healthy honeybee population.
                            </li>
                            <li>Will have the knowledge on how to unite a colony, divide a strong colony, 
                                and rear queen bees in queen cages. 
                            </li>
                            <li>Will be familiar with different aspects of managing a honeybee colony in 
                                different seasons, including summer, winter, autumn, and rainy weather. 
                                It will provide insights into the different techniques and strategies required 
                                to keep colonies healthy and productive throughout the year.
                            </li>
                            <li>Will be familiar with aspects of extracting honey from honeycombs and 
                                purifying it. It will provide knowledge on how to do it correctly to ensure 
                                high-quality honey.
                            </li>
                            <li>Will have insights into how to make different honey-based products.</li>
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

export default Apiculture
