import React from "react";
import Row from "../../components/Row";
import Card from "../../components/Card";
import "./style.css";
import ContactForm from "../../components/ContactForm";

function Contact() {
    return (
        <div className="colSmall">
          <div className="info-container">
            <Card >
              <div className="info-item">
                <i className="fa fa-file"></i>
                <div>
                  <p className="strong"><a href="https://drive.google.com/file/d/1HRUBEdtS4TUGLxIL5ngPCS-cGzAp8wlC/view?usp=sharing" target="_blank">My CV</a></p>
                </div>
              </div>
            </ Card>

            <Card >
              <div className="info-item">
                <i className="fa fa-envelope"></i>
                <div>
                  <p className="strong"><a href="mailto:fi@fidunnington.com">fi@fidunnington.com</a></p>
                </div>
              </div>
            </ Card>

            <Card >
              <div className="info-item">
                <i className="fa fa-phone"></i>
                <div>
                  <p className="strong"><a href="tel:00447481844007">0044 7481 844 007</a></p>
                </div>
              </div>
            </ Card>
          </div>
        
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
    );
}

export default Contact;