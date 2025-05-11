import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase"; 

const defaultLogoURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAIK8vMtGcFg41fpEHnQ1ndzth2JpjTM4z9iYpvFfbZ4F-NAb6SkNludIrfR3B1a65I8&usqp=CAU";

export default function AddEducation() {
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [institution, setInstitution] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (endDate && new Date(endDate) < new Date(startDate)) {
      alert("End date cannot be before the start date.");
      return;
    }

    try {
      await addDoc(collection(db, "education"), {
        degree,
        fieldOfStudy,
        institution,
        logoURL: logoURL || defaultLogoURL,
        startDate: Timestamp.fromDate(new Date(startDate)),
        ...(endDate && { endDate: Timestamp.fromDate(new Date(endDate)) }),
      });

      // Clear form
      setDegree("");
      setFieldOfStudy("");
      setInstitution("");
      setLogoURL("");
      setStartDate("");
      setEndDate("");

      alert("Education added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding education");
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>🎓 Add Education</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Degree"
          required
        />
        <input
          type="text"
          value={fieldOfStudy}
          onChange={(e) => setFieldOfStudy(e.target.value)}
          placeholder="Field of Study"
          required
        />
        <input
          type="text"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          placeholder="Institution"
          required
        />
        <input
          type="text"
          value={logoURL}
          onChange={(e) => setLogoURL(e.target.value)}
          placeholder="Logo URL"
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
        <button type="submit">Add Education</button>
      </form>
    </div>
  );
}
