import React, { useState, useEffect } from 'react'
import './main.css'
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import { NavLink, Outlet, useNavigate  } from "react-router-dom";

import aos from 'aos'
import 'aos/dist/aos.css'

// icons
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaSearch } from 'react-icons/fa';

const Main = () => {
    // const [activities, setActivities] = useState(ActivitiesData)
    const [activities, setActivities] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    localStorage.getItem("activityBookId")
    const navigate = useNavigate();

    useEffect(() => {
        aos.init({ duration: 1000 })
        fetch('http://localhost:5001/activity')
        .then((response) => response.json())
        .then((data) => {
            setActivities(data.data.activities);
        });
    }, [])

    useEffect(() => {
        if (searchQuery !== '') {
        const filteredActivities = activities.filter((activity) =>
          activity.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setActivities(filteredActivities);
        }else {
            fetch('http://localhost:5001/activity')
            .then((response) => response.json())
            .then((data) => {
                setActivities(data.data.activities);
        });
        }
    
    
    }, [searchQuery]);

    const handleBook = (e) => {
        localStorage.setItem("activityBookId", e.target.value);
        navigate("/activitydetail");
        console.log(e.target.value);
    };
    
    return (
        <section className="main container section">
            <div className="activitiesSearchItem">
                <span style={{marginRight: "20px"}}><FaSearch/></span>
                <input type="text" placeholder="What do you want to do?" className="activitiesSearchText" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
            </div>

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    See All Activities
                </h3>
            </div>

            <div className="secContent grid">
                {
                    activities.map((activity) => {
                        return (
                            <div key={activity.id} data-aos="fade-up" className="singleDestination">
                                {/* it will return single id from the map array */}
                                <div className="cardInfo">
                                    <h4 className="name">{activity.name}</h4>
                                    <span className="continent flex"><HiOutlineLocationMarker className='icon' /><span className="name">{activity.address}</span></span>
                                    
                                    <div className="price flex">
                                        <div className="price">
                                            <h3>SGD {activity.price}</h3>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{activity.description}</p>
                                    </div>

                                    <button onClick={handleBook} value={activity.id} className="btn flex">DETAILS/BOOK <HiOutlineClipboardCheck className='icon' /></button>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Outlet />
        </section>
    )
}

export default Main