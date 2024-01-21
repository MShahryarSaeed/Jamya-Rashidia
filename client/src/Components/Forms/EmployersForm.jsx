import React, { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';

const EmployersForm = () => {

  const {user}=useAuthContext();
  
  const [employersForm, setEmployersForm] = useState({
    employersName: '',
    employersFatherName: '',
    employersPosition: '',
    employersDOB: '',
    appointmentDate: '',
    employersIdCard: '',
    currentAddress: '',
    contact: '',
    residential: {
      resident: false,
      nonResident: false,
    },
    advertising: '',
    Email: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setEmployersForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('Form Data:', employersForm);

      const response = await axios.post(
        'http://localhost:5000/api/addEmployer',
        employersForm,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.accessToken}`
          }
        }
      );

      console.log('Response Data:', response.data);

      // Reset the form after successful submission
      setEmployersForm({
        employersName: '',
        employersFatherName: '',
        employersPosition: '',
        employersDOB: '',
        employersIdCard: '',
        currentAddress: '',
        contact: '',
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
        <h1 className='text-center mb-4'>ملازمین کا فارم</h1>
        <div className="row">
          <div className='col-6'>

            <label className='form-label' htmlFor="employeeName">ملازم کا نام</label>
            <input
              className='form-control'
              required
              autoComplete='off'
              type="text"
              onChange={onChangeHandler}
              name="employersName"
              id="employersName"
              value={employersForm.employersName} />

            <label className='form-label' htmlFor="employeePosition">عہدہ</label>
            <input
              className='form-control'
              required
              autoComplete='off'
              type="text"
              onChange={onChangeHandler}
              name="employersPosition"
              id="employeePosition"
              value={employersForm.employersPosition} />

            <label className='form-label' htmlFor="employeeDOB">تاریخ پیدائش</label>
            <input
              className='form-control'
              required
              autoComplete='off'
              type="date"
              onChange={onChangeHandler}
              name="employersDOB"
              id="employeeDOB"
              value={employersForm.employersDOB} />

            <label className='form-label' htmlFor="currentAddress">موجودہ پتہ</label>
            <input
              className='form-control'
              required
              autoComplete='off'
              type="text"
              onChange={onChangeHandler}
              name="currentAddress"
              id="currentAddress"
              value={employersForm.currentAddress} />

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
              id="Email"
              value={employersForm.Email} />

          </div>

          <div className='col-6'>

            <label className='form-label' htmlFor="employeeFatherName">والد کا نام</label>
            <input
              className='form-control'
              required
              autoComplete='off'
              type="text"
              onChange={onChangeHandler}
              name="employersFatherName"
              id="employeeFatherName"
              value={employersForm.employersFatherName} />

            <label className='form-label' htmlFor="employeeIdCard">شناختی کارڈ نمبر</label>
            <input
              className='form-control'
              required
              autoComplete='off'
              type="number"
              onChange={onChangeHandler}
              name="employersIdCard"
              id="employeeIdCard"
              value={employersForm.employersIdCard} />

            <label className='form-label' htmlFor="appointmentDate">تاریخ تقرری</label>
            <input
              className='form-control'
              required
              autoComplete='off'
              type="date"
              onChange={onChangeHandler}
              name="appointmentDate"
              id="appointmentDate"
              value={employersForm.appointmentDate} />

            <label className='form-label' htmlFor="contact">موبائل نمبر</label>
            <input
              className='form-control'
              required
              autoComplete='off'
              type="number"
              onChange={onChangeHandler}
              name="contact"
              id="contact"
              value={employersForm.contact} />

            <label className='form-label' htmlFor="advertising">مشاہرہ</label>
            <input
              className='form-control'
              required
              autoComplete='off'
              type="text"
              onChange={onChangeHandler}
              name="advertising"
              id="advertising"
              value={employersForm.advertising} />

          </div>
        </div>



        <button onSubmit={handleSubmit} className='submit-btn mt-4' type="submit">Submit</button>
      </form>
    </>
  );
};
export default EmployersForm;
