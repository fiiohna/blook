import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VendorVerify() {

  const id = localStorage.getItem("user_id");
  const navigate = useNavigate();
  const [bookingValue, setBookingValue] = useState();
  const [bookingStatus, setBookingStatus] = useState();

  useEffect(() => {
    if (id != 5) {
      navigate("/nopermission");
    }
  }, []);

  const handleSubmitBooking = () => {
    fetch("http://localhost:5030/verify_booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "booking_id": bookingValue,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.code == 200) {
        setBookingStatus(true)
      }
      else{
        setBookingStatus(false)
      }
    });
      
    // console.log(bookingValue);
  };

    return (
        
            <div style = {{padding: "100px", textAlign: "center"}} >
                <b style = {{fontSize: "100px"}}>Verify Booking</b>
      <input onChange={(e) => {setBookingValue(e.target.value)}} value={bookingValue}
        type = "number" style={{ height: '400px', width: '100%', fontSize: "200px"}}
        // value={text}
        // onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmitBooking}  className='btn bookingbtn' style = {{fontSize: "50px"}} >Submit</button>
      <p>{
        bookingStatus ? "Booking Verified" : "Booking Already Redeemed Previously"
        }
      </p>
    </div>
       
    )
}