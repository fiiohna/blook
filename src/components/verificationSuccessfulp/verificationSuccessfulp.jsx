import React from 'react';
import { useNavigate } from 'react-router-dom';
import './createReviewSuccessfulp.css'; // import the SCSS file

const VerificationSuccessfulp = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate("/profile");
    };

  return (
    <div className='bookingcontainer'>
            <div className='card'>
              <h1 className='title'>Verification Successful!</h1>
              <div className='icon-container'>
                <i className='fas fa-check-circle'></i>
              </div>
              <div className='message-container'>
                <p className='message'>Click <a href="/">here</a> to head to the home page.</p>
              </div>
              
            </div>
          </div>
  )
}

export default VerificationSuccessfulp;