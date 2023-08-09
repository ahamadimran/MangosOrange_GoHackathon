import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const gallery = () => {
  return (
    <Fragment>

      <Menu />

      <div className="evebanner">
        <img src="img/banner/Gallery.png" alt="Gallery Banner"/>
    </div>

      <div className="container aboutgallery">
        <h5><strong>Event Name:- </strong>Krishi Vikalp</h5>
        <h6><strong>Date:- </strong>25th Feb 2023</h6> <br/>
        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/SSIMEventPics/SSIM-01.JPG" alt="SSIM Event Pic-01" style={{width: "100%"}}/>
            </div>
          </div>

          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/SSIMEventPics/SSIM-13.JPG" alt="SSIM Event Pic-13" style={{width: "100%"}}/>
            </div>
          </div>

          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/SSIMEventPics/SSIM-15.JPG" alt="SSIM Event Pic-15" style={{width: "100%"}}/> 
            </div>
          </div>
        </div>
      </div>
    
    <div className="container aboutgallery">
        <h5><strong>Event Name:- </strong>SAMADHAN</h5>
        <h6><strong>Date:- </strong>17th and 18th December 2022</h6> <br/>
        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/EventPics/01.jpg" alt="Samadhan Event pic-01" style={{width: "100%"}}/> 
            </div>
          </div>

          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/EventPics/Volunteer-1.jpg" alt="Samadhan Event Volunteer" style={{width: "100%"}}/> 
            </div>
          </div>

          <div className="col-md-4">
            <div className="thumbnail">
                <img src="img/EventPics/Volunteer-2.jpg" alt="Samadhan Event Volunteer" style={{width: "100%"}}/> 
            </div>
          </div>

        </div>
    </div>

    <Footer />


    </Fragment>
  )
}

export default gallery
