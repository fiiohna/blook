import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Booking from '../booking/booking';
import './bookingDetail.css'; // import the SCSS file

const BookingDetail = () => {
    // create react hook to add scroll animation
    const activityBookId = localStorage.getItem("activityBookId");
    const [bookingActivity, setBookingActivity] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5001/activity/${activityBookId}`)
        .then((response) => response.json())
        .then((data) => {
            setBookingActivity(data.data);
            console.log(data.data);
        })
        

    }, []);

    return (
        <Booking activity={bookingActivity}></Booking>
    )
}

export default BookingDetail