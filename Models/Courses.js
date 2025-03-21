const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
});



const courseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    sub: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    originalPrice: {
        type: String,
        required: true
    },
    finalPrice: {
        type: String,
        required: true
    },
    offerValidTil: {
        type: String,
        required: true
    },
    youtubeLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    reviews: {
        type: [reviewSchema], // Array of review objects
        default: []
    },
    image: {
        type: String,
        required: true
    }
});

const Course = mongoose.model('Course', courseSchema, 'Courses'); // Collection name: 'Courses'

module.exports = Course;
