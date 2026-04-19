const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ ADD THIS (import routes)
const studentRoutes = require("./routes/studentRoutes");

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ ADD THIS (use routes)
app.use("/api/students", studentRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});