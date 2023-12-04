import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const WebDevelopment = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/react-node-mssql.png" alt="React Fullstack Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Web Design & Development</h2>
                        <p>Gohackathon specializes in creating web-based and software solutions that are focused 
                            on the needs of the user. Our natural ability to combine the appropriate strategy, 
                            technology, and design guarantees that we consistently offer a solution that is far 
                            above the standards of our clients. We provide a variety of services to our clients 
                            in the online web arena. In the modern world, having a website is now necessary to 
                            maintain your business's momentum. Your website is a true reflection of your company 
                            because it not only provides people with information about it but also reveals your 
                            working methods. Therefore, a website should be developed employing the most 
                            cutting-edge web development approaches with complete attention and zeal.
                        </p>
                        <p>MangosOrange is a well-known web development and design firm from which you may 
                            acquire a fully-functional, contemporary website to expand your online presence. 
                            Our websites can provide you a competitive edge in your field.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/resources/web-development.jpg' alt='Web Development'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
                
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <strong>How We Work</strong>
                        <p>Our web development process includes developing a comprehensive strategy, planning 
                            design workshops with the customer, building the entire website map, gathering 
                            client information, and designing dynamic user interfaces.
                        </p>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <strong>Customer Dlight</strong>
                        <p>We create and preserve lasting connections with our customers. We promise to provide 
                            you with online solutions that are incredibly useful. We provide a variety of 
                            services that span the entire development and design process.
                        </p>
                    </div> 
                </div>
            </div>

            <section className="section-2  p-0">
                <div className="purchase text-center">
                    <h2>Work Process</h2>
                </div>
                <br/>
                <div className='container'>
                    <div className='row'>
                        <div class="card-deck">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Requirement and Planning</h4>
                                    <p class="card-text">The first step is to understand your business's purpose, primary goals, and the target audience. Based on the information gathered, we suggest the right plan for your Project</p>
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Cloud Infrastructures</h4>
                                    <p class="card-text">Based on the information gathered, we design the right page layouts, color cobination & screens for you. We implement the content, design screens and required Frameworks and CMS to the website.</p>
                                </div>
                            </div>
                            
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Test and Launch</h4>
                                    <p class="card-text">Before we launch the website, we check if all the forms and scripts are functioning correctly. Once launched, we carry out opinion monitoring and regularly make updates to your website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Get in touch</h2>
                        <br/>
                        <p>We create and preserve lasting connections with our customers. We promise to provide 
                            you with online solutions that are incredibly useful. We provide a variety of 
                            services that span the entire development and design process. They are sorely 
                            lacking in a number of crucial components that are necessary for your website to 
                            grow and expand to its full potential. However, a reputable website development 
                            company like MangosOrange will help you by offering all types of online solutions, 
                            including annual maintenance and consulting, in addition to creating an incredible 
                            website with fantastic functionalities.
                        </p>
                        <p>We can manage various domains from various sectors thanks to our capabilities. We 
                            develop dynamic websites and web applications with W3C Standards and Client Hints 
                            Technology. For each project, we designate a Project Coordinator who will provide 
                            you with comprehensive information on the project, including the tasks we undertake, 
                            the due date, etc. Please complete our request information form and our consulting 
                            representative shall get in touch with you shortly.
                        </p>
                    </div>
                    <div className='aboutsection col-lg-5'>
                        <ContactForm/>
                    </div>
                </div>    
            </div>

        </body>
        <Footer />
      
    </Fragment>
  )
}

export default WebDevelopment
