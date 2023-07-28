import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const Datascience = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/data-science.png" alt="Data Science Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>DATA SCIENCE</h2>
                        <p>Learn the fundamentals of data analysis and machine learning, and how to use these 
                            techniques to extract insights and value from data. In this course, you'll learn 
                            the basics of Python programming language and how to use popular Python libraries 
                            such as NumPy, Pandas, and Matplotlib for data analysis and visualization. You'll 
                            also learn how to use machine learning libraries such as scikit-learn and TensorFlow 
                            to build and train models. Additionally, you'll learn how to clean, transform, 
                            and prepare data for analysis, and how to apply statistical techniques to identify 
                            patterns and trends in data. By the end of the course, you'll have the skills to 
                            start working on data science projects and applying data science techniques to solve 
                            real-world problems.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/datascience.jpeg' alt='Data Science'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            <h2 className='coursecoverage'>Course Coverage</h2>
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Introduction to Data Science: history, applications, and challenges</li>
                    <li>Data collection and storage: types of data, data formats, and data sources</li>
                    <li>Data wrangling and cleaning: data cleaning techniques, missing data, and outliers</li>
                    <li>Data visualization and exploration: data visualization libraries, exploratory data analysis, and data dashboards</li>
                    <li>Statistical inference: probability distributions, hypothesis testing, and confidence intervals</li>
                    <li>Regression analysis: linear regression, logistic regression, and multivariate regression</li>
                    <li>Classification and clustering: decision trees, k-means clustering, and hierarchical clustering</li>
                    <li>Time series analysis: forecasting, decomposition, and smoothing</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Machine learning: supervised, unsupervised, and reinforcement learning</li>
                    <li>Deep learning: neural networks, convolutional neural networks, and recurrent neural networks</li>
                    <li>Natural Language Processing (NLP): sentiment analysis, topic modeling, and language translation</li>
                    <li>Big data and distributed computing: Apache Hadoop, Apache Spark, and NoSQL databases</li>
                    <li>Data ethics and privacy: fairness, transparency, and accountability</li>
                    <li>Best practices for data science: data management, model deployment, and interpretation</li>
                    <li>Data science toolkits and frameworks: Python, R, SQL, and Tableau</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will be able to apply data science techniques 
                            to analyze and solve real-world problems. They will have a solid understanding of 
                            statistical analysis, data visualization, and machine learning algorithms. 
                            Additionally, students will have experience working with popular data science tools 
                            such as Python, R, and SQL, enabling them to clean and preprocess data, perform 
                            exploratory data analysis, and build predictive models. They will also be proficient 
                            in working with big data tools such as Apache Hadoop and Apache Spark. By the end of 
                            the course, students will have developed several data-driven projects and be able to 
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
    </Fragment>
  )
}

export default Datascience
