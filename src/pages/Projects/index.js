import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Grid from "../../components/Grid"
import ProjectCard from "../../components/ProjectCard" 
import projectData from "../../projects.json"
import "./style.css";


function Projects() {

  const projects = projectData;

  return (
    <div>
      <Container >
        <Row >
          <Grid>
            {projects.map((project) => (
              <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                link={project.link}
                github={project.github}
              />
            ))}
          </Grid>
        </Row >
      </Container >
    </div>
  );
}

export default Projects;