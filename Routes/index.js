// create some routes which can recieve the incoming request

const express = require('express');
const router = express.Router();

const controller = require('../Controllers/index');

router.get('/courses', controller.getAllCourses);

router.get('/courses/:id', controller.getCourseById);

router.get('/getCoursesBySub/:sub', controller.getCoursesBySub);

// router.get('/getMealTypes', controller.getAllMealTypes);

module.exports = router;