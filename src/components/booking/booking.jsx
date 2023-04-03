import React, { useState, useEffect } from "react";
import "./booking.css";
import { Form, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function Booking({ activity }) {
    const { fees } = activity
    const [bookingActivity, setBookingActivity] = useState([]);
    const activityBookId = localStorage.getItem("activityBookId");

    useEffect(() => {
        fetch(`http://localhost:5001/activity/${activityBookId}`)
        .then((response) => response.json())
        .then((data) => {
            setBookingActivity(data.data);
        })
    }, []);

    function activatecheckout() {
        return(
            fetch('http://localhost:5006/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "customer_id": "1",
                        "activity_id": "1",
                        "payment_amount": "100",
                        "total_pax" : "3",
                        "datetime" : "2022-12-31"
                    })
                })
                .then(res => res.json())
                .then(data => {
                    window.location.replace(data.url)
                })

        )
    }
    

    return (
        
            <div className='booking'>
                
            <div className = "booking__top d-flex align-items-scenter justify-content-between">
            <h1 className="bookingHeader">{bookingActivity.name}</h1>
            </div>
           
            <div className = "booking__form">
                <h5>Booking Information</h5>
            
            <Form className = "booking__info-form">
                <Form.Group className="mb-3" id="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" id="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" required/>
                </Form.Group>

                <Form.Group className="mb-3" id="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" id="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Enter your gender" />
                </Form.Group>

                <Form.Group className="mb-3" id="c_address">
                    <Form.Label>Your address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>
                <Form.Group className="mb-3" id="billing_address">
                    <Form.Label>Your billing address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your billing address" />
                </Form.Group>

                <Form.Group className="mb-3" id="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number" />
                </Form.Group>

                <Form.Group className="mb-3" id="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Enter quantity" />
                </Form.Group>
    
            </Form>
            </div>
            <div className = "booking__bottom">
                <ListGroup>
                    <ListGroupItem className = "border-0 px-0 total">
                        <h5>Total</h5>
                        <span>${fees}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button onClick={activatecheckout} className = "btn primary__btn w-100 mt-4">Checkout</Button>
            </div>
        </div>
       
    )
}