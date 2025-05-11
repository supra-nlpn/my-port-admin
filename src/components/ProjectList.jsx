// admin/src/components/ProjectList.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projectData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProjects(projectData);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects(); 
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>📋 Your Projects</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {projects.map((proj) => (
            <li key={proj.id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
              <h3>{proj.title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: (proj.description.replace(/<ol>/g, '<ul>').replace(/<\/ol>/g, '</ul>')) }}
                style={{ color: "inherit" }} 
              />
              <small>Tech Stack: {proj.techStack?.join(", ")}</small>
              <br />
              <a
                href={proj.github || "#"}
                target={proj.github ? "_blank" : undefined}
                rel={proj.github ? "noreferrer" : undefined}
                style={{ pointerEvents: proj.github ? "auto" : "none", color: proj.github ? "blue" : "gray" }}
              >
                Project Link
              </a>
              <br />
              <button
                style={{ marginTop: "0.5rem", backgroundColor: "crimson", color: "white" }}
                onClick={() => handleDelete(proj.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
