import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Figma = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/Figma_banner.jpg" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Figma Design Tool</h2>
                        <p>This course will teach you how to use Figma, a powerful design tool. You'll learn the 
                            basics of its interface, tools, and features, and how to create designs, prototypes, 
                            and collaborate with other designers. By the end of the course, you'll have the 
                            skills to create stunning designs and streamline your design workflow.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/figma-01.jpeg' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Introduction to Figma and its benefits for designers and design teams</li>
                            <li>Figma interface and tools: artboards, frames, layers, shapes, text, and more</li>
                            <li>Creating and managing design components and libraries</li>
                            <li>Collaborating with team members and stakeholders using Figma</li>
                            <li>Using Figma to design interfaces for websites and mobile apps</li>
                            <li>Designing responsive layouts and prototypes in Figma</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Advanced techniques in Figma: plugins, shortcuts, and automation</li>
                            <li>Figma-specific features: commenting, version control, and design handoff</li>
                            <li>Best practices for using Figma in a team setting</li>
                            <li>Figma design system and design thinking</li>
                            <li>Integrating Figma with other design tools and workflows</li>
                            <li>Designing for accessibility and usability in Figma</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will be able to utilize Figma Design Tool 
                            to create professional-quality designs for web and mobile applications. They will 
                            have a strong understanding of Figma's interface and tools, including design 
                            components, frames, and layers. Students will also be able to collaborate and share 
                            designs with team members through Figma's real-time collaboration features. By the 
                            end of the course, students will have created several designs and prototypes using 
                            Figma.
                        </p> <br/>
                        <button className="btn btn-primary px-5 py-2 primary-btn">Dureation: 1-2 Weeks</button> &nbsp;
                        <button className="btn btn-primary px-5 py-2 primary-btn">Buy Now</button> &nbsp;
                        <button className="btn btn-primary px-5 py-2 primary-btn">KNow Now</button>
                    </div>
                    <div className='col-lg-5'>
                        <h2>Get in Touch</h2>
                        <ContactForm/>
                    </div>
                </div>    
            </div>           
        </body>

        <Footer />
    </Fragment>
  )
}

export default Figma
