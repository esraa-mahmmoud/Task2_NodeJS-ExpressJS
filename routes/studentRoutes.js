const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getAllStudents);

router.get('/add', studentController.getAddForm);

router.post('/add', studentController.createStudent);

router.get('/edit/:id', studentController.getEditForm);

router.post('/edit/:id', studentController.updateStudent);

router.get('/delete/:id', studentController.deleteStudent);

module.exports = router;
