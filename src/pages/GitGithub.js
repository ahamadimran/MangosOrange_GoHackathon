import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Git_Github = () => {
  return (
    <Fragment>
        <Menu />
        <body className="body">
            <div className="evebanner">
                <img src="img/banner/Git_Github.png" alt=""/>
            </div>

            <div className='container'>
              <div className='row'>
                <div className='past-event col-lg-7'>
                  <h6><strong>Topic:- </strong>Git,GitHub and It's Important</h6>
                  <h6><strong>Event Duration:- </strong>02 - 03 Hours</h6>
                  <h6><strong>Speaker:- </strong>Imran Ahmad - Senior Tech Lead</h6>
                  <p> <strong>Coverage:- </strong>Git is a distributed version control system that allows 
                  developers to track changes made to their code over time. GitHub is a web-based platform 
                  that provides hosting for Git repositories and additional collaboration features. Version 
                  control is the management of changes to documents, computer programs, and other collections 
                  of information. <br/>
                  Some of the topics covered in Git, GitHub, and version control include:
                  <ul>
                    <li>Basic Git concepts, including repositories, commits, branches, and merges</li>
                    <li>Committing changes to a repository and pushing them to GitHub</li>
                    <li>Collaborating on a project with other developers using Git and GitHub</li>
                    <li>Resolving conflicts that arise when multiple developers work on the same code simultaneously</li>
                    <li>Applying best practices for Git workflows, such as using descriptive commit messages and avoiding committing large binary files</li>
                    <li>Integrating Git with other development tools, such as Continuous Integration/Continuous Deployment (CI/CD) systems</li>
                    <li>Understanding Git internals, including the Git object model and how Git stores and retrieves data.</li>
                  </ul>
                  </p>
                  <h6><strong>Audience:- </strong>Students of B. Tech  1st 2nd  3rd & 4th Year </h6>
                </div>

                <div className=' past-event col-lg-5'>
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

export default Git_Github
