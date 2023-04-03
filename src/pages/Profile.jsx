import React from "react";
import { useState, useEffect } from 'react';
import ProfilePage from "../components/profilep/profilep";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const id = localStorage.getItem("user_id");
    const navigate = useNavigate();
    useEffect(() => {
        if (id === null) {
            navigate("/login/signin");
        }
    },[]);
    return (
        <ProfilePage></ProfilePage>
    )
}