import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card project-card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <hr className="divider"></hr>
      <div className="content">
        <ul>
          <li>
            <h3 className="project-name">{props.name}</h3>
          </li>
          <li>
            <a href={props.link} target="_blank"><i class="fa fa-link" id="link-icon"></i></a> 
          </li>
          <li>
            <a href={props.github} target="_blank"><strong>Check out the github repo </strong></a>
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default ProjectCard;
