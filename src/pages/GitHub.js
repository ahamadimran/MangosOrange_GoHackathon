import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Git_hub = () => {
  return (
    <Fragment>
        <div className='github'>
            <Helmet>
                <title>Advanced GitHub Training: Streamline Development and Collaboration</title>
                <meta name="description" content="Unlock the power of version control and collaboration with our GitHub training. Master branching, pull requests, collaboration strategies, and more. "/>
            </Helmet>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/Git_Github.png" alt="GitHub Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>Git & GitHub</h2>
                        <p>This course will teach you the basics of version control with Git and its integration 
                            with GitHub. You'll learn how to create and manage repositories, commit changes, and 
                            collaborate with others using these tools. By the end of the course, you'll have the 
                            skills to manage your projects and work effectively with other developers. <br />
                        </p>
                        <p> On GitHub, developers can host their code repositories, collaborate with others, 
                            track issues and bugs, and contribute to open-source projects. It's a popular 
                            platform for software development and is used by millions of developers around the 
                            world.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/git-github.png' alt='GitHub'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-12'>
                        <h2>Course Coverage</h2>
                        <p>Git is a distributed version control system that allows developers to track changes 
                            made to their code over time. GitHub is a web-based platform that provides hosting 
                            for Git repositories and additional collaboration features. Version control is the 
                            management of changes to documents, computer programs, and other collections of 
                            information, topics that are typically covered:
                        </p>
                        <ul>
                            <li>Introduction to version control systems</li>
                            <li>Basics of Git: repository, commit, branching, merging</li>
                            <li>Installing Git and setting up GitHub</li>
                            <li>Collaborating with others using Git and GitHub</li>
                            <li>Pull requests and code reviews</li>
                            <li>Resolving conflicts and managing merges</li>
                            <li>Advanced Git techniques: rebasing, cherry-picking</li>
                            <li>GitHub-specific features: issues, wikis, project management</li>
                            <li>Customizing and extending Git/GitHub with plugins and APIs</li>
                            <li>Best practices for using Git/GitHub in a team setting</li>
                            <li>Git/GitHub for open source projects</li>
                            <li>Troubleshooting and debugging common Git/GitHub issues</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completing Git and GitHub course, learners should be able to: <br /> </p>
                        <ul>
                            <li>Basic Git concepts, including repositories, commits, branches, and merges</li>
                            <li>Creating and cloning repositories on GitHub</li>
                            <li>Committing changes to a repository and pushing them to GitHub</li>
                            <li>Collaborating on a project with other developers using Git and GitHub</li>
                            <li>Resolving conflicts that arise when multiple developers work on the same code simultaneously</li>
                            <li>Using Git branches to manage development and release cycles</li>
                            <li>Applying best practices for Git workflows, such as using descriptive commit messages and avoiding committing large binary files</li>
                            <li>Integrating Git with other development tools, such as Continuous Integration/Continuous Deployment (CI/CD) systems</li>
                            <li>Understanding Git internals, including the Git object model and how Git stores and retrieves data.</li>
                        </ul> <br/>
                        <p><strong>Training Cost:- ₹ 149/-</strong></p>
                        <button className="btn btn-primary">Duration: 1 Week</button> &nbsp;
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

export default Git_hub
