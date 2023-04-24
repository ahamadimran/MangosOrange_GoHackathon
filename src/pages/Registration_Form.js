// import React, { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Registration_Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdasi0h', 'template_3cy6rk9', form.current, 's30AsxsMtJubgeV9B')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="container contactform">     
    <form id="contact_form" ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="teamname"><strong>Team Name:</strong></label>
        <input type="text" name="teamname" id="teamname" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="teammember"><strong>Number of Team Members:</strong></label>
        <input type="number" name="teammember" id="teammember" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="participantcollege"><strong>Participant's College:</strong></label>
        <input type="text" name="participantcollege" id="participantcollege" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="participantinformation"><strong>Participant's Information:</strong></label>
        <textarea id="participantinformation" name="participantinformation" className="form-control" required />
        <p><strong>Note:- </strong>Kindly Provide all Members Details (Name, Email, Phone No.)</p>
      </div>
      <div className='form-group'>
        <label htmlFor='abstract'><strong>Abstract: </strong></label>
        <input type='file' name='abstract' id='abstract' className="form-control" required></input>
      </div>
      <div className='form-group'>
        <label htmlFor='poster'><strong>Poster: </strong></label>
        <input type='file' name='poster' id='poster' className="form-control" required></input>
      </div>
      <div className="form-group">
        <label htmlFor="query"><strong>Query/Remark:</strong></label>
        <textarea id="query" name="query" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="feedback"><strong>Feedback:</strong></label>
        <textarea id="feedback" name="feedback" className="form-control" required />
      </div>
      <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
    </form>
    
    </div>
  );
};

export default Registration_Form;