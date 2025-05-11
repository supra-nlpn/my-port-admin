import React from "react";
import AddExperience from "../components/AddExperience";
import ExperienceList from "../components/ExperienceList";

function ExperiencePage() {
  return (
    <div>
      <h2>Experience</h2>
      <AddExperience />
      <ExperienceList />
    </div>
  );
}

export default ExperiencePage;