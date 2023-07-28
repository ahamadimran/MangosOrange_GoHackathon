import React, {Fragment} from 'react';
import Menu from './Menu';
import Footer from './Footer';

const contact = () => {
  return (
    <Fragment>
      <body>
 <Menu />
<div className="evebanner">
    <img src="img/banner/Contact.png" alt="Contact Banner" />
  </div>

<main className="contact-main">
    <div className="containerofcontact">
        <div className="contentofcontainer">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic"><strong>Address</strong></div>
              <div className="text-one">
                <a href="https://goo.gl/maps/pbUCwkLDEffmwu7y5">
                AAG – 11, Shipra Krishna Azure <br /> Kaushambi, Ghaziabad, UP – 201010</a>
              </div>
              <div className="text-two"></div>
            </div>
            <div className="phone details">
                <i className="fa fa-phone" style={{fontsize: "36px"}}></i>
              <div className="topic"><strong>Phone</strong></div>
              <div className="text-one">
                <a href="tel:+91 9910018925">+91 9910018925</a> <br />
                <a href="tel:+91-120-4567841">+91-120-4567841</a>
              </div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic"><strong>Email</strong></div>
              <div className="text-one">
                <a href="mailto:info@gohackathon.in">info@gohackathon.in</a> <br />
                <a href="mailto:gohackathon2k22@gmail.com">gohackathon2k22@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box">
                <input type="text" placeholder="Enter your number" />
              </div>
            <div className="input-box">
                <input type="text" placeholder="Enter your message" />
            </div>
            <div className="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
        </div>
      </div>
</main>
</body>

<Footer />
    </Fragment>
  )
}

export default contact
