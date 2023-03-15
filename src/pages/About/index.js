import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Hero from "../../components/Hero";
import "./style.css";

function About() {
    return (
    <div>
      <Container >
        <Row>
        <section id="about" class="about">
          <div class="container">

            <div class="row gy-4 justify-content-center">
              <div class="col-lg-4">
                <img src="assets/img/Mask group.png" class="img-fluid" alt=""/>
              </div>
              <div class="col-lg-5 content">
                <h2>Visual UX Designer & Frontend Developer</h2>
                <p class="fst-italic py-3">
                  
                </p>
                <div class="row">
                  <div class="col-lg-12">
                    <ul>
                      <li><i class="bi bi-chevron-right"></i> <strong>Phone</strong> <span><a href="tel:00447481844007">0044 7481 844 007</a></span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:fi@fidunnington.com">fi@fidunnington.com</a></span></li>
                      <li><i class="bi bi-chevron-right"></i> <strong>Work type:</strong> <span>Freelance / Contract / Permanent</span></li>
                    </ul>
                    <p>I'm a Visual UX designer <strong>based in Europe</strong>, splitting my time between Italy, Switzerland, and the UK. </p>
                    <p>I love the outdoors, and being near the water or in the mountains is where I'm most at home. When I'm not working I can normally be found on the slopes or in the water.</p>
                    
                  </div>
                  
                </div>
                <p class="py-3">
                  
                </p>
                <p class="m-0">
                  
                </p>
              </div>
            </div>

          </div>
        </section>

        </Row>
      </Container>
    </div>
    );
}

export default About;