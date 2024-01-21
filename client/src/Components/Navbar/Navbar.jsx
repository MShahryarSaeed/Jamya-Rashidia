import React from 'react';
import './Navbar.css'

import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';

const Navbar = () => {

  const { user } = useAuthContext();
  
  const{logout}=useLogout();

  const logoutHandler=()=>{

    logout();

  }

  return (
    <>
      <header>

        <nav>

          <ul className='d-flex gap-5'>

            {user && (
              <div style={{display:'flex', gap:'5px'}}>
                <li className='list-unstyled'><Link className='nav-link' to='/'>اندرج</Link></li>
                <li className='list-unstyled'><Link className='nav-link' to='/search'>تلاش</Link></li>
                <li className='list-unstyled'><Link className='nav-link' to='/students'>طلبہ کا ریکارڈ</Link></li>
                <li className='list-unstyled'><Link className='nav-link' to='/teachers'>استاتذہ کاریکارڈ</Link></li>
                <li className='list-unstyled'><Link className='nav-link' to='/labhours'>ملازمین کاریکارڈ</Link></li>
                <button style={{padding:'5px', color:' rgba(91, 8, 136, 1)', border:'none' }} onClick={logoutHandler}> Logout</button>
              </div>
            )}

            {!user && (
              <div style={{display:'flex', gap:'5px'}}>
                <li className='list-unstyled'><Link className='nav-link' to='/signup'>Signup</Link></li>
                <li className='list-unstyled'><Link className='nav-link' to='/login'>Login</Link></li>
              </div>
            )}





          </ul>

        </nav>

      </header>
    </>
  )
}

export default Navbar