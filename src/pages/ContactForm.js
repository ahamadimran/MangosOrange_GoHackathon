import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, number, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      number: number.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact_form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="container contactform">     
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name"><strong>Full Name:</strong></label>
        <input type="text" id="name" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="email"><strong>Email:</strong></label>
        <input type="email" id="email" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="number"><strong>Phone No:</strong></label>
        <input type="number" id="number" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="message"><strong>Subject:</strong></label>
        <textarea id="message" className="form-control" required />
      </div>
      <button className="btn btn-primary" type="submit">{status}</button>
    </form>
    
    </div>
  );
};

export default ContactForm;