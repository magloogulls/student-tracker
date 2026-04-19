const Student = require("../models/Student");

// Add Student
exports.addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Students
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// Get Student by CNIC
exports.getStudentByCnic = async (req, res) => {
  const student = await Student.findOne({ cnic: req.params.cnic });

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
};


// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const updated = await Student.findOneAndUpdate(
      { cnic: req.params.cnic },
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Delete Student
exports.deleteStudent = async (req, res) => {
  await Student.findOneAndDelete({ cnic: req.params.cnic });
  res.json({ message: "Student deleted" });
};