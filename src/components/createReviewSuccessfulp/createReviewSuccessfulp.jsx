import React from 'react';
import { useNavigate } from 'react-router-dom';
import './createReviewSuccessfulp.css'; // import the SCSS file

const CreateReviewSuccessfulp = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate("/profile");
    };

  return (
    <div className="createReviewDone">
        <h1>Thank you for your review! Please click below to head back to your profile page.</h1>
        <p><button onClick={handleSubmit} className='btn'>Back to Profile Page</button></p>
    </div>
  )
}

export default CreateReviewSuccessfulp;