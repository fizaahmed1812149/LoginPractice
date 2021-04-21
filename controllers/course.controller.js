const Course = require('../models/course.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Its a test page');
};

exports.course_create=(req,res)=> {
    let course=new Course({
        studentname : req.body.studentname,
        coursename : req.body.coursename
    });

    course.save(err =>{
        if(err) {
            return next(err);
        }
        res.redirect('/course/list');
    }
    )
};
//this function will load the insert form, view loading
exports.course_formcreate=function(req,res){
    res.render('createform',{page:'New Course', menuId:'createform'})
};
// controllers/course.controller.js
exports.course_detail = function (req, res) {
    Course.findById(req.params.id, function (err, course) {
        if (err) {return next(err);}
        res.send(course);
    })
};
//this function will load the update form
exports.course_updateform=function(req,res){
    Course.findById(req.params.id,function(err, course){
        if (err) return next(err);
        res.render('updateform',{page:'Update Course', menuId:'updateform',course:course});
    })
};
exports.course_update=(req,res)=> {
    Course.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, course) => {
        if (err) {return next(err);}
        res.redirect('/course/list');
    });

}

exports.course_delete=(req,res)=> {
    Course.findByIdAndRemove(req.params.id,(err)=>{
        if (err) {return next(err);}
        res.redirect('/course/list');
    })

}

exports.course_list = (req, res) => {
    Course.find((err, course) => {
        if (err) {console.log("Error in retrieving courses list",+JSON.stringify(err, undefined,2));}
        res.render('list',{page : 'Course List', menuId: 'list', course: course});
    })
}