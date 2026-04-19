import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Simple Hardcoded Auth
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isAdmin", "true");
      toast.success("Login successful!");
      navigate("/admin");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #198754, #20c997)"
      }}
    >
      <div
        className="card p-4 shadow"
        style={{ width: "350px", borderRadius: "15px" }}
      >
        <h4 className="text-center mb-3">🔐 Admin Login</h4>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;