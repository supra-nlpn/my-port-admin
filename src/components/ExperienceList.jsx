import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";


export default function ExperienceList() {
  const [experienceList, setExperienceList] = useState([]);

  const fetchExperiences = async () => {
    const querySnapshot = await getDocs(collection(db, "experience"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setExperienceList(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this experience entry?")) {
      await deleteDoc(doc(db, "experience", id));
      fetchExperiences(); 
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>💼 Your Experiences</h2>
      {experienceList.length === 0 ? (
        <p>No experience entries found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {experienceList.map((exp) => (
            <li
              key={exp.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h3>{exp.company}</h3>
              <img
                src={exp.logoURL}
                alt={exp.company}
                style={{ height: "40px", marginBottom: "0.5rem" }}
              />
              <p>{exp.role}</p>
              <div
              dangerouslySetInnerHTML={{ __html: (exp.description.replace(/<ol>/g, '<ul>').replace(/<\/ol>/g, '</ul>')) }}
              style={{ color: "inherit" }} 
              />
  
              <p>
                {exp.startDate?.toDate().toLocaleDateString()} - {" "}
                {exp.endDate ? exp.endDate.toDate().toLocaleDateString() : "Present"}
              </p>
              <button
                style={{
                  marginTop: "0.5rem",
                  backgroundColor: "crimson",
                  color: "white",
                }}
                onClick={() => handleDelete(exp.id)}
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