import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const TeachersRecord = () => {
  const {user}=useAuthContext();

  const [teachersData, setTeachersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/viewTeachers', {
      headers: {
        'Authorization': `Bearer ${user.accessToken}`
      }
    })
    .then(response => {
      setTeachersData(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, [user]);
  


  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const filteredTeachers = teachersData.filter(teacher =>
    teacher.teacherName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search input */}
      <input
        type="text"
        placeholder=" نام سے تلاش کریں"
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="Search-bar"
      />


      <table className='table table-bordered mt-3'>

        <thead>
          <tr>
            <th>استاد کا نام</th>
            <th>والد کا نام</th>
            <th>عہدہ</th>
            <th>شناختی کارڈ نمبر</th>
            <th>تاریخ پیدائش</th>
            <th>تاریخ تقرری</th>
            <th>موجودہ پتہ</th>
            <th>موبائل نمبر</th>
            <th>مشاہرہ</th>
            <th>ای میل آئی ڈی</th>
            <th>Res</th>
          </tr>
        </thead>

        {/* Table body with filtered data */}
        <tbody>
          {filteredTeachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.teacherName}</td>
              <td>{teacher.teacherFatherName}</td>
              <td>{teacher.teacherPosition}</td>
              <td>{teacher.teacherIdCard}</td>
              <td>{new Date(teacher.teacherDOB).toLocaleDateString()}</td>
              <td>{new Date(teacher.appointmentDate).toLocaleDateString()}</td>
              <td>{teacher.currentAddress}</td>
              <td>{teacher.contact}</td>
              <td>{teacher.advertising}</td>
              <td>{teacher.email}</td>
              <td>{teacher.residential ? 'مقیم' : 'غیر مقیم'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TeachersRecord;
