import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image.png.svg";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      className="d-flex justify-content-between align-items-center px-4 py-2"
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "white"
      }}
    >
      {/* 🔷 Logo + Name */}
      <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="logo"
          width="50"
          height="50"
          style={{ borderRadius: "8px" }}
          className="me-2"
        />
        <h5 className="m-0" color="black">Student Track</h5>
      </div>

      {/* 🔷 Navigation Buttons */}
      <div>
  <Link to="/">
    <button
      className={`btn me-2 ${
        location.pathname === "/" ? "btn-light" : "btn-outline-light"
      }`}
    >
      Home
    </button>
  </Link>

  <Link to="/admin">
    <button
      className={`btn ${
        location.pathname === "/admin"
          ? "btn-warning"
          : "btn-outline-light"
      }`}
    >
      Admin
    </button>
  </Link>
</div>
    </nav>
  );
}

export default Navbar;