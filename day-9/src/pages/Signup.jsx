// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSignup = async () => {
    setErr("");
    if (!form.email || !form.password) {
      setErr("Please enter email and password.");
      return;
    }
    if (form.password.length < 6) {
      setErr("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      const cred = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      if (form.name) {
        await updateProfile(cred.user, { displayName: form.name });
      }
      // ✅ Signed up, go to signin or dashboard (choose one):
      navigate("/signin");
    } catch (e) {
      // Friendly errors
      const map = {
        "auth/email-already-in-use": "Email already in use.",
        "auth/invalid-email": "Invalid email address.",
        "auth/weak-password": "Password is too weak.",
      };
      setErr(map[e.code] || e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "40px auto" }}>
      <h2>Sign Up</h2>
      <input
        name="name"
        type="text"
        placeholder="Full Name (optional)"
        value={form.name}
        onChange={onChange}
        style={{ display: "block", width: "100%", marginBottom: 10 }}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={onChange}
        style={{ display: "block", width: "100%", marginBottom: 10 }}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={onChange}
        style={{ display: "block", width: "100%", marginBottom: 10 }}
      />
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      <button onClick={handleSignup} disabled={loading} style={{ width: "100%" }}>
        {loading ? "Creating account..." : "Sign Up"}
      </button>
      <p style={{ marginTop: 10 }}>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
}
