import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VendorVerify() {

  const id = localStorage.getItem("user_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (id === null || id !== 5) {
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
        booking_id: 1,
      }),
    })
  };

    return (
        
            <div style = {{padding: "100px", textAlign: "center"}} >
                <b style = {{fontSize: "100px"}}>Verify Booking</b>
      <input 
        type = "number" style={{ height: '400px', width: '100%', fontSize: "200px"}}
        // value={text}
        // onChange={(e) => setText(e.target.value)}
      />
      <button className='btn bookingbtn' style = {{fontSize: "50px"}}>Submit</button>
    </div>
       
    )
}