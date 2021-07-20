import React from "react";

function ProjectItem({ keyId, name, about, technologies }) {
  const newList = technologies.map(element => {
    return <span key = {keyId+element}>{element}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {
          newList
        }
      </div>
    </div>
  );
}

export default ProjectItem;
