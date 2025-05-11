import React from "react";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";

function ProjectsPage() {
  return (
    <div>
      <h2>Projects</h2>
      <AddProject />
      <ProjectList />
    </div>
  );
}

export default ProjectsPage;