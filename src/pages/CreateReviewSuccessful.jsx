import React from "react";
import { useState, useEffect } from 'react';
import CreateReviewSuccessfulp from "../components/createReviewSuccessfulp/createReviewSuccessfulp";
import { useNavigate } from "react-router-dom";

export default function CreateReviewSuccessful() {
    const id = localStorage.getItem("user_id");
    const navigate = useNavigate();
    useEffect(() => {
        if (id === null) {
            navigate("/login/signin");
        }
    },[]);

    return (
        <>
        <CreateReviewSuccessfulp></CreateReviewSuccessfulp>
        </>
    )
}