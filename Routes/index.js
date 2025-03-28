const express = require("express");
const router = express.Router();
const controller = require("../Controllers/index");

router.get("/courses", controller.getAllCourses);
router.get("/courses/:id", controller.getCourseById);
router.get("/getCoursesBySub/:sub", controller.getCoursesBySub);


module.exports = router;
