import React from "react";

export default function VendorVerify() {
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