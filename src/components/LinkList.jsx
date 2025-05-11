import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function LinkList() {
  const [linkList, setLinkList] = useState([]);

  const fetchLinks = async () => {
    const querySnapshot = await getDocs(collection(db, "links"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setLinkList(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      await deleteDoc(doc(db, "links", id));
      fetchLinks(); // Refresh list
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>🔗 Your Links</h2>
      {linkList.length === 0 ? (
        <p>No links found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {linkList.map((link) => {
            const [name, url] = Object.entries(link.URLmap)[0]; // Extract from map

            return (
              <li
                key={link.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <h3>{name}</h3>
                <p>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </p>
                <button
                  style={{
                    marginTop: "0.5rem",
                    backgroundColor: "crimson",
                    color: "white",
                  }}
                  onClick={() => handleDelete(link.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
