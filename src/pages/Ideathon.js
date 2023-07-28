import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import RegistrationForm from './RegistrationForm';

const Ideathon = () => {
  return (
    <Fragment>
        <Menu />
        <body className="body">
            <div className="evebanner">
                <img src="img/banner/Ideathon.png" alt="Ideathon Banner"/>
            </div>

            <div className='container'>
              <div className='row'>
                <div className='past-event col-lg-7'>
                  <h2>Gohackathon Ideathon</h2>
                  <p> An ideathon is an event where people come together to generate and share innovative ideas 
                    for solving a specific problem or addressing a particular challenge. It is usually a 
                    competition-style event where participants work in teams to develop and present their ideas 
                    to a panel of judges or experts. <br/>
                    Ideathons can focus on a range of topics, from social issues like climate change or poverty 
                    to business challenges like improving customer experiences or developing new products. 
                    They can be organized by companies, universities, or community groups, and often involve 
                    cash prizes or other incentives for winning teams.
                  </p>
                  <ul>
                    <li><strong>Collaboration: </strong>Ideathons bring together people from diverse backgrounds 
                    and skillsets to work collaboratively towards a common goal. This creates opportunities for 
                    cross-disciplinary learning, knowledge-sharing, and new partnerships.</li>

                    <li><strong>Creativity and Innovation: </strong>Ideathons encourage participants to think 
                    outside the box and come up with innovative solutions to complex problems. By leveraging the 
                    collective brainpower of the participants, ideathons often produce fresh and creative ideas 
                    that may not have been possible through traditional problem-solving methods.</li>

                    <li><strong>Skill Development: </strong>Ideathons provide an opportunity for participants 
                    to develop new skills or hone existing ones, such as design thinking, ideation, rapid 
                    prototyping, and pitching.</li>

                    <li><strong>Networking: </strong>Ideathons provide a platform for participants to connect 
                    with mentors, industry experts, and potential collaborators. This can lead to new opportunities, 
                    partnerships, and career prospects.</li>

                    <li><strong>Social Impact: </strong>Ideathons often focus on solving real-world problems, and 
                    the solutions developed have the potential to make a positive impact on society. By providing 
                    a forum for social innovation, ideathons can help advance progress towards the UN Sustainable 
                    Development Goals or other important social initiatives.</li>
                  </ul>
                </div>

                <div className=' past-event col-lg-5'>
                  <h2>Register Now</h2>
                  <RegistrationForm />
                </div>
              </div>
            </div> 
                
        </body>
        <Footer />
    </Fragment>
  )
}

export default Ideathon
