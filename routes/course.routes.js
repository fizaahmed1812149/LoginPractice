const express=require('express');
const router=express.Router();

const course_controller=require('../controllers/course.controller');

router.get('/list',course_controller.course_list);  //http://localhost:3000/course/list

router.get('/createform',course_controller.course_formcreate); //load the insert form
router.post('/create',course_controller.course_create); //this will perform insert operation.

router.post('/:id/delete',course_controller.course_delete);

router.post('/updateform/:id',course_controller.course_updateform); //used to get the updateform
router.post('/:id/update',course_controller.course_update); //used to perform the update operation
//http://localhost:3000/course/objectID/update

module.exports=router;