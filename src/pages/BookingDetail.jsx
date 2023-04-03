import React from "react";
import { useEffect } from "react";
import BookingDetail from "../components/bookingDetail/bookingDetail";
import { useNavigate } from "react-router-dom";

export default function BookingDetails() {
    const id = localStorage.getItem("user_id");
    const navigate = useNavigate();
    useEffect(() => {
        if (id === null) {
            navigate("/login/signin");
        }
    },[]);

    return (
        <>
        <BookingDetail></BookingDetail>
        </>
    )
}