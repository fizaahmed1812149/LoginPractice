const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let CourseSchema = new Schema({
    studentname: {type: String, required: true, max: 100},
    coursename: {type: String, required: true, max: 100}});
    // Exporting the model
    module.exports = mongoose.model('Course', CourseSchema);
