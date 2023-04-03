import React from "react";
import { useState, useEffect } from 'react';
import CreateReviewp from "../components/createReviewp/createReviewp";
import { useNavigate } from "react-router-dom";

export default function CreateReview() {
    const id = localStorage.getItem("user_id");
    const navigate = useNavigate();
    useEffect(() => {
        if (id === null) {
            navigate("/login/signin");
        }
    },[]);
    return (
        <>
        <CreateReviewp></CreateReviewp>
        </>
    )
}