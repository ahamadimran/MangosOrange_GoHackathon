import React, { Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const OnlineExam = () => {
  return (
    <Fragment>
        <Menu />

        <div class="evebanner">
            <img src="img/banner/online-exam.png" alt="Training Banner"/>
        </div>
        
        <div className='container'>
            <div className='row'>
                <div className='aboutsection col-lg-7'>
                    <h4>Welcome To GoHackathon , Startup and Innovation Portal Of MangosOrange Group.</h4> <br />
                    <strong>Thanks For Choosing our Full Stack Web Development Internship Program.</strong>
                    <p><strong>Kindly Find Below the Details of The Exam</strong> <br/></p>
                    <p><strong>Date: </strong>29th August , 2023</p>
                    <p><strong>Time: </strong>6:00 - 8:00 PM</p>
                    <p>This  Exam will Comprize Of Questions Related To Git & Github, Figma, Frontend, Backend, and Server.</p>
                </div>
                
                <div className='imgofabout col-lg-5'>
                    <img className='imgofabout' src='img/resources/edunet-logo.png' alt='React Development'></img>
                </div>
            </div>
        </div>
        <br/> <br/>

        <div className="container">
          <div className="">
        
            <a href={"URL"}><button className="btn btn-primary px-5 py-2 primary-btn" id="contact">Start Your Exam</button></a>     
          
          </div>
        </div>
        <br/>
            
        <Footer />
    </Fragment>
  )
}

export default OnlineExam
