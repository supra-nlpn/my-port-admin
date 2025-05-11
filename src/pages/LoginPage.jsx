import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); 
    } catch (err) {
      setError("Invalid email or password");
    }
  };

return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
                This is{" "}
                <span
                     style={{
                        background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
                        backgroundSize: "200% auto",
                        color: "white",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "gradientMove 5s ease infinite",
                      }}
                >
                    🛠 my-port/Admin
                </span>
                , login to continue
            </h2>
            <p style={{ textAlign: "center",fontSize: "0.9rem", color: "white" }}>
                <span role="img" aria-label="info">ℹ️</span> Please use the email and password you added to the 🔥Firebase Console to log in.
            </p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        width: "100%",
                        padding: "1rem",
                        fontSize: "1rem",
                        border: "1px solid var(--border-color, #ccc)",
                        borderRadius: "5px",
                        backgroundColor: "var(--background-color, #ffffff)",
                        color: "var(--text-color, #000000)",
                        transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
                        boxSizing: "border-box",
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        width: "100%",
                        padding: "1rem",
                        fontSize: "1rem",
                        border: "1px solid var(--border-color, #ccc)",
                        borderRadius: "5px",
                        backgroundColor: "var(--background-color, #ffffff)",
                        color: "var(--text-color, #000000)",
                        transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
                        boxSizing: "border-box",
                    }}
                />
            </div>
            <button
                type="submit"
                style={{
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    background: "linear-gradient(90deg, #007BFF, #00C6FF)",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "pointer"
                }}

            >
                Login
            </button>
        </form>
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