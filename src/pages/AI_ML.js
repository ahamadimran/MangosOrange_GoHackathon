import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const AI_ML = () => {
  return (
    <Fragment>
        <Menu />
        <body id="body">
            <div className="evebanner">
                <img src="img/banner/AI-ML.png" alt=""/>
            </div>
        
            <div className="container">
                <div className="row">
                    <div className="aboutsection col-lg-7">
                        <h1>Artificial Intelligence</h1>
                        <p>AI and machine learning are rapidly developing fields that have the potential to 
                            revolutionize many industries and change the way we live and work. It involves the 
                            development of computer systems that can perform tasks that would normally require 
                            human intelligence. <br/>
                        </p>
                        <p>Artificial Intelligence (AI) is a broad field that deals with the creation of 
                            intelligent machines that can perform tasks that typically require human 
                            intelligence, such as visual perception, speech recognition, decision-making, 
                            and natural language processing. ML techniques are used to enable machines to 
                            recognize patterns in data, classify and categorize information, and make 
                            predictions based on previous experiences.
                        </p> 
                    </div>
                    <div className="imgofabout col-lg-5">
                        <img className="imgofabout" src="img/courses/AI-ML.png" alt="Dev"/>
                    </div>
                </div>
            </div>

    <div className="container">
        <div className="row">
            <div className="aboutsection-bottom col-lg-12">
                <h2>AI and ML Course Description</h2>
                <p>This course provides students with a comprehensive introduction to data science and machine 
                    learning. Students will learn how to extract insights and knowledge from large data sets 
                    using popular data analysis and machine learning techniques. 
                    The course will cover the following topics: <br/>
                </p>
                <ul>
                    <li>Introduction to Data Science and Machine Learning</li>
                    <li>Data Wrangling and Exploration</li>
                    <li>Data Visualization and Communication</li>
                    <li>Supervised Learning</li>
                    <li>Unsupervised Learning</li>
                    <li>Deep Learning</li>
                    <li>Time Series Analysis</li>
                    <li>Model Evaluation and Deployment</li>
                </ul>
                <h2>Learning Outcome</h2>
                <p>Upon completion of the course, students will be able to: <br/> </p>
                <ul>
                    <li>Understand the fundamental concepts of data science and machine learning</li>
                    <li>Work with large datasets and perform data wrangling and exploration</li>
                    <li>Visualize data and communicate insights effectively</li>
                    <li>Apply supervised, unsupervised, and deep learning techniques to solve real-world problems</li>
                    <li>Perform time series analysis and forecasting</li>
                    <li>Evaluate machine learning models and deploy them for use</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="aboutsection-agritech col-lg-12">
                <h2>Course Format</h2>
                <p>The course will be taught through a combination of lectures, discussions, and hands-on 
                    exercises. Students will work on individual and group projects to reinforce their 
                    understanding of the concepts and techniques covered in the course. Assignments will 
                    involve programming exercises using popular data science and machine learning libraries 
                    such as Pandas, Matplotlib, Scikit-learn, and TensorFlow.<br/>
                </p>
                <p>
                    <strong>Prerequisites:</strong> <br/>
                    The course assumes familiarity with programming concepts and the Python programming language. 
                    Basic understanding of statistics and linear algebra is recommended.
                </p>
                <a className="btn btn-primary" href={URL} role="button">Register Now</a>
            </div>
        </div>
    </div>
</body>

<Footer />
    </Fragment>
  )
}

export default AI_ML
