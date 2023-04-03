import React, { useEffect, useState } from 'react'
import './recommendation.css'
import { NavLink, Outlet, useNavigate  } from "react-router-dom";

import aos from 'aos'
import 'aos/dist/aos.css'

// icons
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

export default function Recommendation() {

    const [recommended, setRecommended] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        aos.init({ duration: 2000 })
        fetch('http://localhost:5100/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data);
            setRecommended(data.data);
        });
    }, [])

    const handleBook = (e) => {
        localStorage.setItem("activityBookId", e.target.value);
        navigate("/activitydetail");
        // console.log(e.target.value);
    };


    return (
        <section className='recommendation section container'>
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <div className="secTitle">
                            <h3 data-aos="fade-right" className="title">
                                Most Popular Activities
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="secContent grid">

                    {
                        recommended.map(({ id, imgSrc, name, address, price, description }) => {
                            return (

                                <div key={id} className="singleDestination">
                                    <div className="cardInfo">
                                        <h4 className="name">{name}</h4>
                                        <span className="continent flex"><HiOutlineLocationMarker className='icon' /><span className="name">{address}</span></span>
                                        

                                        <div className="price flex">
                                            <div className="price">
                                                <h3>SGD {price}</h3>
                                            </div>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>

                                        <button onClick={handleBook} value={id} className='btn flex'>
                                            DETAILS/BOOK<HiOutlineClipboardCheck className='icon' />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}