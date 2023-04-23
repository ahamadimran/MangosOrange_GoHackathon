import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Git_hub = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
        <div className="evebanner">
            <img src="img/banner/Github_banner.jpg" alt=""/>
        </div>
        
            <div className="container">
                <div className="row">
                    <div className="aboutsection col-lg-2"></div>
                    <div className="aboutsection col-lg-8">
                        <h1 class="text-center p-3 m-2">GIT & GITHub</h1>
                        <p>This course will teach you the basics of version control with Git and its integration with GitHub. You'll learn how to create and manage repositories, commit changes, and collaborate with others using these tools. By the end of the course, you'll have the skills to manage your projects and work effectively with other developers.<br/>
                        </p>
                    </div>
                    <div className="aboutsection col-lg-2"></div>
                </div>
            </div>

    <div className="container">
        <div className="row justify-content-center">
            <div className="m-2 col-lg-5 p-3 shadow">
            <h2  class="text-center m-2">Coverage</h2>
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
            <div className=" col-lg-5 m-2 shadow p-3">
                <h2  class="text-center m-2">Learning Outcome</h2>
                <p>Upon completion of this course, students will be able to effectively use Git and GitHub for version control and collaboration on software development projects. They will have a thorough understanding of basic Git concepts, including branching and merging, and will be able to create, clone, and manage repositories on GitHub. Additionally, students will have hands-on experience working on a real-world software development project using Git and GitHub.</p>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 text-white text-center m-3 p-3 bg-secondary rounded"><h3>Duration: 1-2 Weeks</h3></div>
                <div class="col-lg-5 text-white text-center m-3 p-3 bg-secondary rounded"><h3>Pricing: 1000/-</h3></div>
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

export default Git_hub
