const express = require("express");
const router = express.Router();
const {
  addStudent,
  getStudents,
  getStudentByCnic,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

// Routes
router.post("/", addStudent);
router.get("/", getStudents);
router.get("/:cnic", getStudentByCnic);
router.put("/:cnic", updateStudent);
router.delete("/:cnic", deleteStudent);

module.exports = router;