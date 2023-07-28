import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
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

        <div className='container trainingheading'>
            <h2>BUDDING TECH PROFESSIONALS</h2>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                    <h2>Summer Internship</h2> <br/>
                    <p>Inviting students to work on client project for summer internship. Additionally, all the 
                        students will be groomed on Entrepreneural Skills, and Startup Formation. Interested 
                        Students or Student Group will be provided Mentorship for their startup IDEAS.
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
                        <li>Gain practical experience</li>
                        <li>Network with professionals</li>
                        <li>Improve job prospects</li>
                        <li>Learn about different company cultures</li>
                        <li>Explore different career paths</li>
                        <li>Earn academic credit</li>
                    </ul>

                </div>
                <div className='col-lg-5'>
                    <ContactForm/>
                </div>
            </div>
        </div>

        <div className="container">
          <div className="">
          <p>Registration fees is &nbsp;
            <a href={URL}><button className="btn btn-primary px-5 py-2 primary-btn" id="contact">₹ 500</button></a>&nbsp;
            (Except Git & Figma)     
          </p>
          </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-2"></div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/Git_hub"><img src="img/courses/github.jpeg" alt="GiT & GiTHub Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>GiT & GiTHub</h4>
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
            <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Frontend Web Development</h2> <br/> <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/HTML_CSS_Js_Tailwind_Frontend"><img src="img/courses/html-css-js-tailwind.jpeg" alt="HTML,CSS, JavaScript, BootStrap, Tailwind Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>HTML,CSS, JS, BootStrap</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/Python_Frontend"><img src="img/courses/python.jpg" alt="Python Frontend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Python</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/php_frontend"><img src="img/courses/php.jpeg" alt="PHP Frontend Training" height="200px" width="100%"/></Link>
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
                           <Link to="/React_Frontend"><img src="img/courses/react.png" alt="React Frontend Training" height="200px" width="100%"/></Link>
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
                           <Link to="/ASPnet_Backend"><img src="img/courses/FullStack.jpg" alt="ASP.Net Backend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>ASP.Net</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/Python_Backend"><img src="img/courses/python.jpg" alt="Python Backend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Python</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/Java_Backend"><img src="img/courses/java.png" alt="Java Backend Training" height="200px" width="100%"/></Link>
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
                        <Link to="/PHP_backend"><img src="img/courses/php.jpeg" alt="PHP Backend Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>PHP</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/Node_Backend"><img src="img/courses/node.png" alt="Node JS Training" height="200px" width="100%"/></Link>
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
                <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Full Stack Development</h2> <br/> <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/React_Fullstack"><img src="img/courses/FullStack.jpg" alt="React, NodeJS, Mongo DB Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>HTML, CSS, JS, React, Node Js, Sql Server</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/java_fullstack"><img src="img/courses/fullstack.jpeg" alt="Java,  Mongo DB/ MS Sql Server Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>HTML, CSS, JS, Java, Sql Server</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/HTML_CSS_Js_BS_AN_SQL_fullstack"><img src="img/courses/hcjbam.jpeg" alt="HTML,CSS, JavaScript, BootStrap, ASP.Net, MySql Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>HTML, CSS, JavaScript, ASP.Net, Sql Server</h4>
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
                        <Link to="/Python_Fullstack"><img src="img/courses/python-sql.jpeg" alt="Python, Mongo DB/ MS Sql Server Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>HTML, CSS, Javascript, Python, Postgres</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/PHP_MySQL_Fullstack"><img src="img/courses/php-ms-sql-server.jpeg" alt="PHP, MS Sql Server Training" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>HTML, CSS, JS, PHP, MySql</h4>
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
                           <Link to="/ai_machine_learning"><img src="img/courses/AI-ML.png" alt="AI & Machine Learning Training" height="200px" width="100%"/></Link>
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
                        <Link to="/Datascience"><img src="img/courses/datascience.jpeg" alt="DATA Science Training" height="200px" width="100%"/></Link>
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
