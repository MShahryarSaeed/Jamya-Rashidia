import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const EmployersRecord = () => {
  const{user}=useAuthContext();
  const [employersData, setEmployersData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/viewEmployers', {
      headers: {
        'Authorization': `Bearer ${user.accessToken}`
      }
    })
    .then(response => {
      setEmployersData(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, [user]);
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmployers = employersData.filter(employer =>
    employer.employersName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <label>Search by Name: </label>
        <input type="text" value={searchQuery} onChange={handleSearchChange} />
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father's Name</th>
            <th>Position</th>
            <th>DOB</th>
            <th>ID Card</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Appointment Date</th>
            <th>Advertising</th>
            <th>Email</th>
            <th>Residential</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployers.map((employer, index) => (
            <tr key={index}>
              <td>{employer.employersName}</td>
              <td>{employer.employersFatherName}</td>
              <td>{employer.employersPosition}</td>
              <td>{new Date(employer.employeeDOB).toLocaleDateString()}</td>
              <td>{employer.employersIdCard}</td>
              <td>{employer.currentAddress}</td>
              <td>{employer.contact}</td>
              <td>{new Date(employer.appointmentDate).toLocaleDateString()}</td>
              <td>{employer.advertising}</td>
              <td>{employer.Email}</td>
              <td>{employer.residential ? 'مقیم' : 'غیر مقیم'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployersRecord;
