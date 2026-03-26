const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to my Node server 🚀");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About page");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact us at example@email.com");
});

// Custom route
app.get("/hello", (req, res) => {
  res.send("Hello from server 👋");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});