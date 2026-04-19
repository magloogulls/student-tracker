import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    course: ""
  });

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editCnic, setEditCnic] = useState(null);

  const navigate = useNavigate();

  // 🔐 Logout
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    toast.success("Logged out");
    navigate("/login");
  };

  // Fetch students
  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Add / Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;

    if (!formData.name || !formData.cnic || !formData.course) {
      toast.error("All fields required");
      return;
    }

    if (!cnicPattern.test(formData.cnic)) {
      toast.error("Invalid CNIC format");
      return;
    }

    try {
      setLoading(true);

      if (editMode) {
        await axios.put(
          `http://localhost:5000/api/students/${editCnic}`,
          formData
        );
        toast.success("Updated!");
      } else {
        await axios.post(
          "http://localhost:5000/api/students",
          formData
        );
        toast.success("Student added!");
      }

      setFormData({ name: "", cnic: "", course: "" });
      setEditMode(false);
      setEditCnic(null);

      fetchStudents();
    } catch (err) {
      toast.error("Error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Delete
  const deleteStudent = async (cnic) => {
    await axios.delete(
      `http://localhost:5000/api/students/${cnic}`
    );
    toast.success("Deleted");
    fetchStudents();
  };

  // Edit
  const handleEdit = (s) => {
    setFormData({
      name: s.name,
      cnic: s.cnic,
      course: s.course
    });

    setEditMode(true);
    setEditCnic(s.cnic);
  };

  return (
    <div className="container mt-4">

      {/* Logout */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-dark mb-3" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Form */}
      <div className="glass-card p-4 shadow mb-4 fade-in">
        <h4>{editMode ? "Edit Student" : "Add Student"}</h4>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control mb-2"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="cnic"
            placeholder="CNIC"
            className="form-control mb-2"
            value={formData.cnic}
            onChange={handleChange}
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            className="form-control mb-2"
            value={formData.course}
            onChange={handleChange}
          />

          <button className="btn btn-custom w-100" disabled={loading}>
            {loading
              ? editMode
                ? "Updating..."
                : "Adding..."
              : editMode
              ? "Update Student"
              : "Add Student"}
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="glass-card p-4 shadow fade-in">
        <h4>All Students</h4>

        <table className="table mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>CNIC</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.cnic}</td>
                <td>{s.course}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => deleteStudent(s.cnic)}
                  >
                    Delete
                  </button>

                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEdit(s)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Admin;