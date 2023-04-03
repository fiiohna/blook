import React from "react";
import { useState, useEffect } from 'react';
import VerificationSuccessfulp from "../components/verificationSuccessfulp/verificationSuccessfulp";
import { useNavigate } from "react-router-dom";

export default function VerificationSuccessful() {
    const id = localStorage.getItem("user_id");
    const navigate = useNavigate();
    useEffect(() => {
        if (id === null) {
            navigate("/login/signin");
        }
    },[]);

    return (
        <>
        <VerificationSuccessfulp></VerificationSuccessfulp>
        </>
    )
}