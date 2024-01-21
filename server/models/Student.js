const mongoose = require('mongoose')

const studentsSchema = new mongoose.Schema({
    studentName:{
        type:String,
        required:true,
    },
    studentFatherName:{
        type:String,
        required:true,
    },
    jamiaMoney:{
        type:Number,
        required:true,
    },
    studentIdCard:{
        type:Number,
        required:true,
    },
    // studentPic:{
    //     type:Buffer,
    //     required:false,
    // },
    studentDOB:{
        type:Date,
        required:true,
    },
    guardianName:{
        type:String,
        required:true,
    },
    guardianIdCard:{
        type:Number,
        required:true
    },
    fatherOccupasion:{
        type:String,
        required:true,
    },
    currentAddress:{
        type:String,
        required:true,
    },
    studentContact:{
        type:Number,
        required:true,
    },
    guardianContact:{
        type:Number,
        required:true,
    },
    contemporaryEducation:{
        type:String,
        required:true,
    },
    dateEntryLunar:{
        type:Date,
        required:true,
    },
    solarEntryDate:{
        type:Date,
        required:true,
    },
    renewalAdmission:{
        type:String,
        required:true,
    }, 
    residential: {
        type: Boolean,
        required: true,
    },
    oldSchool:{
        type:String,
        required:true,
    },
    molarity:{
        type:String,
        required:true,
    },
    studentPosition:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model('student_data',studentsSchema)