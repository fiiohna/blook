import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
// import Col from 'react-bootstrap/Col';
import Booking from '../components/booking/booking';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import "../components/activityDetail/activityDetail.css"
import { useState, useEffect } from 'react';
import Rating from '../components/rating/rating';
import { useNavigate } from "react-router-dom";

export default function ActivityDetail() {
    const activityBookId = localStorage.getItem('activityBookId')
    const navigate = useNavigate();
    const [bookingActivity, setBookingActivity] = useState([])
    const [bookingReviews, setBookingReviews] = useState([])
    const [customer, setCustomers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/api/activity/${activityBookId}`)
        .then((response) => response.json())
        .then((data) => {
            setBookingActivity(data.data);
            // console.log(data.data);
        })

        fetch(`http://localhost:8000/api/review/${activityBookId}`)
        .then((response) => response.json())
        .then((data) => {
            setBookingReviews(data.data);
            console.log(data.data);
        })
        

    }, []);

    function handleToBooking() {
        navigate('/bookingdetail')
    };

    // this is a static data, laer we will need to use API to load our data from database
    // const activity = activities.find(activity => activities.id === id)

    // destructure properties from activity object
    const { name, address, price, description } = bookingActivity;

    // const {totalRating, avgRating} = calculateAvgRating

    

    // This component will display the details of the activity
    return (
        <section style={{ paddingTop: "100px" }}>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="activityContent">

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
                                    
                    </Col>
                </Row>
            </Container>
            <Container>
                {
                    bookingReviews.map((review)=>{
                        return (
                            <li className="row grid">
                                <Rating rating={review.rating} review_desc={review.review_text} date={review.created} firstname={review.customer_firstname} lastname={review.customer_lastname} activity_name={review.activity_name}/>
                            </li>
                        )
                    })
                }
            </Container>
            <Container>
            <button onClick={handleToBooking} className='btn bookingbtn'>Book Now</button>
            </Container>
            
        </section>


    );
};    