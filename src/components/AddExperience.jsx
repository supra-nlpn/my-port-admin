import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase"; 
import { Editor } from 'primereact/editor';
import DOMPurify from "dompurify"; 

export default function AddExperience() {
  const [company, setCompany] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const defaultLogoURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAIK8vMtGcFg41fpEHnQ1ndzth2JpjTM4z9iYpvFfbZ4F-NAb6SkNludIrfR3B1a65I8&usqp=CAU";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (endDate && new Date(endDate) < new Date(startDate)) {
      alert("End date cannot be before the start date.");
      return;
    }

    try {
      const sanitizedDescription = DOMPurify.sanitize(description, {
        FORBID_ATTR: ['style'],
        ALLOWED_TAGS: ['b', 'i', 'u', 'strong', 'em', 'ul', 'ol', 'li', 'p', 'br', 'div', 'span', 'code'],
      });

      await addDoc(collection(db, "experience"), {
        company,
        logoURL: logoURL || defaultLogoURL,
        role,
        description: sanitizedDescription,
        startDate: Timestamp.fromDate(new Date(startDate)),
        ...(endDate && { endDate: Timestamp.fromDate(new Date(endDate)) }),
      });

      // Clear form
      setCompany("");
      setLogoURL("");
      setRole("");
      setDescription("");
      setStartDate("");
      setEndDate("");

      alert("Experience added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding experience");
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>💼 Add Experience</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          required
        />
        <input
          type="text"
          value={logoURL}
          onChange={(e) => setLogoURL(e.target.value)}
          placeholder="Logo URL"
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          required
        />
        <Editor
          value={description}
          onTextChange={(e) => setDescription(e.htmlValue)} // Update description with HTML content
          style={{ height: '320px', background: 'white', color: 'black', fontSize: '16px' }}
          className="resizable-editor" 
          placeholder="Description"
          required
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="End Date (optional)"
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          Add Experience
        </button>
      </form>
    </div>
  );
}
