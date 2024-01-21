const express = require('express');
const router = express.Router();

const Employer = require('../models/Employers');

router.post('/addEmployer', async (req, res) => {

  try {
    const newEmployer = new Employer({

      employersName: req.body.employersName,
      employersFatherName: req.body.employersFatherName,
      employersPosition: req.body.employersPosition,
      employersDOB: req.body.employersDOB,
      employersIdCard: req.body.employersIdCard,
      currentAddress: req.body.currentAddress,
      contact: req.body.contact,
      appointmentDate: req.body.appointmentDate,
      advertising: req.body.advertising,
      Email: req.body.Email,
      residential: req.body.residential,


    });

    const saveEmployer = await newEmployer.save();
    res.json(saveEmployer);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/viewEmployers', async (req, res) => {
  try {
    const employers = await Employer.find()
    res.status(200).json(employers)
  } catch (error) {
    res.status(500).json({ "error": error })
  }
})

module.exports = router;
