import React from "react";
import "./booking.css";
import { Form } from "react-bootstrap";

export default function Booking({ activity }) {
    const { fees } = activity

    return (
        
        <div className='booking'>
            <div className = "booking__top d-flex align-items-scenter justify-content-between">
                <h3>Booking Price</h3>
                {fees}
            </div>
           
            <div className = "booking__form">
                <h5>Information</h5>
            
            <Form className = "booking__info-form">
                <Form.Group className="mb-3" id="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" required/>
                </Form.Group>

                <Form.Group className="mb-3" id="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" id="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>

                <Form.Group className="mb-3" id="c_address">
                    <Form.Label>Your address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>
                <Form.Group className="mb-3" id="billing_address">
                    <Form.Label>Your billing address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your billing address" />
                </Form.Group>
            </Form>
            </div>
        </div>
    )
}