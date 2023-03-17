import React from "react";
import Row from "../../components/Row";
import "./style.css";

function Profile() {
    return (
    <div>
        <Row>
        <section id="about" className="about">

            <div className="justify-content-center">
              <div className="content">
                <h1>Visual UX Designer & Frontend Developer</h1>
                <div className="contact-links">
                  <a className="contact-link" href="tel:00447481844007">0044 7481 844 007</a>
                  <a className="contact-link" href="mailto:fi@fidunnington.com">fi@fidunnington.com</a>
                </div>

                <div>
                  <h3>About me</h3>
                  <p>I'm an experienced Visual UX Designer with <strong>strong Front End Developer skills</strong>. I split my time between the UK & Europe/Switzerland, and have the permits to weork in either.</p>
                  
                  <h3>What kind of teams have I worked with in the past?</h3>
                  <p>As a freelancer I've been lucky enough to have experience working remotely, with international teams, and in agency, startup, & corporate environments. I'm comfortable working as part of both small & large teams, and am always happy to wear whichever hat I need to on the day.</p>
                  
                  <h3>What kind of work can I help you with?</h3>
                  <p> I'm open to freelance, contract, or permanent positions and am happy to travel, but would prefer a <strong>predominately remote</strong> work-basis</p>
                </div>

              </div>
            </div>

        </section>
        </Row>
    </div>
    );
}

export default Profile;