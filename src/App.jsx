import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import PublicationPage from "./pages/PublicationPage";
import BlogsPage from "./pages/BlogsPage";
import LinksPage from "./pages/LinksPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });
    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div
      data-theme={theme}
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#121212",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
      }}
    >
      <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
        <h1>🛠 my-port/Admin</h1>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <div>
            <Link to="/home" style={{ marginRight: "1rem" }}>Home</Link>
            <Link to="/education" style={{ marginRight: "1rem" }}>
              Education
            </Link>
            <Link to="/projects" style={{ marginRight: "1rem" }}>
              Projects
            </Link>
            <Link to="/experience" style={{ marginRight: "1rem" }}>
              Experience
            </Link>
            <Link to="/publication" style={{ marginRight: "1rem" }}>
              Publication
            </Link>
            <Link to="/blog" style={{ marginRight: "1rem" }}>
              Blogs
            </Link>
            <Link to="/links" style={{ marginRight: "1rem" }}>
              Links
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              all: "unset",
              cursor: "pointer",
              fontSize: "1.5rem",
              marginLeft: "auto",
            }}
          >
            {theme === "light" ? "☀️" : "🌙"}
          </button>
        </nav>
        <Routes>
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/publication" element={<PublicationPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <footer style={{ marginTop: "2rem", textAlign: "center" }}>
          <p>© 2025 my-port/Admin</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
