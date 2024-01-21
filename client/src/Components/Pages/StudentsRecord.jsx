import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Pages.css'
import { useAuthContext } from '../../hooks/useAuthContext';

const StudentsRecord = () => {
  const {user}=useAuthContext();
  const [studentsData, setStudentsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/viewStudents', {
      headers: {
        'Authorization': `Bearer ${user.accessToken}`
      }
    })
    .then(response => {
      setStudentsData(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, [user]);
  

 
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

 
  const filteredStudents = studentsData.filter(student =>
    student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
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

     <div className="student-table">
      
     <table className='table table-bordered mt-3'>
       
       <thead>
         <tr>
           <td>نام</td>
           <td>والد کا نام</td>
           <td>رقم الجامعہ</td>
           <td>طالب کا شناختی کارڈ</td>
           <td>تصویر</td>
           <td>تاریخ پیدائش</td>
           <td>سرپرست کا نام</td>
           <td>سرپرست کا شناختی کارڈ</td>
           <td>والدکاپیشہ</td>
           <td>موجودہ پتہ</td>
           <td>رابطہ طالب علم</td>
           <td>رابطہ سرپرست</td>
           <td>تاریخ داخلہ قمری</td>
           <td>تاریخ داخلہ شمسی</td>
           <td>تجدید داخلہ</td>
           <td>رہائش</td>
           <td>سابقہ مدرسے کا نام</td>
           <td>درجہ</td>
           <td>تعلیمی و اخلاقی کیفیت</td>
           
         </tr>
       </thead>

       {/* Table body with filtered data */}
       <tbody>
         {filteredStudents.map((student, index) => (
           <tr key={index}>
             <td>{student.studentName}</td>
             <td>{student.studentFatherName}</td>
             <td>{student.jamiaMoney}</td>
             <td>{student.studentIdCard}</td>
             <td>{student.studentPic}</td>
             <td>{new Date(student.studentDOB).toLocaleDateString()}</td>
             <td>{student.guardianName}</td>
             <td>{student.guardianIdCard}</td>
             <td>{student.fatherOccupasion}</td>
             <td>{student.currentAddress}</td>
             <td>{student.studentContact}</td>
             <td>{student.guardianContact}</td>
             <td>{student.contemporaryEducation}</td>
             <td>{student.guardianContact}</td>
              <td>{new Date(student.dateEntryLunar).toLocaleDateString()}</td>
              <td>{new Date(student.solarEntryDate).toLocaleDateString()}</td>
             <td>{student.renewalAdmission}</td>
             <td>{student.residential ? 'مقیم' : 'غیر مقیم'}</td>
             <td>{student.oldSchool}</td>
             <td>{student.molarity}</td>
             <td>{student.studentPosition}</td>
            
           </tr>
         ))}
       </tbody>
     </table>
     </div>
    </>
  );
};

export default StudentsRecord;
