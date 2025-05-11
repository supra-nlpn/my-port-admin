import { useAuth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

export default function HomePage() {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
      navigate("/login"); 
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!currentUser) {
    return <p>User not authenticated.</p>;
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1
        style={{
          background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
          backgroundSize: "200% auto",
          color: "white",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientMove 5s ease infinite",
        }}
      >
        Welcome, build your portfolio from here ✨
      </h1>
      <p style={{ fontSize: "1.5rem" }}>
        firebase-user:{" "}
        <span style={{ color: "#0909e8" }}>{currentUser?.email || "User"}</span>
      </p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "crimson",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
      <style>
        {`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}
      </style>
    </div>
  );
}