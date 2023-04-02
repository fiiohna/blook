import React from "react";
import "./booking.css";
import { Form } from "react-bootstrap";

export default function Booking({ activity }) {
    const { fees } = activity

    return (
        <div className='booking'>
            Booking Price
            {fees}

            <Form>
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
                    <Form.Control type="number" placeholder="Enter phone number" />
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
    )
}