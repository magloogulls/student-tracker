import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchStudent from "./components/SearchStudent";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
   <Router>
  <Navbar />

  <Routes>
    <Route path="/" element={<SearchStudent />} />
    <Route path="/login" element={<Login />} />

    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      }
    />
  </Routes>

  <ToastContainer />
</Router>
  );
}

export default App;