import React from "react";
import Container from "../../components/Container";
import Profile from "../../components/Profile";
import Projects from "../Projects";
import "./style.css";

function Homepage() {
    return (
      <div id ="homepage">
        <Container >
          <Profile />
          <Projects/>
        </Container>
      </div>
    );
}

export default Homepage;