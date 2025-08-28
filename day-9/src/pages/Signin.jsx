// src/pages/Signin.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSignin = async () => {
    setErr("");
    if (!form.email || !form.password) {
      setErr("Please enter email and password.");
      return;
    }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/dashboard");
    } catch (e) {
      const map = {
        "auth/invalid-credential": "Incorrect email or password.",
        "auth/invalid-email": "Invalid email address.",
        "auth/user-disabled": "This account has been disabled.",
        "auth/user-not-found": "No account found for this email.",
        "auth/wrong-password": "Wrong password.",
      };
      setErr(map[e.code] || e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: "40px auto" }}>
      <h2>Sign In</h2>
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
      <button onClick={handleSignin} disabled={loading} style={{ width: "100%" }}>
        {loading ? "Signing in..." : "Sign In"}
      </button>
      <p style={{ marginTop: 10 }}>
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
