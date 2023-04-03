import React from "react";
import { useState, useEffect } from 'react';
import EditReviewp from "../components/editReviewp/editReviewp";
import { useNavigate } from "react-router-dom";

export default function EditReview() {
    const id = localStorage.getItem("user_id");
    const navigate = useNavigate();
    useEffect(() => {
        if (id === null) {
            navigate("/login/signin");
        }
    },[]);
    return (
        <>
        <EditReviewp></EditReviewp>
        </>
    )
}