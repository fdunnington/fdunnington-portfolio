import React from "react";
import Projects from "../Projects";
import "./style.css";


function Homepage() {
    return (
      <div className="centred">
          <h1 className="homepage-h1">Visual UX Designer & Frontend Developer</h1>
          <Projects/>
      </div>
    );
}

export default Homepage;