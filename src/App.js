import React, {useState, useEffect} from 'react';
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Training from './pages/Training';
import Event from './pages/Event';
import Live_Event from './pages/Live_Event';
import Upcoming_Event from './pages/Upcoming_Event';
import Past_Event from './pages/Past_Event';
import Krishi_Vikalp from './pages/Krishi_Vikalp';
import Samadhan from './pages/Samadhan';
import AI_ML from './pages/AI_ML';
import Full_Stack_Dev from './pages/Full_Stack_Dev';
import Aws_Devops from './pages/Aws_Devops';
import Practice_Set from './pages/Practice_Set';
import Leaderboard from './pages/Leaderboard';
import Mentorship from './pages/Mentorship';
import Collaborator from './pages/Collaborator';
import Goal_Setting from './pages/Goal_Setting';
import Git_Github from './pages/Git_Github';
import Gyan_Goshthi from './pages/Gyan_Goshthi';
import ContactForm from './pages/ContactForm';
import DevOps_workshop from './pages/DevOps_workshop';
import Figma from './pages/Figma';
import Git_hub from './pages/Git_hub';
import HTML_CSS_Js_Tailwind_Frontend from './pages/HTML_CSS_Js_Tailwind_Frontend';
import Python_Frontend from './pages/Python_Frontend';
import Java_Frontend from './pages/Java_Frontend';
import PHP_Frontend from './pages/PHP_Frontend';
import React_Frontend from './pages/React_Frontend';
import ASPnet_Backend from './pages/ASPnet_Backend';
import Python_Backend from './pages/Python_Backend';
import Java_Backend from './pages/Java_Backend';
import PHP_backend from './pages/PHP_backend';
import Node_Backend from './pages/Node_Backend';
import DEVOPS from './pages/DEVOPS';
import AI_MacineLearning from './pages/AI_MacineLearning';
import AWS from './pages/AWS';
import Datascience from './pages/Datascience';
import HTML_CSS_Js_BS_AN_SQL_fullstack from './pages/HTML_CSS_Js_BS_AN_SQL_fullstack';
import Python_Fullstack from './pages/Python_Fullstack';
import Java_Fullstack from './pages/Java_Fullstack';
import PHP_MySQL_Fullstack from './pages/PHP_MySQL_Fullstack';
import React_Fullstack from './pages/React_Fullstack';
import Ideathon from './pages/Ideathon';
import Registration_Form from './pages/Registration_Form';
import Gigabit from './pages/Gigabit';
import Robosync from './pages/Robosync';
import Kurukshetra from './pages/Kurukshetra';
import Hackathon from './pages/Hackathon';
import Strategem from './pages/Strategem';
import Prayog from './pages/Prayog';
import Payment from './pages/Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/training' element={<Training />} />
          <Route path='/event' element={<Event />} />
          <Route path='/live_event' element={<Live_Event />} />
          <Route path='/upcoming_event' element={<Upcoming_Event />} />
          <Route path='/past_event' element={<Past_Event />} />
          <Route path='/krishi_vikalp' element={<Krishi_Vikalp />} />
          <Route path='/samadhan' element={<Samadhan />} />
          <Route path='/ai_ml' element={<AI_ML />} />
          <Route path='/full_stack_dev' element={<Full_Stack_Dev />} />
          <Route path='/aws_devops' element={<Aws_Devops />} />
          <Route path='/practice_set' element={<Practice_Set />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/mentorship' element={<Mentorship />} />
          <Route path='/collaborator' element={<Collaborator />} />
          <Route path='/goal_setting' element={<Goal_Setting />} />
          <Route path='/git_github' element={<Git_Github />} />
          <Route path='/gyan_goshthi' element={<Gyan_Goshthi />} />
          <Route path='/contact_form' element={<ContactForm />} />
          <Route path='/devops_workshop' element={<DevOps_workshop />} />
          <Route path='/git_hub' element={<Git_hub />} />
          <Route path='/figma' element={<Figma />} />
          <Route path='/html_css_js_Tailwind_frontend' element={<HTML_CSS_Js_Tailwind_Frontend />} />
          <Route path='/python_frontend' element={<Python_Frontend />} />
          <Route path='/java_frontend' element={<Java_Frontend />} />
          <Route path='/php_frontend' element={<PHP_Frontend />} />
          <Route path='/react_frontend' element={<React_Frontend />} />
          <Route path='/aspnet_backend' element={<ASPnet_Backend />} />
          <Route path='/python_backend' element={<Python_Backend />} />
          <Route path='/java_backend' element={<Java_Backend />} />
          <Route path='/php_backend' element={<PHP_backend />} />
          <Route path='/node_backend' element={<Node_Backend />} />
          <Route path='/devops' element={<DEVOPS />} />
          <Route path='/ai_macine_learning' element={<AI_MacineLearning />} />
          <Route path='/aws' element={<AWS />} />
          <Route path='/datascience' element={<Datascience />} />
          <Route path='/html_css_js_bs_an_sql_fullstack' element={<HTML_CSS_Js_BS_AN_SQL_fullstack />} />
          <Route path='/python_fullstack' element={<Python_Fullstack />} />
          <Route path='/java_fullstack' element={<Java_Fullstack />} />
          <Route path='/php_mysql_fullstack' element={<PHP_MySQL_Fullstack />} />
          <Route path='/react_fullstack' element={<React_Fullstack />} />
          <Route path='/ideathon' element={<Ideathon />} />
          <Route path='/registration_form' element={<Registration_Form />} />
          <Route path='/gigabit' element={<Gigabit />} />
          <Route path='/robosync' element={<Robosync />} />
          <Route path='/kurukshetra' element={<Kurukshetra />} />
          <Route path='/hackathon' element={<Hackathon />} />
          <Route path='/strategem' element={<Strategem />} />
          <Route path='/prayog' element={<Prayog />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}


export default App;
