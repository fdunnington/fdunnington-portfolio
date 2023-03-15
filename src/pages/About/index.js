import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
// import Hero from "../../components/Hero";
import "./style.css";

function About() {
    return (
    <div>
        <Row>
        <section id="about" class="about">

            <div class="justify-content-center">
              <div class="content">
                <h2>Visual UX Designer & Frontend Developer</h2>
                <div>
                  <p>I'm an experienced Visual UX Designer with <strong>strong Front End Developer skills</strong>. I split my time between Italy, Switzerland, and Cornwall (UK) </p>
                  <p> Open to <strong>predominately remote </strong>freelance, contract or permanent positions</p>
                </div>
                <div>
                  <strong><a class="contact-link" href="tel:00447481844007">0044 7481 844 007</a></strong>
                  <strong><a class="contact-link" href="mailto:fi@fidunnington.com">fi@fidunnington.com</a></strong>
                </div>

                <iframe src="https://drive.google.com/file/d/1HRUBEdtS4TUGLxIL5ngPCS-cGzAp8wlC/preview" width="100%" height="480" allow="autoplay"></iframe>
              </div>
            </div>

        </section>
        </Row>
    </div>
    );
}

export default About;