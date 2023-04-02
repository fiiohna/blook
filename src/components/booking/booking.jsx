import React, {useState} from "react";
import "./booking.css";
import { Form, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function Booking({ activity }) {
    const { fees } = activity
    

    return (
        
            <div className='booking'>
            <div className = "booking__top d-flex align-items-scenter justify-content-between">
                <h1>Booking</h1>
                <h3>${fees}</h3>
                {fees}
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
                    <Form.Control type="text" placeholder="Enter phone number" />
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

                <Button className = "btn primary__btn w-100 mt-4">Book Now</Button>
            </div>
        </div>
        
        
    )
}