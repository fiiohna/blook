import React from 'react';
import { useNavigate } from 'react-router-dom';
import './noPermissionp.css';

const NoPermissionp = () => {
    const navigate = useNavigate();

  return (
    <div className='bookingcontainer'>
            <div className='card'>
              <h1 className='title'>No Permission</h1>
              <div className='icon-container'>
                <i className='fas fa-check-circle'></i>
              </div>
              <div className='message-container'>
                <p className='message'>You have no permission to view this page</p>
                <p className='message'>Click <a href="/">here</a> to head to the home page.</p>
              </div>
              
            </div>
          </div>
  )
}

export default NoPermissionp;