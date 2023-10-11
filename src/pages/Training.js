import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';

const training = () => {
    ReactGA.initialize("G-RYHT696S35");
  return (
    <Fragment>
      <Menu />
      <div class="evebanner">
        <img src="img/banner/Training.png" alt="Training Banner"/>
      </div>
      
    <main>
        
        <div className='container'>
            <div className='row'>
                <div class="imgoftraining col-lg-5">
                    <img class="imgoftraining" src="img/courses/fullstackposter.png" alt="About Header" />
                </div>
                <div className='col-lg-7 aboutsection'>
                    <h2>BUDDING TECH PROFESSIONALS</h2> <br/>
                    <p>Inviting students to work on live project using MERN. Additionally, all the 
                        students will be skilled on Feature Listing, Prototyping, Business Documentation, 
                        Version Control, Security, Application Testing and Deployment. Interested Students 
                        or Student Group will be provided Mentorship for their startup IDEAS.
                    </p>
                    <p>Attention all aspiring students and tech enthusiasts! GoHackathon is excited to announce the 
                        launch of our new courses on Web Development, AI/ML, and Cloud Computing. Whether you're a 
                        beginner or an experienced coder, we've got something for everyone. With expert instructors, 
                        hands-on projects, and cutting-edge tools, you'll gain the skills and knowledge needed to 
                        take your career to the next level. Don't miss out on this opportunity to join the ranks of 
                        the top tech talent. Enroll now and let's hack our way to success together. Here are some of 
                        the most significant benefits:
                    </p>
                    <ul>
                        <li>Develop product from scratch</li>
                        <li>Learn Technical Documentation</li>
                        <li>Network with professionals</li>
                        <li>Improve job prospects</li>
                        <li>Learn about different company cultures</li>
                        <li>Explore different career paths</li>
                        <li>Earn academic credit</li>
                    </ul>

                </div>
                
            </div>
        </div>

        <div className="container">
          <div className="">
        
            <a href="https://forms.gle/uW35kNWfoSYxvKNb8"><button className="btn btn-primary px-5 py-2 primary-btn" id="contact">Register Now</button></a>     
          
          </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container">
            <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Version Control and Prototyping</h2> <br/> <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-2"></div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/git-hub"><img src="img/courses/github.jpeg" alt="GiT & GiTHub Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Git & GitHub</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/figma"> <img src="img/courses/figma.jpeg" alt="Figma Design Tool Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Figma Design Tool</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                    
                </div>
            </div>
        </div>

    <div class="album py-5 bg-light">
            <div class="container"> 
                <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Full Stack Development</h2> <br/> <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/react-fullstack"><img src="img/courses/FullStack.jpg" alt="React, NodeJS, Mongo DB Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>MERN Stack</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/java-fullstack"><img src="img/courses/fullstack.jpeg" alt="Java,  Mongo DB/ MS Sql Server Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Java Full Stack</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/html-css-js-angular-aspnet-fullstack"><img src="img/courses/hcjbam.jpeg" alt="HTML,CSS, JavaScript, BootStrap, ASP.Net, MySql Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Asp.Net Full Stack</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/python-fullstack"><img src="img/courses/python-sql.jpeg" alt="Python, Mongo DB/ MS Sql Server Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Python Full Stack</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/php-mysql-fullstack"><img src="img/courses/php-ms-sql-server.jpeg" alt="PHP, MS Sql Server Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>PHP Full Stack</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
            <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Frontend Web Development</h2> <br/> <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/html-css-javascript"><img src="img/courses/html-css-js-tailwind.jpeg" alt="HTML,CSS, JavaScript, BootStrap, Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>HTML,CSS, Bootstrap, JS</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/python-frontend"><img src="img/courses/python.jpeg" alt="Python Frontend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Python</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/php-frontend"><img src="img/courses/php.jpeg" alt="PHP Frontend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>PHP</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                    
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/react-frontend"><img src="img/courses/react.png" alt="React Frontend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>React</h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
            <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Backend Web Development</h2> <br/> <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/aspnet-backend"><img src="img/courses/FullStack.jpg" alt="ASP.Net Backend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>ASP.Net</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/python-backend"><img src="img/courses/python-01.jpg" alt="Python Backend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Python</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/java-backend"><img src="img/courses/java.png" alt="Java Backend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Java</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/php-backend"><img src="img/courses/php.jpeg" alt="PHP Backend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>PHP</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/node-backend"><img src="img/courses/node.png" alt="Node JS Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Node JS</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div class="album py-5 bg-light">
            <div class="container">
            <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Others</h2> <br/> <br/> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/ai-machine-learning"><img src="img/courses/AI-ML.png" alt="AI & Machine Learning Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>AI & Machine Learning</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/aws"><img src="img/courses/cloud-infra.jpg" alt="AWS(Cloud Infra) Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>AWS(Cloud Infra)</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/devops"><img src="img/courses/dev-ops.jpg" alt="Devops Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>DevOps</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/data-science"><img src="img/courses/datascience.jpeg" alt="DATA Science Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>DATA Science</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
      <Footer />

    </Fragment>
  )
}

export default training
