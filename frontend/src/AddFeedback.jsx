import React, { useState } from 'react';

const AddFeedback = () => {
    const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
        if(!courseName || !feedback || !courseDuration || !overallFeedbackRating) {
            alert('Please fill in all fields');
            return;

             const feedbackData = {  courseName: courseName,
                feedback: feedback,
                courseDuration: courseDuration, 
                overallFeedbackRating: overallFeedbackRating        
        }       
 e.preventDefault();
        
    };

    return (
        <div>
            <h2>Add Feedback</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback..."
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
}
export default AddFeedback;