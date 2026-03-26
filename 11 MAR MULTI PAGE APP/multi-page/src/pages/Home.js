import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Welcome to My React App 🚀</h1>

      {}
      <div style={{ marginTop: "30px" }}>
        <h3>Mood Tracker 😊</h3>
        <p>
          The Mood Tracker allows users to select their current mood and updates 
          the UI dynamically using React state.
        </p>
        <Link to="/mood">Go to Mood Tracker</Link>
      </div>

      {}
      <div style={{ marginTop: "30px" }}>
        <h3>Weather Dashboard 🌦</h3>
        <p>
          The Weather Dashboard fetches real-time weather data using an API 
          and displays temperature and conditions for any city.
        </p>
        <Link to="/weather">Go to Weather</Link>
      </div>
    </div>
  );
}