import React from "react";
import { useState, useEffect } from 'react';
import CouponPaymentp from "../components/couponPaymentp/couponPaymentp";
import { useNavigate } from "react-router-dom";

export default function CouponPayment() {
    const id = localStorage.getItem("user_id");
    const navigate = useNavigate();
    useEffect(() => {
        if (id === null) {
            navigate("/login/signin");
        }
    },[]);

    return (
        <>
        <CouponPaymentp></CouponPaymentp>
        </>
    )
}