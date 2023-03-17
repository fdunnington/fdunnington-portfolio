import React from "react";
import Row from "../../components/Row";
import Card from "../../components/Card";
import "./style.css";

function Contact() {
    return (
    <div>
        <Row >
          <div class="info-container">
            <Card >
              <div class="info-item">
                <i class="fa fa-map-marker"></i>
                <div>
                  <p class="strong">Cornwall, UK</p>
                </div>
              </div>
            </ Card>

            <Card >
              <div class="info-item">
                <i class="fa fa-envelope"></i>
                <div>
                  <p class="strong"><a href="mailto:fi@fidunnington.com">fi@fidunnington.com</a></p>
                </div>
              </div>
            </ Card>

            <Card >
              <div class="info-item">
                <i class="fa fa-phone"></i>
                <div>
                  <p class="strong"><a href="tel:00447481844007">0044 7481 844 007</a></p>
                </div>
              </div>
            </ Card>
          </div>
        </ Row>
    </div>
    );
}

export default Contact;