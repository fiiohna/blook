import React from "react";
import { useEffect } from "react";
import "./bookingconfirm.scss";

const BookingFailed = () => {
return(
    <div className='bookingcontainer'>
        <div className='card'>
          <h1 className='title'>Booking Failed</h1>
          <div className='icon-container'>
            <i className='fas fa-check-circle'></i>
          </div>
          <div className='message-container'>
            <p className='message'>Your booking has failed.</p>
            <p className='message'>Please try again.</p>
          </div>
          
        </div>
      </div>
)
}

export default BookingFailed