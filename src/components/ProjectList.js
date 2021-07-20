import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //console.log(projects)
  const newArray = projects.map(element => {
    //console.log(element.id)
    return <ProjectItem key = {element.id} keyId = {element.id} name = {element.name} about = {element.about} technologies = {element.technologies} />
  })
  //console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{newArray}</div>
    </div>
  );
}

export default ProjectList;
