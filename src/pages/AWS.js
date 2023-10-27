import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AWS = () => {
  return (
    <Fragment>
        <div className='aws'>
            <Helmet>
                <title>Mastering aws at gohackathon: your gateway to cloud excellence</title>
                <meta name="description" content="Participate in GoHackathon's AWS Cloud challenge and demonstrate your cloud computing expertise."/>
                <link rel='canonical' href='http://gohackathon.in/aws'></link>
            </Helmet>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/cloud-infra.png" alt="AWS Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>AWS(CLOUD INFRA)</h2>
                        <p>Learn the fundamentals of Amazon Web Services (AWS) and how to design, deploy, and 
                            manage scalable and secure cloud infrastructure. In this course, you'll learn the 
                            basics of cloud computing and the core services of AWS, including compute, storage, 
                            database, and networking services. You'll also learn how to use popular AWS tools 
                            and services such as EC2, S3, RDS, and VPC to build and deploy applications. 
                            Additionally, you'll learn how to use AWS for DevOps, including CI/CD pipelines 
                            and infrastructure as code (IaC) with AWS CloudFormation and AWS CLI. By the end 
                            of the course, you'll have the skills to start working with AWS and designing and 
                            deploying cloud infrastructure on AWS for real-world projects.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/awscloudinfra.jpeg' alt='AWS Architecture'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2 className='coursecoverage'>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Introduction to AWS: services, regions, and pricing models</li>
                        <li>Compute services: EC2, Elastic Beanstalk, Lambda, and Batch</li>
                        <li>Storage services: S3, EBS, EFS, and Glacier</li>
                        <li>Database services: RDS, DynamoDB, ElastiCache, and Redshift</li>
                        <li>Networking services: VPC, Direct Connect, Route 53, and API Gateway</li>
                        <li>Security and compliance: IAM, KMS, CloudTrail, and Shield</li>
                        <li>Management and monitoring: CloudFormation, CloudWatch, CloudTrail, and Config</li>
                        <li>DevOps and CI/CD: CodeDeploy, CodePipeline, and CodeBuild</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Serverless computing: Lambda, API Gateway, and DynamoDB</li>
                        <li>Big data and analytics: EMR, Kinesis, Athena, and QuickSight</li>
                        <li>Machine learning: SageMaker, DeepLens, and Rekognition</li>
                        <li>Hybrid cloud and migration: AWS Outposts, AWS Snowball, and AWS Database Migration Service</li>
                        <li>Cost optimization and management: AWS Cost Explorer, AWS Trusted Advisor, and AWS Budgets</li>
                        <li>Best practices for AWS: security, scalability, and performance</li>
                        <li>AWS toolkits and frameworks: AWS CLI, AWS SDK, and AWS CloudFormation</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will be able to design, implement, and 
                            manage scalable and reliable cloud infrastructure using Amazon Web Services (AWS). 
                            They will have a solid understanding of AWS's core services, such as EC2, S3, RDS, 
                            and VPC, and be able to choose the appropriate services for their use case. 
                            Additionally, students will have experience working with automation tools such as 
                            AWS CloudFormation, and be able to implement infrastructure as code (IaC) 
                            principles. They will also be proficient in working with monitoring and logging 
                            tools, and implementing security best practices in the cloud. By the end of the 
                            course, students will have developed several cloud-based projects and be able to 
                            effectively collaborate with other developers using Git for version control.
                        </p> <br/>
                        <p><strong>Training Cost:- ₹ 8000/-</strong></p>
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
        </div>
    </Fragment>
  )
}

export default AWS
