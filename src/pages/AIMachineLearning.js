import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AI_MachineLearning = () => {
  return (
    <Fragment>
        <div className='ai-machine-learning'>
            <Helmet>
                <title>Unleash Your AI Potential With GoHackathon</title>
                <meta name="description" content="Join GoHackathon's AI & Machine Learning challenge and showcase your coding prowess."/>
            </Helmet>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/AI-ML.png" alt="AI and ML Banner"/>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='aboutsection col-lg-7'>
                        <h2>AI & Machine Learning</h2>
                        <p>Learn the fundamentals of artificial intelligence and machine learning, and how to 
                            apply these techniques to real-world problems. In this course, you'll learn the 
                            basics of Python programming language and how to use popular Python libraries such 
                            as NumPy, Pandas, and Matplotlib for data analysis and visualization. You'll also 
                            learn the core concepts of machine learning, such as supervised and unsupervised 
                            learning, and how to use popular machine learning libraries such as scikit-learn 
                            and TensorFlow to build and train models. Additionally, you'll learn how to evaluate 
                            and fine-tune machine learning models, and how to apply machine learning techniques 
                            to solve problems such as image recognition, natural language processing, and 
                            predictive analytics. By the end of the course, you'll have the skills to start 
                            building your own AI & ML applications and working on real-world AI & ML projects.
                        </p>
                    </div>
                    <div className='imgofabout col-lg-5'>
                        <img className='imgofabout' src='img/courses/AI-ML.png' alt='AI & ML'></img>
                    </div>
                </div>
            </div>

            <div className='container'>
            
                <div className='row'>
                    <div className='aboutsection-bottom col-lg-6'>
                    <h2>Course Coverage</h2>
                        <ul>
                        <li>Introduction to AI and ML: history, applications, and challenges</li>
                        <li>Machine learning basics: supervised, unsupervised, and reinforcement learning</li>
                        <li>Probability and statistics for ML: Bayes' theorem, central limit theorem, and hypothesis testing</li>
                        <li>Linear regression and logistic regression: modeling and optimization</li>
                        <li>Decision trees and random forests: ensemble learning and feature selection</li>
                        <li>Neural networks and deep learning: backpropagation, convolutional neural networks, and recurrent neural networks</li>
                        <li>Unsupervised learning: clustering, principal component analysis, and autoencoders</li>
                        <li>Reinforcement learning: Markov decision processes and Q-learning</li>
                        </ul>
                    </div>

                    <div className='aboutsection-bottom col-lg-6'>
                        <ul>
                        <li>Natural Language Processing (NLP): sentiment analysis, named entity recognition, and machine translation</li>
                        <li>Computer Vision (CV): object detection, segmentation, and recognition</li>
                        <li>Model selection and evaluation: overfitting, underfitting, cross-validation, and performance metrics</li>
                        <li>Data preprocessing and feature engineering: normalization, scaling, and dimensionality reduction</li>
                        <li>Big data and distributed computing: Apache Spark and Hadoop</li>
                        <li>Ethics and bias in AI and ML: fairness, transparency, and accountability</li>
                        <li>Best practices for AI and ML: data management, model deployment, and interpretation</li>
                        <li>AI and ML toolkits and frameworks: TensorFlow, PyTorch, scikit-learn, and Keras</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='aboutsection-agritech col-lg-7'>
                        <h2>Learning Outcome</h2>
                        <p>Upon completion of this course, students will be able to apply AI and ML techniques 
                            to solve real-world problems. They will have a solid understanding of the 
                            mathematical foundations of ML algorithms, such as linear algebra, probability 
                            theory, and calculus. Additionally, students will have experience working with 
                            popular ML frameworks such as TensorFlow and PyTorch, enabling them to build and 
                            train deep neural networks. They will also be proficient in working with data 
                            preparation and cleaning techniques, model evaluation, and deployment strategies. 
                            By the end of the course, students will have developed several ML projects and be 
                            able to effectively collaborate with other developers using Git for version control.
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

export default AI_MachineLearning
