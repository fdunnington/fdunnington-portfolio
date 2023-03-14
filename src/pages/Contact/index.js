import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
// import Col from "../../components/Col";

function Contact() {
    return (
    <div>
      <Container >
        <Row>
         
            <section id="contact" class="contact">
              <div class="container">
                <div class="row gy-4 justify-content-center">

                  <div class="col-lg-3">
                    <div class="info-item d-flex">
                      <i class="bi bi-geo-alt flex-shrink-0"></i>
                      <div>
                        <h4>Location:</h4>
                        <p>Cornwall, UK</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="info-item d-flex">
                      <i class="bi bi-envelope flex-shrink-0"></i>
                      <div>
                        <h4>Email:</h4>
                        <a href="mailto:fi@fidunnington.com">fi@fidunnington.com</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="info-item d-flex">
                      <i class="bi bi-phone flex-shrink-0"></i>
                      <div>
                        <h4>Call/WhatsApp:</h4>
                        <a href="tel:00447481844007">0044 7481 844 007</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

        </Row>
      </Container>
    </div>
    );
}

export default Contact;