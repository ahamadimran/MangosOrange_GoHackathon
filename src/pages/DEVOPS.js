import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const DEVOPS = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/dev-ops.jpg" alt=""/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>DevOps</h2>
                        <p>Learn the set of practices that combines software development and IT operations to 
                            build, test, and deploy software faster and more reliably. In this course, you'll 
                            learn the fundamentals of DevOps, including continuous integration and continuous 
                            delivery (CI/CD), infrastructure as code (IaC), configuration management, and 
                            containerization with Docker and Kubernetes. You'll also learn how to use popular 
                            DevOps tools such as Git, Jenkins, Ansible, and Terraform, and how to work with 
                            cloud platforms like AWS, Azure, and Google Cloud. Additionally, you'll learn how 
                            to monitor and troubleshoot your applications using tools like ELK stack and 
                            Prometheus. By the end of the course, you'll have the skills to start working on 
                            DevOps projects and implement DevOps practices in your organization.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/devops.jpg' alt='Dev'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2>Course Coverage</h2>
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
                        <button className="btn btn-primary px-5 py-2 primary-btn">Dureation: 6-8 Weeks</button> &nbsp;
                        <button className="btn btn-primary px-5 py-2 primary-btn">Buy Now</button> &nbsp;
                        <button className="btn btn-primary px-5 py-2 primary-btn">Know More</button>
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

export default DEVOPS
