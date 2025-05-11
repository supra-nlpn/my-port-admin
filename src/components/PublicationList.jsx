import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function PublicationList() {
  const [publicationList, setPublicationList] = useState([]);

  const fetchPublications = async () => {
    const querySnapshot = await getDocs(collection(db, "publications"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPublicationList(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this publication?")) {
      await deleteDoc(doc(db, "publications", id));
      fetchPublications(); // Refresh list
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>📚 Your Publications</h2>
      {publicationList.length === 0 ? (
        <p>No publications found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {publicationList.map((pub) => (
            <li
              key={pub.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h3>{pub.title}</h3>
              <p>
                <a href={pub.url} target="_blank" rel="noopener noreferrer">
                  {pub.url}
                </a>
              </p>
              <p>{pub.date?.toDate().toLocaleDateString()}</p>
              <button
                style={{
                  marginTop: "0.5rem",
                  backgroundColor: "crimson",
                  color: "white",
                }}
                onClick={() => handleDelete(pub.id)}
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