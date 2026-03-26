import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const getPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/))
      return "Strong";
    return "Medium";
  };

  const handleSubmit = () => {
    setEmailError("");
    setPassError("");
    setSuccess("");

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      valid = false;
    }

    if (password.length < 6) {
      setPassError("Password must be at least 6 characters");
      valid = false;
    }

    if (valid) {
      setSuccess("Signup successful!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Signup Form</h2>

        {}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        {emailError && <p style={styles.error}>{emailError}</p>}

        {}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {passError && <p style={styles.error}>{passError}</p>}

        {}
        {password && (
          <p style={styles.strength}>
            Strength: {getPasswordStrength(password)}
          </p>
        )}

        {}
        <button onClick={handleSubmit} style={styles.button}>
          Signup
        </button>

        {}
        {success && <p style={styles.success}>{success}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #74ebd5, #9face6)"
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },

  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  error: {
    color: "#e74c3c",
    fontSize: "14px"
  },

  success: {
    color: "#27ae60",
    marginTop: "10px"
  },

  strength: {
    fontSize: "14px",
    color: "#555"
  }
};