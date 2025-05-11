// admin/src/components/AddProject.jsx
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Editor } from 'primereact/editor';

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [github, setGithub] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "projects"), {
        title,
        description,
        techStack: techStack.split(",").map((t) => t.trim()),
        github,
        createdAt: new Date()
      });
      alert("✅ Project added!");
      setTitle("");
      setDescription("");
      setTechStack("");
      setGithub("");
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>🛠 Add Project</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
        required
      />
      <Editor
        value={description}
        onTextChange={(e) => setDescription(e.htmlValue)}
        style={{ height: '320px', background: 'white', color: 'black', fontSize: '16px'}}
        className="resizable-editor" // Add this class
        placeholder="Description"
        required
      />
      
      <input
        type="text"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        placeholder="Tech Stack (comma separated)"
      />
      <input
        type="url"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        placeholder="Project Location URL"
      />
      <button type="submit">Add Project</button>
      </form>
    </div>
  );
}
