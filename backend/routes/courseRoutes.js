import express from 'express';

const router=express.Router();


router.get('/',async(req,res)=>{
    try{
        const courses=await getAllCourses();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const course=await getCourseById(req.params.id);    
    if(course){
        res.json(course);
    }           
    else{
        res.status(404).json({ message: 'Course not found' });
    }                   

    } catch (error) {
        res.status(500).json({ message: error.message });
    }   });

    router.post('/',async(req,res)=>{
        try{
            if(existsCourse(req.body.courseId)){
                res.status(400).json({ message: 'Course with this ID already exists' });
                return;
            }
            const newCourse=await createCourse(req.body);   

            res.status(201).json(newCourse);
        }           

        catch (error) {
            res.status(400).json({ message: error.message });
        }  
    });

    router.put('/:id',async(req,res)=>{
        try{
            const updatedCourse=await updateCourse(req.params.id,req.body);   
            if(updatedCourse){
                res.json(updatedCourse);
            }           
            else{
                res.status(404).json({ message: 'Course not found' });
            }   
        } catch (error) {
            res.status(500).json({ message: error.message });
        }   
    });

    router.delete('/:id',async(req,res)=>{      

        try{
            const deletedCourse=await deleteCourse(req.params.id);
            
            if(deletedCourse){
                res.json({ message: 'Course deleted successfully' });
            }           
            else{
                res.status(404).json({ message: 'Course not found' });
            }       
        } catch (error) {
            res.status(500).json({ message: error.message });
        }   
    });

    export default router;