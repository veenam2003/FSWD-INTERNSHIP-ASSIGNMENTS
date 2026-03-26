import { useState } from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState("");

  const moods = {
    happy: {
      emoji: "😊",
      text: "You're feeling great today!",
      color: "#ffeaa7"
    },
    sad: {
      emoji: "😢",
      text: "It's okay to feel sad sometimes.",
      color: "#74b9ff"
    },
    angry: {
      emoji: "😡",
      text: "Take a deep breath and relax.",
      color: "#ff7675"
    },
    sleepy: {
      emoji: "😴",
      text: "Maybe you need some rest.",
      color: "#a29bfe"
    }
  };

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      transition: "0.4s"
    },

    card: {
      background: "white",
      padding: "30px",
      borderRadius: "15px",
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      width: "300px",
      zIndex: 2
    },

    message: {
      fontSize: "20px",
      fontWeight: "bold",
      animation: "pop 0.4s ease"
    }
  };

  const renderEmojis = () => {
    if (!mood) return null;

    return Array.from({ length: 15 }).map((_, i) => (
      <span
        key={i}
        style={{
          position: "absolute",
          left: Math.random() * 100 + "%",
          top: "-50px",
          fontSize: "24px",
          animation: `fall ${Math.random() * 3 + 2}s linear infinite`,
          zIndex: 1
        }}
      >
        {moods[mood].emoji}
      </span>
    ));
  };

  return (
    <div
      style={{
        ...styles.container,
        background: mood ? moods[mood].color : "#f1f2f6"
      }}
    >
      {}
      {renderEmojis()}

      <div style={styles.card}>
        <h2>Mood Tracker</h2>

        {}
        {mood && (
          <>
            <h1>{moods[mood].emoji}</h1>
            <p style={styles.message}>
              {moods[mood].text}
            </p>
          </>
        )}

        {}
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => setMood("happy")}>😊 Happy</button><br/><br/>
          <button onClick={() => setMood("sad")}>😢 Sad</button><br/><br/>
          <button onClick={() => setMood("angry")}>😡 Angry</button><br/><br/>
          <button onClick={() => setMood("sleepy")}>😴 Sleepy</button>
        </div>
      </div>
    </div>
  );
}