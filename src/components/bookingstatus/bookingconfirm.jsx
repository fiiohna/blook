
import React from "react";
import { useEffect } from "react";
import "./bookingconfirm.scss";

const BookingConfirmation = () => {
    // var id = 1;
    // const [paymentStatus, setPaymentStatus] = useState([]);
    // useEffect(()=>{
    //     fetch ('http://127.0.0.1:5500/blook/index_vue.html')
    //     .then((response)=> setPaymentStatus(response.data))
    //     .then((details)=>{
    //         setBookingDetails(details.data)
    //     })
    //     .catch(error=>console.log(error));
    // const [paymentStatus, setPaymentStatus] = useState([]);
    // useEffect(() =>{
    //     fetch('')
    // })
    // }
    
    // if(details.data.status == "YES"){
        return (
            <div className='container'>
            <div className='card'>
              <h1 className='title'>Booking Confirmed</h1>
              <div className='icon-container'>
                <i className='fas fa-check-circle'></i>
              </div>
              <div className='message-container'>
                <p className='message'>Your booking has been confirmed.</p>
                <p className='message'>Please check your email for the booking confirmation.</p>
              </div>
              
            </div>
          </div>
        )
        
    // }
    
            
       
}
  
;

export default BookingConfirmation;