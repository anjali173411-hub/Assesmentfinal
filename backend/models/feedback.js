import mongoose from 'mongoose';    

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    feedbackComments: {
        type: String,
        required: true
    },
    feedbackRating: {
        type: String,
        required: true
    }
});


const Feedback = mongoose.model('Feedback', courseSchema);

export default Feedback;