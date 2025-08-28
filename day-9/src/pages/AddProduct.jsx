import React, { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (!productName || !productPrice) {
      alert("Please enter both product name and price");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "products"), {
        name: productName,
        price: parseFloat(productPrice),
        createdAt: serverTimestamp(),
      });

      setProductName("");
      setProductPrice("");
      navigate("/products"); // ✅ redirect back
    } catch (error) {
      console.error("Error adding product:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleAddProduct} disabled={loading}>
        {loading ? "Adding..." : "Add Product"}
      </button>
    </div>
  );
}

export default AddProduct;
