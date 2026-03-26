import { useState } from "react";

export default function TaskApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Task Manager</h2>

        {}
        <div style={styles.inputBox}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addBtn}>Add</button>
        </div>

        {}
        <ul style={styles.list}>
          {tasks.map((t, index) => (
            <li key={index} style={styles.listItem}>
              {t}
              <button
                onClick={() => deleteTask(index)}
                style={styles.deleteBtn}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
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
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center"
  },

  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },

  addBtn: {
    padding: "10px 15px",
    background: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  list: {
    listStyle: "none",
    padding: 0
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    background: "#f1f2f6",
    borderRadius: "8px"
  },

  deleteBtn: {
    background: "#e74c3c",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};