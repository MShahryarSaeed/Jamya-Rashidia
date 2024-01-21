import React, { useState } from 'react';
import StudentsForm from '../Forms/StudentsForm';
import TeachersForm from '../Forms/TeachersForm';
import EmployersForm from '../Forms/EmployersForm';
import './Pages.css';

const Add = () => {
  const [activeTab, setActiveTab] = useState('students');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='row'>
        <div className='col-2 aside-bar'>
          <div className='tabs-btns'>
            <button onClick={() => handleTabChange('students')}>طلبہ</button>
            <button onClick={() => handleTabChange('teachers')}>استاتذہ</button>
            <button onClick={() => handleTabChange('employers')}>ملازمین</button>
          </div>
        </div>
        <div className='col-10'>
          <div className='container'>
            {activeTab === 'students' && <StudentsForm />}
            {activeTab === 'teachers' && <TeachersForm />}
            {activeTab === 'employers' && <EmployersForm />}
          </div>
        </div>
      </div>



    </>
  );
};

export default Add;
