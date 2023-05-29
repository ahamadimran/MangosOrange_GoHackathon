import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const Java_Fullstack = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/java-mssql.png" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Full Stack Development</h2>
                        <p>Full stack development is a complex and rapidly evolving field that requires a 
                            broad range of skills and knowledge. However, it can also be a rewarding and 
                            lucrative career path for those who are passionate about web development and enjoy 
                            working on both the front-end and back-end of applications. <br/>
                        </p>
                        <p>Students receive a thorough introduction to database and full stack development 
                            in this course. With the technical understanding of front-end and back-end 
                            programming, students will discover the nuances of data structures and algorithms.
                        </p> 
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/java-mongodb.png' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2>Course Coverage</h2>
            <p>Full Stack Development is a comprehensive course that covers all aspects of web development, 
                    from front-end to back-end, to equip learners with the skills required to build end-to-end 
                    web applications. This course aims to provide learners with an understanding of the 
                    technologies, tools, and frameworks used in full stack development and hands-on experience 
                    in building web applications, topics that are typically covered: <br/>
                </p>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Introduction to DevOps: goals, benefits, and challenges</li>
                            <li>Culture and collaboration: Agile, Lean, and ITIL principles</li>
                            <li>Continuous Integration and Continuous Deployment (CI/CD) pipeline</li>
                            <li>Building a CI/CD pipeline: Jenkins, CircleCI, GitLab CI/CD, and Travis CI</li>
                            <li>Containerization and orchestration: Docker, Kubernetes, and Docker Swarm</li>
                            <li>Infrastructure as Code (IaC): Ansible, Chef, Puppet, and Terraform</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                            <li>Cloud computing platforms: AWS, Azure, and Google Cloud Platform</li>
                            <li>Serverless computing: AWS Lambda, Azure Functions, and Google Cloud Functions</li>
                            <li>Monitoring and logging: ELK stack, Prometheus, Grafana, and Splunk</li>
                            <li>Security and compliance: OWASP, DevSecOps, and compliance frameworks</li>
                            <li>Best practices for DevOps: automation, standardization, and collaboration</li>
                            <li>DevOps toolchain integration: Git, GitHub, Jira, and Slack</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will be able to implement DevOps practices 
                            and tools to improve software delivery and deployment. They will have a solid 
                            understanding of agile methodologies, continuous integration and delivery, and 
                            automation tools such as Jenkins, Docker, Kubernetes, and Ansible. Additionally, 
                            students will have experience working with cloud providers such as AWS and Azure, 
                            and be able to configure and manage infrastructure using Infrastructure as Code (IaC) 
                            principles. By the end of the course, students will have developed several projects 
                            and be able to effectively collaborate with other developers using Git for version 
                            control.
                        </p> <br/>
                        <p><strong>Training Cost:- ₹ 10,000/-</strong></p>
                        <button className="btn btn-primary">Duration: 6-8 Weeks</button> &nbsp;
                        <Link to="/payment"><button className="btn btn-primary">Buy Now</button></Link> &nbsp;
                        <Link to="/contact"><button className="btn btn-primary">Know More</button></Link>
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

export default Java_Fullstack
