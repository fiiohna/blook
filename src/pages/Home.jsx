import React, { useState, useEffect } from 'react';
import Homep from '../components/homep/homep';
import Main from '../components/main/main';
import Recommendation from "../components/recommendation/recommendation";
import { useNavigate } from "react-router-dom";


export default function Home() {

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    const id = localStorage.getItem("user_id");
    const navigate = useNavigate();
    useEffect(() => {
        if (id === null) {
            navigate("/login/signin");
        }
        console.log(id);
    },[]);


    return (
        <>
            <Homep></Homep>
            <Recommendation></Recommendation>
            <Main></Main>      
        </>
    )
}