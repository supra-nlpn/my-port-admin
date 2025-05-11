import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function AddLinks() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !url) {
      alert("Please provide both a name and a URL.");
      return;
    }

    try {
      await addDoc(collection(db, "links"), {
        URLmap: {
          [name]: url
        }
      });

      setName("");
      setUrl("");
      alert("Link added successfully!");
    } catch (error) {
      console.error("Error adding link:", error);
      alert("Failed to add link.");
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>🔗 Add Link</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Link Name"
          required
        />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Link URL"
          required
        />
        <button type="submit">Add Link</button>
      </form>
    </div>
  );
}
