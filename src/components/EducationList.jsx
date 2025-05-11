import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function EducationList() {
  const [educationList, setEducationList] = useState([]);

  const fetchEducation = async () => {
    const querySnapshot = await getDocs(collection(db, "education"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setEducationList(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this education entry?")) {
      await deleteDoc(doc(db, "education", id));
      fetchEducation(); 
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>🎓 Your Education</h2>
      {educationList.length === 0 ? (
        <p>No education entries found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {educationList.map((edu) => (
            <li
              key={edu.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h3>{edu.degree} in {edu.fieldOfStudy}</h3>
              <p>{edu.institution}</p>
              <img
                src={edu.logoURL}
                alt={edu.institution}
                style={{ height: "40px", marginBottom: "0.5rem" }}
              />
              <p>
                {edu.startDate?.toDate().toLocaleDateString()} -{" "}
                {edu.endDate ? edu.endDate.toDate().toLocaleDateString() : "Present"}
              </p>
              <button
                style={{
                  marginTop: "0.5rem",
                  backgroundColor: "crimson",
                  color: "white",
                }}
                onClick={() => handleDelete(edu.id)}
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
