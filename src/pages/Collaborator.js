import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Collaborator = () => {
  return (
    <Fragment>
        <Menu />
        <body id='body'>
            <div class="evebanner">
                <img src="img/banner/Collaborator.png" alt=""/>
            </div>

            <div class="container">
                <div class="row collaborator_section">
                    <div class="textarea col-lg-7">
                        <h3>GoHackathon</h3>
                        <p>Go Hackathon comprises of eminent Industry professionals, educators and students meant to
                           nurture talent among budding tech professional. Industry today is looking for talented students 
                           who are equipped and experience with advanced skills, software, attitude and updated industry 
                           best practices.We create an eco-system of industry academia partnership and help in continuous and
                           sustainable development of innovative ideas, which are impactful for the growing economy and
                           society. Go hackathon thrives to provide best nurturing, mentorship, skills and professional
                           opportunities to its members and participants. We conduct series of events, seminars, hackathons, 
                           internships and Projects.
                        </p>
                        <div>
                            <h3>Why Collaborate Us</h3>
                            <p>Go Hackathon comprises of eminent Industry professionals, educators and students meant to
                               nurture talent among budding tech professional. Industry today is looking for talented students 
                               who are equipped and experience with advanced skills, software, attitude and updated industry 
                               best practices.We create an eco-system of industry academia partnership and help in continuous and
                               sustainable development of innovative ideas, which are impactful for the growing economy and
                               society. Go hackathon thrives to provide best nurturing, mentorship, skills and professional
                               opportunities to its members and participants. We conduct series of events, seminars, hackathons, 
                               internships and Projects.
                            </p>
                        </div>
                    </div>
                    <div class="formarea col-lg-5">
                        <div class="container">
                            <h3>Get in Touch</h3> <br/>
                            <form action="">
                                <label for="fname">Full Name</label>
                                <input type="text" id="fname" name="name" placeholder="Enter Your Name" required/>
                      
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter Your Email" required/>
                      
                                <label for="phone">Phone No.</label>
                                <input type="number" id="phone" name="phone" placeholder="Enter Your Phone Number"/>
                      
                                <label for="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "100px"}}></textarea>
                      
                                <input type="submit" value="Submit"/>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row collaborator_bottom">
                    <div class="textarea col-lg-7">
                        <h3>Benifits of Collaboration</h3>
                        <p>Go Hackathon comprises of eminent Industry professionals, educators and students meant to
                           nurture talent among budding tech professional. Industry today is looking for talented students 
                           who are equipped and experience with advanced skills, software, attitude and updated industry 
                           best practices.We create an eco-system of industry academia partnership and help in continuous and
                           sustainable development of innovative ideas, which are impactful for the growing economy and
                           society. Go hackathon thrives to provide best nurturing, mentorship, skills and professional
                           opportunities to its members and participants. We conduct series of events, seminars, hackathons, 
                           internships and Projects.
                        </p>
                    </div>
                    <div class="imagearea col-lg-5">
                        <img src="img/development2" alt=""/>
                    </div>
                </div>
            </div>
        </body>

        <Footer />
    </Fragment>
  )
}

export default Collaborator
