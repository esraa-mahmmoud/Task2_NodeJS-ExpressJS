const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  department: String,
  courses: [String],
});

module.exports = mongoose.model("Student", studentSchema);
