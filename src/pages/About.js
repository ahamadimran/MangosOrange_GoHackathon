import React, { Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const about = () => {
  return (
    <Fragment>
      <Menu />

<body id="body">
    <div class="evebanner">
        <img src="img/banner/About.png" alt="" />
      </div>
        
            <div class="container">
                <div class="row">
                    <div class="aboutsection col-lg-7">
                        <h1>About GoHackathon</h1>
                        <p>Go Hackathon comprises of eminent Industry professionals, educators and students meant to
                            nurture talent among budding tech professional. Industry today is looking for talented 
                            students who are equipped and experience with advanced skills, software, attitude and 
                            updated industry best practices. <br />
                        </p>
                        <p>We create an eco-system of industry academia partnership and help in continuous and
                            sustainable development of innovative ideas, which are impactful for the growing economy and
                            society. Go hackathon thrives to provide best nurturing, mentorship, skills and professional opportunities to its members and participants.
                            We conduct series of events, seminars, hackathons, internships and Projects.
                        </p> 
                    </div>
                    <div class="imgofabout col-lg-5">
                        <img class="imgofabout" src="img/development2" alt="Dev" />
                    </div>
                </div>
            </div>

    <div class="container">
        <div class="row">
            <div class="aboutsection-bottom col-lg-12">
                <h2>About Mangosorange Group</h2>
                <p>MangosOrange Group aspires to be a fortune 500 company in the coming years. We are an 
                    integrated service provider company with a knack of customized solutions for our esteemed 
                    national & multinational brands. With a cumulative team experience of more than 100 years 
                    we have delivered quality staffing solutions, skill development projects, Integrated 
                    Facility Management Services. <br />
                </p>
                <ul>
                    <li>Work Integrated Skill Training & Apprenticeship (WISTA)</li>
                    <li>Staffing Solutions including Contract Labour & Payroll Services.</li>
                    <li>Integrated Facility Management Services.</li>
                    <li>Vocational & Skill Development Projects (NAPS, Flexi-MoU, B. Voc., DDU-GKY & PMKVY)</li>
                    <li>Design and Deliver impactful CSR initiatives.</li>
                    <li>Catering Services in Industries, Hospitals, Skill Development Centers, Hostels & other Establishments.</li>
                    <li>Research & Development in Agritech & Allied Program.</li>
                </ul>
                <a href="https://mangosorange.co.in/">
                    <button class="btn btn-primary">Know More</button>
                </a>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="aboutsection-agritech col-lg-12">
                <h2>MangosOrange Agritech India Pvt. Ltd.</h2>
                <p>MangosOrange Agritech India Private Limited is an Agritech startup envisaging the vision of 
                    creating startup culture in Agriculture using technology and innovation. Help develop 
                    entrepreneurship through creating centre of excellence, innovation labs, training labs, 
                    high-tech farms. Seek funding from investors and provide implementation of high-tech farms 
                    and build commercial farming setup for interested educational institutions, private bodies 
                    and individuals, farmers and investors.<br />
                </p>
                <ul>
                    <li>Research and Development</li>
                    <li>Modern Innovative Farming</li>
                    <li>Educating and Consulting</li>
                </ul>
                <a href="https://mangosorangeagritech.in/">
                    <button class="btn btn-primary">Know More</button>
                </a>
            </div>
        </div>
    </div>
</body>

    <Footer />
    </Fragment>
  )
}

export default about;
