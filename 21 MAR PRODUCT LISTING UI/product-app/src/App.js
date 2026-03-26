import { useState } from "react";

export default function ProductApp() {
  const initialProducts = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Phone", price: 20000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 2000, category: "Fashion" },
    { id: 4, name: "Watch", price: 3000, category: "Accessories" }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");

  const addProduct = () => {
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price,
      category
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛍 Product Store</h2>

      {}
      <div style={styles.form}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          style={styles.input}
        >
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Accessories</option>
        </select>

        <button onClick={addProduct} style={styles.addBtn}>
          Add
        </button>
      </div>

      {}
      <div style={styles.filters}>
        {["All", "Electronics", "Fashion", "Accessories"].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              ...styles.filterBtn,
              background: selectedCategory === cat ? "#3498db" : "#ecf0f1",
              color: selectedCategory === cat ? "white" : "black"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {}
      <div style={styles.grid}>
        {filteredProducts.map(product => (
          <div key={product.id} className="card" style={styles.card}>
            <h3>{product.name}</h3>
            <p style={styles.price}>₹{product.price}</p>
            <p style={styles.category}>{product.category}</p>
            <button style={styles.btn}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
    background: "linear-gradient(to right, #eef2f3, #8e9eab)",
    minHeight: "100vh"
  },

  heading: {
    marginBottom: "20px",
    color: "#2c3e50"
  },

  form: {
    marginBottom: "20px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },

  addBtn: {
    padding: "10px",
    background: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  filters: {
    marginBottom: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "10px"
  },

  filterBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "0.3s"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    transition: "transform 0.3s, box-shadow 0.3s"
  },

  price: {
    fontWeight: "bold",
    color: "#27ae60"
  },

  category: {
    fontSize: "14px",
    color: "#7f8c8d"
  },

  btn: {
    marginTop: "10px",
    padding: "8px",
    background: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};