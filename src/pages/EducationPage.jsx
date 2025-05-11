import React from "react";
import AddEducation from "../components/AddEducation";
import EducationList from "../components/EducationList";

function EducationPage() {
  return (
    <div>
      <h2>Education</h2>
      <AddEducation />
      <EducationList />
    </div>
  );
}

export default EducationPage;