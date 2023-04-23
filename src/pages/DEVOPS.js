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
        
      <div className="container">
                <div className="row">
                    <div className="aboutsection col-lg-1"></div>
                    <div className="aboutsection col-lg-10">
                        <h1 class="text-center p-3 m-2">DEV-OPS</h1>
                        <p>Learn the set of practices that combines software development and IT operations to build, test, and deploy software faster and more reliably. In this course, you'll learn the fundamentals of DevOps, including continuous integration and continuous delivery (CI/CD), infrastructure as code (IaC), configuration management, and containerization with Docker and Kubernetes. You'll also learn how to use popular DevOps tools such as Git, Jenkins, Ansible, and Terraform, and how to work with cloud platforms like AWS, Azure, and Google Cloud. Additionally, you'll learn how to monitor and troubleshoot your applications using tools like ELK stack and Prometheus. By the end of the course, you'll have the skills to start working on DevOps projects and implement DevOps practices in your organization.</p>
                    </div>
                    <div className="aboutsection col-lg-1"></div>
                </div>
            </div>

    <div className="container">
        <div className="row justify-content-center">
            <div className="m-2 col-lg-5 p-3 shadow">
            <h2  class="text-center m-2">Coverage</h2>
                <ul>
                    <li>Introduction to DevOps: goals, benefits, and challenges</li>
                    <li>Culture and collaboration: Agile, Lean, and ITIL principles</li>
                    <li>Continuous Integration and Continuous Deployment (CI/CD) pipeline</li>
                    <li>Building a CI/CD pipeline: Jenkins, CircleCI, GitLab CI/CD, and Travis CI</li>
                    <li>Containerization and orchestration: Docker, Kubernetes, and Docker Swarm</li>
                    <li>Infrastructure as Code (IaC): Ansible, Chef, Puppet, and Terraform</li>
                    <li>Cloud computing platforms: AWS, Azure, and Google Cloud Platform</li>
                    <li>Serverless computing: AWS Lambda, Azure Functions, and Google Cloud Functions</li>
                    <li>Monitoring and logging: ELK stack, Prometheus, Grafana, and Splunk</li>
                    <li>Security and compliance: OWASP, DevSecOps, and compliance frameworks</li>
                    <li>Best practices for DevOps: automation, standardization, and collaboration</li>
                    <li>DevOps toolchain integration: Git, GitHub, Jira, and Slack</li>
                </ul>
            </div>
            <div className=" col-lg-5 m-2 shadow p-3">
                <h2  class="text-center m-2">Learning Outcome</h2>
                <p>Upon completion of this course, students will be able to implement DevOps practices and tools to improve software delivery and deployment. They will have a solid understanding of agile methodologies, continuous integration and delivery, and automation tools such as Jenkins, Docker, Kubernetes, and Ansible. Additionally, students will have experience working with cloud providers such as AWS and Azure, and be able to configure and manage infrastructure using Infrastructure as Code (IaC) principles. By the end of the course, students will have developed several projects and be able to effectively collaborate with other developers using Git for version control.</p>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 text-white text-center m-3 p-3 bg-secondary rounded"><h3>Duration: 6-8 Weeks</h3></div>
                <div class="col-lg-5 text-white text-center m-3 p-3 bg-secondary rounded"><h3>Pricing: 10,000/-</h3></div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-12 text-center m-3 p-3 ">
                    <a className="btn btn-primary text-white" href={URL} role="button">Buy Now</a>
                </div>
            </div>
        </div>
            <div class="row">
                <div className='col-lg-1'></div>
                <div className='col-lg-10'>
                    <h2 class="text-center">Get in Touch</h2>
                    <ContactForm />
                </div>
                <div className='col-lg-1'></div>
            </div>
    </div>
</body>
        <Footer />
    </Fragment>
  )
}

export default DEVOPS
