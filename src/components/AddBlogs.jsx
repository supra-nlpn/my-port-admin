import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase"; 
import { Editor } from 'primereact/editor';
import DOMPurify from "dompurify";


export default function AddBlogs() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURLs, setImageURLs] = useState([""]);
  const [date, setDate] = useState("");

  const handleImageURLChange = (index, value) => {
    const updatedURLs = [...imageURLs];
    updatedURLs[index] = value;
    setImageURLs(updatedURLs);
  };

  const addImageField = () => {
    setImageURLs([...imageURLs, ""]);
  };

  const removeImageField = (index) => {
    const updatedURLs = imageURLs.filter((_, i) => i !== index);
    setImageURLs(updatedURLs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sanitizedDescription = DOMPurify.sanitize(description, {
        FORBID_ATTR: ['style'],
        ALLOWED_TAGS: ['b', 'i', 'u', 'strong', 'em', 'ul', 'ol', 'li', 'p', 'br', 'div', 'span', 'code'],
      });
  
      await addDoc(collection(db, "blogs"), {
        title,
        description: sanitizedDescription,
        imageURLs,
        date: Timestamp.fromDate(new Date(date)),
      });
  
      // Clear form
      setTitle("");
      setDescription("");
      setImageURLs([""]);
      setDate("");
  
      alert("Blog added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding blog");
    }
  };
  

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>📝 Add Blog</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          required
        />
        <Editor
          value={description}
          onTextChange={(e) => setDescription(e.htmlValue)} 
          style={{ height: '320px', background: 'white', color: 'blue', fontSize: '16px'}} 
          className="resizable-editor"
          placeholder="Description"
          required
        />
        <div>
          <label>Image URLs:</label>
          {imageURLs.map((url, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input
                type="url"
                value={url}
                onChange={(e) => handleImageURLChange(index, e.target.value)}
                placeholder="Image URL"
                required
              />
              {imageURLs.length > 1 && (
                <button type="button" onClick={() => removeImageField(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addImageField} style={{ marginTop: "0.5rem" }}>
            Add Image URL
          </button>
        </div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}