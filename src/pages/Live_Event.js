import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Live_Event = () => {
  return (
    <Fragment>
        <Menu />
        <body className="eventbody">

    <div className="evebanner">
        <img src="img/banner/live_event.png" alt=""/>
    </div>
    
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">  
          <div className="card h-100">
            <img src="img/tech.jpg" className="card-img-top" alt="..." height="200px" width="10px"/>
            <div className="card-body">
               <h5 className="card-title"><strong>Hackathon</strong></h5>
            <p className="card-text">Hackathons are popular in the tech industry and are used as a way to spur 
                innovation, build community, and promote collaboration among developers and other tech 
                professionals.
            </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">We are live right now</small><span className="dot"></span> 
            </div>
          </div>
        </div>
        <div className="col">
            <div className="card h-100">
              <img src="img/tech2.jpg" className="card-img-top" alt="..." height="200px" width="10px"/>
              <div className="card-body">
                <h5 className="card-title"><strong>Ideathon</strong></h5>
                <p className="card-text">Ideathons are often used in the context of innovation, entrepreneurship, 
                    and social impact, and can be a powerful way to generate new ideas and foster collaboration 
                    among participants.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>  
              </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
              <img src="img/tech3.jpg" className="card-img-top" alt="..." height="200px" width="10px"/>
              <div className="card-body">
                <h5 className="card-title"><strong>Coding Competition</strong></h5>
                <p className="card-text">Coding competitions are popular among programmers and software developers, 
                    and can be a fun and challenging way to improve one's coding skills and network with other 
                    professionals in the field.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
        </div>   
    </div>
        
</body>
    <Footer />
    </Fragment>
  )
}

export default Live_Event
