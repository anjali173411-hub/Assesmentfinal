import express from 'express';

const safeRouter = express.Router();

safeRouter.get('/', async (req, res) => {   

    try {
        const feedbacks = await getAllFeedbacks();
        res.json(feedbacks);
    }   
    catch (error) {
res.status(500).json({ message: error.message });
    }
}
);  

safeRouter.get('/:id', async (req, res) => {
    try {
        const feedback = await getFeedbackById(req.params.id);      

        if (feedback) {
            res.json(feedback);
        }

        else {
            res.status(404).json({ message: 'Feedback not found' });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

safeRouter.post('/', async (req, res) => {
    try {
        const newFeedback = await createFeedback(req.body);
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

safeRouter.put('/:id', async (req, res) => {
    try {
        const updatedFeedback = await updateFeedback(req.params.id, req.body);  
        res.json(updatedFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

safeRouter.delete('/:id', async (req, res) => {
    try {
        await deleteFeedback(req.params.id);
        res.json({ message: 'Feedback deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

                
