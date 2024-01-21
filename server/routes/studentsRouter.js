const express = require('express');
const router = express.Router();

const Student = require('../models/Student')

router.post('/addStudents',async(req,res)=>{

    try {

        const newStudent = new Student({
            studentName:req.body.studentName,
            studentFatherName:req.body.studentFatherName,
            jamiaMoney:req.body.jamiaMoney,
            studentIdCard:req.body.studentIdCard,
            studentPic:req.body.studentPic,
            studentDOB:req.body.studentDOB,
            guardianName:req.body.guardianName,
            guardianIdCard:req.body.guardianIdCard,
            fatherOccupasion:req.body.fatherOccupasion,
            currentAddress:req.body.currentAddress,
            studentContact:req.body.studentContact,
            guardianContact:req.body.guardianContact,
            contemporaryEducation:req.body.contemporaryEducation,
            dateEntryLunar:req.body.dateEntryLunar,
            solarEntryDate:req.body.solarEntryDate,
            renewalAdmission:req.body.renewalAdmission,
            residential:req.body.residential,
            oldSchool:req.body.oldSchool,
            molarity:req.body.molarity,
            studentPosition:req.body.studentPosition,
        });
    
        const saveStudent = await newStudent.save()
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
    

    
})

router.get('/viewStudents',async(req,res)=>{
    try {
      const students = await Student.find()
      res.status(200).json(students)
    } catch (error) {
      res.status(500).json({"error":error})
    }
  })
  module.exports = router;