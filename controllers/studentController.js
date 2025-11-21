const Student = require('../models/studentModel');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.render('students/list', { students });
  } catch (error) {
    res.status(500).send('Error fetching students');
  }
};

exports.getAddForm = (req, res) => {
  res.render('students/add');
};

exports.createStudent = async (req, res) => {
  try {
    const { name, age, department, email } = req.body;
    await Student.create({ name, age, department, email });
    res.redirect('/students');
  } catch (error) {
    res.status(500).send('Error adding student');
  }
};

exports.getEditForm = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.render('students/edit', { student });
  } catch (error) {
    res.status(500).send('Error loading edit form');
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { name, age, department, email } = req.body;
    await Student.findByIdAndUpdate(req.params.id, { name, age, department, email });
    res.redirect('/students');
  } catch (error) {
    res.status(500).send('Error updating student');
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect('/students');
  } catch (error) {
    res.status(500).send('Error deleting student');
  }
};
