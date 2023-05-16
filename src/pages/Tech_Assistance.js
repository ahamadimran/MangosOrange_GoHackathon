import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Tech_Assistance = () => {
  return (
    <Fragment>
        <Menu/>
        <div class="evebanner">
            <img src="img/banner/tech-assistance.png" alt=""/>
        </div>

        <div class="container">
            <div class="row">
                <div class="aboutsection col-lg-7">
                    <h2>Expert Tech Assistance at Your Fingertips.</h2>
                    <p>As a Startup Tech Assistant, our role would be to provide technical support and 
                        assistance to entrepreneurs and small business owners who are starting or running a 
                        technology-focused company.<br />
                        We offer a wide range of services, such as technical support, hardware and software setup 
                        and configuration, training and guidance, and strategic counsel on technological decisions. 
                        For early-stage businesses that might lack the means or know-how to manage complicated 
                        technological issues on their own, we can be extremely important. Startup Tech Assistance 
                        can assist startups in focusing on their primary business goals and maintaining their 
                        competitiveness in a fast changing technological environment by offering dependable and 
                        timely technical support.
                    </p>
                    <ul>
                        <li>Technical Advice and Consultation</li>
                        <li>Training and Education</li>
                        <li>Technology strategy</li>
                        <li>Setup and Configuration</li>
                        <li>Security and Backup</li>
                        <li>Maintenance and Upgrades</li>
                    </ul> 
                </div>
                <div class="tech-assist-img col-lg-5">
                    <img class="tech-assist-img" src="img/resources/tech-assist.jpg" alt="Dev" />
                </div>
            </div>
        </div>

        {/* <div className='tech-offer'>
            <h2>What We Do</h2>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src='img/resources/IT-Consulting.jpg'/>
                </div>
                <div className=' tech-desc col-lg-6'>
                    <h2>Training and Education</h2>
                    <p>I can provide training and education on software and hardware to help entrepreneurs and 
                        small business owners get the most out of their technology investment.</p>
                </div>
            </div>
        </div> */}
        <Footer/>
    </Fragment>
  )
}

export default Tech_Assistance
