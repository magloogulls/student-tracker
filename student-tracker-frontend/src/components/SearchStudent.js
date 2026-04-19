import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function SearchStudent() {
  const [cnic, setCnic] = useState("");
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;

    if (!cnic) {
      toast.error("Please enter CNIC");
      return;
    }

    if (!cnicPattern.test(cnic)) {
      toast.error("Invalid CNIC format");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/api/students/${cnic}`
      );

      setStudent(res.data);
      toast.success("Student found!");
    } catch (err) {
      setStudent(null);
      toast.error("Record not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
      
      <div className="glass-card p-4 shadow fade-in" style={{ width: "350px" }}>
        
        <h4 className="text-center mb-3">🔍 Student Search</h4>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter CNIC"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
        />

        <button
          className="btn btn-custom w-100"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {student && (
          <div className="mt-3 fade-in">
            <div className="card p-2 mb-2">
              <strong>Name:</strong> {student.name}
            </div>
            <div className="card p-2 mb-2">
              <strong>CNIC:</strong> {student.cnic}
            </div>
            <div className="card p-2">
              <strong>Course:</strong> {student.course}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default SearchStudent;