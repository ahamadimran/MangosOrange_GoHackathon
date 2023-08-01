// import React, { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const QueryForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdasi0h', 'template_37f5djs', form.current, 's30AsxsMtJubgeV9B')
      .then((result) => {
          console.log(result.text);
          alert("Tahnk you for query. We will connect with you shortly");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="container contactform">     
    <form id="contact_form" ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="name"><strong>Full Name:</strong></label>
        <input type="text" name="name" id="name" className="form-control" placeholder='Enter Your Name' required />
      </div>
      <div className="form-group">
        <label htmlFor="email"><strong>Email:</strong></label>
        <input type="email" name="email" id="email" className="form-control" placeholder='Enter Your Mail' required />
      </div>
      <div className="form-group">
        <label htmlFor="number"><strong>Phone No:</strong></label>
        <input type="number" name="number" id="number" className="form-control" placeholder='Enter Your Phone No.' required />
      </div>
      <div className="form-group">
        <label htmlFor="select_solution"><strong>Select Solution:</strong></label>
        <select className="form-control">
            <option value="">Select one</option>
            <option value="erp">ERP</option>
            <option value="crm">CRM</option>
            <option value="hrms">HRMS</option>
            <option value="e-commerce">E-Commerce</option>
            <option value="others">Others</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message"><strong>Subject:</strong></label>
        <textarea id="message" name="message" className="form-control" placeholder='Enter Your Message' required />
      </div>
      <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
    </form>
    
    </div>
  );
};

export default QueryForm;