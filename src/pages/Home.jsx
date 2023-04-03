import React, { useState } from 'react';
import Homep from '../components/homep/homep';
import Main from '../components/main/main';
import Recommendation from "../components/recommendation/recommendation";


export default function Home() {
    return (
        <>
            <Homep></Homep>
            <Recommendation></Recommendation>
            <Main></Main>      
        </>
    )
}