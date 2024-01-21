import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';

const StudentsForm = () => {
  const {user}=useAuthContext();
  const [studentsForm, setStudentsForm] = useState({
    studentName: '',
    studentFatherName: '',
    jamiaMoney: '',
    studentIdCard: '',
    studentPic: null, 
    studentDOB:'',
    guardianName:'',
    guardianIdCard:'',
    fatherOccupasion:'',
    currentAddress:'',
    studentContact:'',
    guardianContact:'',
    contemporaryEducation:'',
    dateEntryLunar:'',
    solarEntryDate:'',
    renewalAdmission:'',
    residential: {
      resident:false,
      nonResident: false,
    },
    oldSchool:'',
    molarity:'',
    studentPosition:'',
  });

  const onChangeHandler = (event) => {
    const { name, value, type } = event.target;

    // If the input type is "file", handle it separately for images
    if (type === 'file') {
      const file = event.target.files[0];
      setStudentsForm((prevForm) => ({
        ...prevForm,
        studentPic: file, // Update with the selected image file
      }));
    } else {
      setStudentsForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('Form Data:', studentsForm);

      const response = await axios.post(
        'http://localhost:5000/api/addStudents',
        studentsForm,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.accessToken}`
          }
        }
      );

      console.log('Response Data:', response.data);

      // Reset the form after successful submission
      setStudentsForm({
        // teacherName: '',
        // teacherFatherName: '',
        // teacherPosition: '',
        // teacherDOB:'',
        // teacherIdCard:'',
        // currentAddress:'',
        // contact:'',
        // appointmentDate: '',
        // advertising: '',
        // Email: '',
  
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-6'>
            <label className='form-label mt-3' htmlFor="studentName">نام</label>
            <input
              className='form-control'
              required
              autoComplete='off'
              type="text"
              onChange={onChangeHandler}
              name="studentName"
              id="studentName"
              value={studentsForm.studentName}
            />
          
          <label className='form-label mt-2' htmlFor="jamiaMoney">رقم الجامعہ</label>
              <input
              className='form-control'
              required
              autoComplete='off'
              type="number"
              onChange={onChangeHandler}
              name="jamiaMoney"
              id="jamiaMoney"
              value={studentsForm.jamiaMoney}/>

<label className='form-label mt-1' htmlFor="studentPic">تصویر</label>
        <div className="passport-size-box">
          <input
            className='form-control file-input'
            required
            autoComplete='off'
            type="file"
            onChange={onChangeHandler}
            name="studentPic"
            id="studentPic"
            accept="image/*"
          />
          {/* Display the selected image in the box */}
          {studentsForm.studentPic && (
            <img
              className="preview-image"
              src={URL.createObjectURL(studentsForm.studentPic)}
              alt="Student Preview"
            />
          )}
        </div>

            <label className='form-label mt-2' htmlFor="guardianIdCard">سرپرست کا شناختی کارڈ</label>
              <input
              className='form-control'
              required
              autoComplete='off'
              type="number"
              onChange={onChangeHandler}
              name="guardianIdCard"
              id="guardianIdCard"
              value={studentsForm.guardianIdCard}/>

              <label className='form-label mt-2' htmlFor="currentAddress">موجودہ پتہ</label>
              <input
              className='form-control'
              required
              autoComplete='off'
              type="text"
              onChange={onChangeHandler}
              name="currentAddress"
              id="currentAddress"
              value={studentsForm.currentAddress}/>

              <label className='form-label mt-2' htmlFor="guardianContact">رابطہ سرپرست</label>
              <input
              className='form-control'
              required
              autoComplete='off'
              type="number"
              onChange={onChangeHandler}
              name="guardianContact"
              id="guardianContact"
              value={studentsForm.guardianContact}/>

              <label className='form-label mt-2' htmlFor="dateEntryLunar">تاریخ داخلہ قمری</label>
              <input
              className='form-control'
              required
              autoComplete='off'
              type="date"
              onChange={onChangeHandler}
              name="dateEntryLunar"
              id="dateEntryLunar"
              value={studentsForm.dateEntryLunar}/>

              <label className='form-label mt-2' htmlFor="renewalAdmission">تجدید داخلہ</label>
              <input
              className='form-control'
              required
              autoComplete='off'
              type="text"
              onChange={onChangeHandler}
              name="renewalAdmission"
              id="renewalAdmission"
              value={studentsForm.renewalAdmission}/>

              <label className='form-label mt-2' htmlFor="oldSchool">سابقہ مدرسے کا نام</label>
              <input
              className='form-control'
              required
              autoComplete='off'
              type="text"
              onChange={onChangeHandler}
              name="oldSchool"
              id="oldSchool"
              value={studentsForm.oldSchool}/>

              <label className='form-label mt-2' htmlFor="molarity">تعلیمی و اخلاقی کیفیت</label>
              <input
              className='form-control'
              required
              autoComplete='off'
              type="text"
              onChange={onChangeHandler}
              name="molarity"
              id="molarity"
              value={studentsForm.molarity}/>


            
            
          </div>



        <div className='col-6'>

        <label className='form-label mt-3' htmlFor="studentFatherName">والد کا نام</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="text"
            onChange={onChangeHandler}
            name="studentFatherName"
            id="studentFatherName"
            value={studentsForm.studentFatherName}/>
         
          
          <label className='form-label mt-2' htmlFor="studentIdCard">طالب کا شناختی کارڈ</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="number"
            onChange={onChangeHandler}
            name="studentIdCard"
            id="studentIdCard"
            value={studentsForm.studentIdCard}/>

          <label className='form-label mt-2' htmlFor="studentDOB">تاریخ پیدائش</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="date"
            onChange={onChangeHandler}
            name="studentDOB"
            id="studentDOB"
            value={studentsForm.studentDOB}/>

          <label className='form-label mt-2 ' htmlFor="guardianName">سرپرست کا نام</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="text"
            onChange={onChangeHandler}
            name="guardianName"
            id="guardianName"
            value={studentsForm.guardianName}/>

          <label className='form-label mt-2' htmlFor="fatherOccupasion">والدکاپیشہ</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="text"
            onChange={onChangeHandler}
            name="fatherOccupasion"
            id="fatherOccupasion"
            value={studentsForm.fatherOccupasion}/>

          <label className='form-label mt-2' htmlFor="studentContact">رابطہ طالب علم</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="number"
            onChange={onChangeHandler}
            name="studentContact"
            id="studentContact"
            value={studentsForm.studentContact}/>

          <label className='form-label mt-2' htmlFor="contemporaryEducation">عصری تعلیم</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="text"
            onChange={onChangeHandler}
            name="contemporaryEducation"
            id="contemporaryEducation"
            value={studentsForm.contemporaryEducation}/>

          <label className='form-label mt-2' htmlFor="solarEntryDate">تاریخ داخلہ شمسی</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="date"
            onChange={onChangeHandler}
            name="solarEntryDate"
            id="solarEntryDate"
            value={studentsForm.solarEntryDate}/>

          <div className='d-flex gap-3 mt-5'>
          <label className='form-label'>مقیم</label>
          <input
          onChange={onChangeHandler}
          required
          autoComplete='off'
  
          value={true}
          type="radio"
          name="residential"
          id="resident"
          />


        <label className='form-label'>غیر مقیم</label>
        <input
        onChange={onChangeHandler}
        autoComplete='off'
  // checked={teachersForm.residential.nonResident}
        value={false}
        required
        type="radio"
        name="residential"
        id="nonResident"
        />
        </div>

        <label className='form-label mt-3' htmlFor="studentPosition">درجہ</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="text"
            onChange={onChangeHandler}
            name="studentPosition"
            id="studentPosition"
            value={studentsForm.studentPosition}/>

        </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default StudentsForm;
