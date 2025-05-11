import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase"; // adjust the path based on your setup

export default function AddPublication() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "publications"), {
        title,
        url,
        date: Timestamp.fromDate(new Date(date)),
      });

      // Clear form
      setTitle("");
      setUrl("");
      setDate("");

      alert("Publication added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding publication");
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>📚 Add Publication</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Publication Title"
          required
        />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Publication URL"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Publication</button>
      </form>
    </div>
  );
}