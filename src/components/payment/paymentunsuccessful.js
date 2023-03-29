import React from 'react';
import './PaymentUnsuccessful.css';

const PaymentSuccess = () => {
  return (
    <div className='container'>
      <div className='card'>
        <h1 className='title'>Payment Failed</h1>
        <div className='icon-container'>
          <i className='fas fa-check-circle'></i>
        </div>
        <div className='message-container'>
          <p className='message'>Sorry, your payment was not successful.</p>
          <p className='message'>Please try again or contact customer support for assistance.</p>
        </div>
        <button className='button'>Try Again</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <link rel="stylesheet" href="paymentunsuccessful.css">
// </head>
// <body>
//   <div class='container'>
//     <div class='card'>
//       <h1 class='title'>Payment Failed</h1>
//       <div class='icon-container'>
//         <i class='fas fa-check-circle'></i>
//       </div>
//       <div class='message-container'>
//         <p class='message'>Sorry, your payment was not successful.</p>
//         <p class='message'>Please try again or contact customer support for assistance.</p>
//       </div>
//       <button class='button'>Try Again</button>
//     </div>
//   </div>
// </body>
// </html>

