import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import parse from "html-react-parser";
import "../styles/DisplayContent.css"; 

export default function BlogList() {
  const [blogList, setBlogList] = useState([]);

  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogList(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await deleteDoc(doc(db, "blogs", id));
      fetchBlogs();
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>📝 Your Blogs</h2>
      {blogList.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {blogList.map((blog) => (
            <li
              key={blog.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h3>{blog.title}</h3>

              {/* <div className="display-content">
              {parse(blog.description.replace(/<ol>/g, '<ul>').replace(/<\/ol>/g, '</ul>'))}
              </div> */}
              <div
              dangerouslySetInnerHTML={{ __html: (blog.description.replace(/<ol>/g, '<ul>').replace(/<\/ol>/g, '</ul>')) }}
              style={{ color: "inherit" }} // ensures theme-based color
              />


              <div>
                {Array.isArray(blog.imageURLs) && blog.imageURLs.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Blog Image ${index + 1}`}
                    style={{ maxWidth: "100px", marginRight: "0.5rem" }}
                  />
                ))}
              </div>
              <p>{blog.date?.toDate().toLocaleDateString()}</p>
              <button
                style={{
                  marginTop: "0.5rem",
                  backgroundColor: "crimson",
                  color: "white",
                }}
                onClick={() => handleDelete(blog.id)}
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
