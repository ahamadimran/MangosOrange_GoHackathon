import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const training = () => {
  return (
    <Fragment>
      <Menu />
      <div class="evebanner">
        <img src="img/banner/Training.png" alt=""/>
      </div>
      
    <main>

        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">SUMMER INTERNISHIP</h1>
                    <p class="lead text-muted">Additionally, all the students will be groomed on Entrepreneural Skills, and Startup Formation. Interested Students or Student Group will be provided Mentorship for their startup IDEAS.</p>
                </div>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-2"></div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/Git_hub"><img src="img/courses/github.jpeg" alt="GiT & GiTHub" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>GiT & GiTHub</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/figma"> <img src="img/courses/figma.jpeg" alt="Figma Design Tool" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Figma Design Tool</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                    
                    {/* <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/ai_ml"><img src="img/courses/AI&ML.jpg" alt="" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>AI and Machine Learning</h4>
                                <p>
                                    This course provides students with a comprehensive introduction to data science and
                                     machine learning. Students will learn how to extract insights and knowledge from 
                                     large data sets using popular data analysis and machine learning techniques.  
                                </p>
                               <Link to=""><a class="btn btn-primary" href="ai_ml.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                               <Link to="/ai_ml"><a class="btn btn-primary" href="ai-ml.html" role="button">Know More</a></Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container"> 
            <h2 class="text-center mx-auto text-white bg-info rounded p-2 m-3">Frontend Web Development</h2> <br/> <br/>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/HTML_CSS_Js_Tailwind_Frontend"><img src="img/courses/html-css-js-tailwind.jpeg" alt="HTML,CSS, JavaScript, BootStrap, Tailwind" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>HTML,CSS, JS, BootStrap</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/Python_Frontend"><img src="img/courses/python.jpg" alt="Python" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Python</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/Java_Frontend"> <img src="img/courses/java.png" alt="Java" height="200px" width="100%"/></Link>
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
                        <Link to="/php_frontend"><img src="img/courses/php.jpeg" alt="PHP" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>PHP</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/React_Frontend"><img src="img/courses/react.png" alt="React" height="200px" width="100%"/></Link>
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
                           <Link to="/ASPnet_Backend"><img src="img/courses/FullStack.jpg" alt="ASP.Net" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>ASP.Net</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/Python_Backend"><img src="img/courses/python.jpg" alt="Python" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Python</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/Java_Backend"><img src="img/courses/cloud_computing.jpg" alt="Java" height="200px" width="100%"/></Link>
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
                        <Link to="/PHP_backend"><img src="img/courses/php.jpeg" alt="PHP" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>PHP</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/Node_Backend"><img src="img/courses/node.png" alt="Node JS" height="200px" width="100%"/></Link>
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
                        <Link to="/HTML_CSS_Js_BS_AN_SQL_fullstack"><img src="img/courses/hcjbam.jpeg" alt="HTML,CSS, JavaScript, BootStrap,  ASP.Net,  MySql" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>HTML,CSS, JavaScript, BootStrap,  ASP.Net,  MySql</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to="/Python_Fullstack"><img src="img/courses/python-sql.jpeg" alt="Python,  Mongo DB/ MS Sql Server" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Python, Mongo DB/ MS Sql Server</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="Java_Fullstack"><img src="img/courses/java-mongodb.png" alt="Java,  Mongo DB/ MS Sql Server" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Java,  Mongo DB/ MS Sql Server</h4>
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
                           <Link to="/PHP_MySQL_Fullstack"><img src="img/courses/php-ms-sql-server.jpeg" alt="PHP, MS Sql Server" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>PHP, MS Sql Server</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/React_Fullstack"><img src="img/courses/react-node-mdb.jpeg" alt="React, NodeJS, Mongo DB" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>React, NodeJS, Mongo DB</h4>
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
                           <Link to="/DEVOPS"><img src="img/courses/AWS_Devops.png" alt="DEV-OPS" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>DEV-OPS</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/ai_macine_learning"><img src="img/courses/AI-ML.png" alt="AI & Machine Learning" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>AI & Machine Learning</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                           <Link to="/AWS"><img src="img/courses/Aws_Devops.png" alt="AWS(Cloud Infra)" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>AWS(Cloud Infra)</h4>
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
                        <Link to="/Datascience"><img src="img/courses/datascience.jpeg" alt="DATA Science" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>DATA Science</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        {/* <div class="album py-5 bg-light">
            <div class="container"> 
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/cloud_computing.jpg" alt="" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Cloud Computing</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/python.jpg" alt="" height="200px" width="100%"/></Link>
                            <div class="card-body">
                                <h4>Python Programming</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card shadow-sm">
                        <Link to=""><img src="img/courses/java.png" alt="" height="200px" width="100%"/></Link>
                            <div class="card-body">
                            <h4>Java Programming</h4>
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </p>
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Buy Now</a></Link> &nbsp; &nbsp;
                                <Link to=""><a class="btn btn-primary" href="contact.html" role="button">Know More</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

    </main>
      <Footer />
    </Fragment>
  )
}

export default training
