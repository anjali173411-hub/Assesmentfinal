import mongoose from 'mongoose';    

const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseDuration: {
        type: String,
        required: true
    },
    overallFeedbackRating: {
        type: String,
        required: true
    }

});

const Course = mongoose.model('Course', courseSchema);

export default Course;