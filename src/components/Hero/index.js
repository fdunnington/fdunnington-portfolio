import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <section className="hero">
      {props.children}
    </section>
  );
}

export default Hero;
