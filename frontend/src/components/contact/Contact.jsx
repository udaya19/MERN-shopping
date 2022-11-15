import React from "react";
import "../../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="form">
        <h2>Contact Us</h2>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" name="name" />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit" className="send">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
