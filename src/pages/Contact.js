import React, {Fragment, useRef} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import emailjs from '@emailjs/browser';

const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdasi0h', 'template_37f5djs', form.current, 's30AsxsMtJubgeV9B')
      .then((result) => {
          console.log(result.text);
          alert("Thank you for query. We will connect with you shortly");
      }, (error) => {
          console.log(error.text);
      });
  };
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
                <a href="https://goo.gl/maps/pbUCwkLDEffmwu7y5">H-87, Sector-63, Noida, U.P, 201301</a>
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
          <form id="contact_form" ref={form} onSubmit={sendEmail}>
            <div className="input-box">
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
                <input type="number" name="number" placeholder="Enter your number" required />
              </div>
            <div className="input-box">
                <input type="text" name="message" placeholder="Enter your message" required />
            </div>
            <div className="button">
              <input type="submit" name='submit' value="Submit" />
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
