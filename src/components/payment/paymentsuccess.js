import React from 'react';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  return (
    <div className='container'>
      <div className='card'>
        <h1 className='title'>Payment Successful</h1>
        <div className='icon-container'>
          <i className='fas fa-check-circle'></i>
        </div>
        <div className='message-container'>
          <p className='message'>Thank you for your payment.</p>
          <p className='message'>Your transaction has been completed successfully.</p>
        </div>
        <button className='button'>Back to Home</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
