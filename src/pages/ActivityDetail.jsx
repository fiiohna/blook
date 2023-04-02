import React from 'react';
import { useParams } from 'react-router-dom';
import activities from "../assets/data/activities"
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
// import Col from 'react-bootstrap/Col';
import Booking from '../components/booking/booking';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import "../components/activityDetail/activityDetail.css"
import { useState, useEffect } from 'react';

export default function ActivityDetail() {
    const activityBookId = localStorage.getItem('activityBookId')
    const [bookingActivity, setBookingActivity] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5001/activity/${activityBookId}`)
        .then((response) => response.json())
        .then((data) => {
            setBookingActivity(data.data);
            console.log(data.data);
        })
        

    }, []);

    // this is a static data, laer we will need to use API to load our data from database
    // const activity = activities.find(activity => activities.id === id)

    // destructure properties from activity object
    const { imgSrc, name, address, price, description } = bookingActivity;

    // const {totalRating, avgRating} = calculateAvgRating

    

    // This component will display the details of the activity
    return (
        <section style={{ paddingTop: "100px" }}>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="activityContent">
                            <img src={imgSrc} alt="image" />

                            <div className="activityInfo">
                                <h4 className="name">{name}</h4>
                                <span className="continent flex"><HiOutlineLocationMarker className='icon' /></span>
                                <span className="name">{address}</span>

                                <div className="price flex">
                                    <div className="price">
                                        <h3>SGD{price}</h3>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                {/* Tour Reviews */}


                            </div>
                        </div>

                    </Col>


                    <Col lg="4">

                        <Booking activity={bookingActivity}></Booking>


                    </Col>
                </Row>
            </Container>
        </section>


    );
};    