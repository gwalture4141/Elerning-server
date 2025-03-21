// const courseList = require("../Models/courses.json");
const courseList = require("../Models/Courses");



// exports.getAllCourses = (req, res) => {
//     res.status(200).json(courseList);
// }
exports.getAllCourses = (req, res) => {
    // Query the database to fetch all courses
    courseList.find()
        .then((courseList) => {
            // console.log("course--->>>>",courseList)
            // Check if courses are found and return them
            if (courseList && courseList.length > 0) {
                res.status(200).json(courseList);  // Send the course data in the response
            } else {
                res.status(404).json({ message: 'No courses found' });
            }
        })
        .catch((error) => {
            console.error('Error fetching courses:', error);
            res.status(500).json({ message: 'Error fetching courses', error: error.message });
        });
};

// exports.getCourseById = (req, res) => {
//     const courseId = req.params.id;
//     const course = courseList.find(value =>  value.id == courseId);

//     if (course) {
//         res.status(200).json({ course: course });
//     } else {
//         res.status(404).json({
//             message: "Please provide valid course ID"
//         });
//     }
// }
exports.getCourseById = async (req, res) => {
    const courseId = req.params.id;

    try {
        // const course = await courseList.findById(courseId);
        const course = await courseList.findOne({ id: parseInt(courseId) });;
        if (course) {
            res.status(200).json({ course: course });
        } else {
            res.status(404).json({
                message: "course not found"
            });
        }
    } catch (error) {
        console.error('Error fetching course by ID:', error);
        res.status(500).json({
            message: 'Error fetching course by ID',
            error: error.message
        });
    }
};
// exports.getCoursesBySub = (req, res) => {
//     const sub = req.params.sub;

//     // const filteredCourses = courseList.filter(rest => rest.sub == sub);
//     const filteredCourses = courseList.filter(rest => rest.sub.toLowerCase() === sub.toLowerCase());


//     if (filteredCourses.length > 0) {
//         res.status(200).json({ courseList: filteredCourses });
//     } else {
//         res.status(404).json({
//             message: "Please provide valid sub Name"
//         });
//     } 
// }
exports.getCoursesBySub = (req, res) => {
    const sub = req.params.sub;

    
    // Query the database for courses that match the sub
    courseList.find({ sub: { $regex: sub, $options: 'i' } })  // This uses case-insensitive regex to match sub
        .then((filteredcourses) => {
           

            if (filteredcourses.length > 0) {
                res.status(200).json({ courseList: filteredcourses });
            } else {
                res.status(404).json({
                    message: "No courses found for the provided sub"
                });
            }
        })
        .catch((error) => {
            console.error('Error fetching courses by sub:', error);
            res.status(500).json({
                message: 'Error fetching courses',
                error: error.message
            });
        });
};

