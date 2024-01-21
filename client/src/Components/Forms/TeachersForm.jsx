import React, { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';

const TeachersForm = () => {

  const{user}=useAuthContext();
  const [teachersForm, setTeachersForm] = useState({
    teacherName: '',
    teacherFatherName: '',
    teacherPosition: '',
    teacherDOB: '',
    appointmentDate: '',
    teacherIdCard:'',
    currentAddress: '',
    contact: '',
    residential: {
      resident:false,
      nonResident: false,
    },
    advertising: '',
    Email: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTeachersForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('Form Data:', teachersForm);

      const response = await axios.post(
        'http://localhost:5000/api/addTeacher',
        teachersForm,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.accessToken}`
          }
        }
      );

      console.log('Response Data:', response.data);

      // Reset the form after successful submission
      setTeachersForm({
        teacherName: '',
        teacherFatherName: '',
        teacherPosition: '',
        teacherDOB:'',
        teacherIdCard:'',
        currentAddress:'',
        contact:'',
        appointmentDate: '',
        advertising: '',
        Email: '',
  
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };
   
  
  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        
      <h1 className='text-center mb-4'>استاتذہ کا فارم</h1>
        <div className="row">
        <div className='col-6'>

          <label className='form-label' htmlFor="teacherName">استاد کا نام</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="text"
            onChange={onChangeHandler}
            name="teacherName"
            id="teacherName"
            value={teachersForm.teacherName}/>

          <label className='form-label' htmlFor="teacherPosition">عہدہ</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="text"
            onChange={onChangeHandler}
            name="teacherPosition"
            id="teacherPosition"
            value={teachersForm.teacherPosition}/>

          <label className='form-label' htmlFor="teacherDOB">تاریخ پیدائش</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="date"
            onChange={onChangeHandler}
            name="teacherDOB"
            id="teacherDOB"
            value={teachersForm.teacherDOB}/>

          <label className='form-label' htmlFor="currentAddress">موجودہ پتہ</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="text"
            onChange={onChangeHandler}
            name="currentAddress"
            id="currentAddress"
            value={teachersForm.currentAddress}/>

          <div className='d-flex gap-3'>
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

          <label className='form-label mt-5' htmlFor="email">ای میل آئی ڈی</label>
          <input
            className='form-control'
            required
            autoComplete='off'
            type="email"
            onChange={onChangeHandler}
            name="Email"
            id="email"
            value={teachersForm.Email}/>
            
        </div>

        <div className='col-6'>

          <label className='form-label' htmlFor="teacherFatherName">والد کا نام</label>
          <input
           className='form-control'
           required
           autoComplete='off'
           type="text"
           onChange={onChangeHandler}
           name="teacherFatherName"
           id="teacherFatherName"
           value={teachersForm.teacherFatherName}/>
           
          <label className='form-label' htmlFor="teacherIdCard">شناختی کارڈ نمبر</label>
          <input
           className='form-control'
           required
           autoComplete='off'
           type="number"
           onChange={onChangeHandler}
           name="teacherIdCard"
           id="teacherIdCard"
           value={teachersForm.teacherIdCard}/>

          <label className='form-label' htmlFor="appointmentDate">تاریخ تقرری</label>
          <input
           className='form-control'
           required
           autoComplete='off'
           type="date"
           onChange={onChangeHandler}
           name="appointmentDate"
           id="appointmentDate"
           value={teachersForm.appointmentDate}/>

          <label className='form-label' htmlFor="contact">موبائل نمبر</label>
          <input
           className='form-control'
           required
           autoComplete='off'
           type="number"
           onChange={onChangeHandler}
           name="contact"
           id="contact"
           value={teachersForm.contact}/>

          <label className='form-label' htmlFor="advertising">مشاہرہ</label>
          <input
           className='form-control'
           required
           autoComplete='off'
           type="text"
           onChange={onChangeHandler}
           name="advertising"
           id="advertising"
           value={teachersForm.advertising}/>

        </div>
        </div>



        <button  className='submit-btn mt-4' type="submit">Submit</button>
      </form>
    </>
  );
};

export default TeachersForm;
