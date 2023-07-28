import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Gyan_Goshthi = () => {
  return (
    <Fragment>
        <Menu/>
        <body id="body">
    <div class="evebanner">
        <img src="img/banner/Gyan_Goshthi.png" alt="Gyan Goshthi Banner" />
      </div>
        
            <div class="container">
                <div class="row">
                    <div class="aboutsection col-lg-7">
                        <h2>GYAN GOSHTHI – The Concept</h2>
                        <p>GYAN GOSHTHI is an event that brings together individuals from various backgrounds 
                            and industries to generate creative and innovative ideas on a specific topic or 
                            challenge. This event typically involves brainstorming sessions, workshops, and 
                            presentations, where participants are encouraged to think outside the box and come 
                            up with unique solutions to the challenge at hand. The aim of an GYAN GOSHTHI is to 
                            foster collaboration and creativity, and to generate a pool of valuable ideas that 
                            can be further developed and implemented. GYAN GOSHTHIs are often used by organizations 
                            to generate new ideas for product development, marketing campaigns, and business strategy. 
                            They are also a popular way for startups and entrepreneurs to come up with fresh, new 
                            concepts and pitch them to potential investors or partners. <br />
                        </p>
                        <p>We create an eco-system of industry academia partnership and help in continuous and
                            sustainable development of innovative ideas, which are impactful for the growing economy and
                            society. Go hackathon thrives to provide best nurturing, mentorship, skills and professional opportunities to its members and participants.
                            We conduct series of events, seminars, hackathons, internships and Projects.
                        </p> 
                    </div>
                    <div class="imgofabout col-lg-5">
                    <img class="imgofabout" src="img/event/gyan-02.png" style={{height: "150%", width: "100%"}} alt="Gyan Goshthi" />
                    </div>
                </div>
            </div>

    <div class="container">
        <div class="row">
            <div class="aboutsection-bottom col-lg-12">
                <h2>GYAN GOSHTHI – Execution</h2>
                <p>Gyan Goshthi event comprises of 3 days and 2 nights residential workshop and interaction 
                    program among students, corporate professionals and entrepreneurs in a single place. 
                    It’s a fun filled intellectual engagement among them at a beautiful off beat location 
                    near popular hill station. The objective of this interaction is to identify potential 
                    team members to work upon any startup idea under the guidance of corporate experts. 
                    Start-up journey is tough and full of challenges, the interaction of 3 days will help 
                    identify individuals who are skilled and qualified to carry out their entrepreneurship 
                    journey at an early stage. During the stay along with intellectual interaction, fun 
                    activities, campfire, etc. will also be a part of the entire experience.  <br />
                </p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="aboutsection-agritech col-lg-7">
                <h3>GYAN GOSHTHI- Selection Process</h3>
                <p>In order to optimize the outcome of this event the participation will be only through a prior 
                    online interaction. Candidates will be judged on the basis of interpersonal skills, 
                    willingness, creative aptitude, startup idea and travel enthusiast. <br />
                </p>
                <h3>GYAN GOSHTHI – Action Plan</h3>
                <p>Selected team will undergo internship on specified idea under the guidance of industry 
                    experts. Their training and project guidance will be handled by gohackathon.in as per 
                    the need. Once the project is ready to go to market it will be presented in front of the 
                    investors and pitched for funding. Successful projects will be rolled into the market. <br />
                </p> <br/>
                <h3>GYAN GOSHTHI- Remuneration</h3>
                <p>The interested students would first invest on travel food and accommodation for 3 days 
                    2 nights Workshop. However, the training during these 3 days will be free of cost.  
                    Once the team is finalized the investment on the project (training on specific technology, 
                    material, product, equipment, travelling etc.) will be borne by the students Mentorship, 
                    guidance and support will be free of cost. <br />
                </p>  
            </div>
            <div className='col-lg-5'>
                <h2>Get in Touch</h2>
                <ContactForm />
            </div>
        </div>
    </div>
</body>
        <Footer/>
    </Fragment>
  )
}

export default Gyan_Goshthi
