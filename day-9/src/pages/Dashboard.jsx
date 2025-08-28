// src/pages/Dashboard.jsx
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/products">View Products</Link></li>
        <li><Link to="/products/add">Add Product</Link></li>
      </ul>
    </div>
  );
}
