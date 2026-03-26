import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Mood from "./pages/Mood";
import Weather from "./pages/Weather";

export default function App() {
  return (
    <BrowserRouter>

      {}
      <nav style={styles.nav}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/mood" style={{ color: "white", textDecoration: "none" }}>Mood</Link>
        <Link to="/weather" style={{ color: "white", textDecoration: "none" }}>Weather</Link>
      </nav>

      {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>

    </BrowserRouter>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    background: "#FE81D4",
    justifyContent: "center",
  }
};