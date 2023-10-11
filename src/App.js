import React from 'react';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Training from './pages/Training';
import Event from './pages/Event';
import LiveEvent from './pages/LiveEvent';
import UpcomingEvent from './pages/UpcomingEvent';
import PastEvent from './pages/PastEvent';
import Samadhan from './pages/Samadhan';
import KrishiVikalp from './pages/KrishiVikalp';
import GoalSetting from './pages/GoalSetting';
import GitGithub from './pages/GitGithub';
import GyanGoshthi from './pages/GyanGoshthi';
import ContactForm from './pages/ContactForm';
import Figma from './pages/Figma';
import GitHub from './pages/GitHub';
import HtmlCssJsBsFrontend from './pages/HtmlCssJsBsFrontend';
import PythonFrontend from './pages/PythonFrontend';
import JavaFrontend from './pages/JavaFrontend';
import PHPFrontend from './pages/PHPFrontend';
import ReactFrontend from './pages/ReactFrontend';
import ASPnetBackend from './pages/ASPnetBackend';
import PythonBackend from './pages/PythonBackend';
import JavaBackend from './pages/JavaBackend';
import PHPBackend from './pages/PHPBackend';
import NodeBackend from './pages/NodeBackend';
import DEVOPS from './pages/DEVOPS';
import AIMachineLearning from './pages/AIMachineLearning';
import AWS from './pages/AWS';
import Datascience from './pages/Datascience';
import HtmlCssJsBsSqlFullstack from './pages/HtmlCssJsBsSqlFullstack';
import PythonFullstack from './pages/PythonFullstack';
import JavaFullstack from './pages/JavaFullstack';
import PHPMySqlFullstack from './pages/PHPMySqlFullstack';
import ReactFullstack from './pages/ReactFullstack';
import Ideathon from './pages/Ideathon';
import RegistrationForm from './pages/RegistrationForm';
import Hackathon from './pages/Hackathon';
import Payment from './pages/Payment';
import Login from './pages/Login';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import OnlineExam from './pages/OnlineExam';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //   .then((res) => res.json())
  //   .then((data) => setMessage(data.message));
  // }, []);

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
          <Route path='/live_event' element={<LiveEvent />} />
          <Route path='/upcoming_event' element={<UpcomingEvent />} />
          <Route path='/past_event' element={<PastEvent />} />
          <Route path='/samadhan' element={<Samadhan />} />
          <Route path='/krishi-vikalp' element={<KrishiVikalp />} />
          <Route path='/goal_setting' element={<GoalSetting />} />
          <Route path='/git_github' element={<GitGithub />} />
          <Route path='/gyan_goshthi' element={<GyanGoshthi />} />
          <Route path='/contact_form' element={<ContactForm />} />
          <Route path='/git-hub' element={<GitHub />} />
          <Route path='/figma' element={<Figma />} />
          <Route path='/html-css-javascript' element={<HtmlCssJsBsFrontend />} />
          <Route path='/python-frontend' element={<PythonFrontend />} />
          <Route path='/java_frontend' element={<JavaFrontend />} />
          <Route path='/php-frontend' element={<PHPFrontend />} />
          <Route path='/react-frontend' element={<ReactFrontend />} />
          <Route path='/aspnet-backend' element={<ASPnetBackend />} />
          <Route path='/python-backend' element={<PythonBackend />} />
          <Route path='/java-backend' element={<JavaBackend />} />
          <Route path='/php-backend' element={<PHPBackend />} />
          <Route path='/node-backend' element={<NodeBackend />} />
          <Route path='/devops' element={<DEVOPS />} />
          <Route path='/ai-machine-learning' element={<AIMachineLearning />} />
          <Route path='/aws' element={<AWS />} />
          <Route path='/data-science' element={<Datascience />} />
          <Route path='/html-css-js-angular-aspnet-fullstack' element={<HtmlCssJsBsSqlFullstack />} />
          <Route path='/python-fullstack' element={<PythonFullstack />} />
          <Route path='/java-fullstack' element={<JavaFullstack />} />
          <Route path='/php-mysql-fullstack' element={<PHPMySqlFullstack />} />
          <Route path='/react-fullstack' element={<ReactFullstack />} />
          <Route path='/ideathon' element={<Ideathon />} />
          <Route path='/registration_form' element={<RegistrationForm />} />
          <Route path='/hackathon' element={<Hackathon />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/login' element={<Login />} />
          <Route path='/software-development' element={<SoftwareDevelopment />} />
          <Route path='/online-exam' element={<OnlineExam />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}


export default App;
