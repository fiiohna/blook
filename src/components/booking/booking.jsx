import React, { useState, useEffect } from "react";
import "./booking.css";
import { MdRedeem } from "react-icons/md";
import { Form, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function Booking({ activity }) {
    const id = localStorage.getItem("user_id");
    const [bookingActivity, setBookingActivity] = useState([]);
    const [myCoupons, setMyCoupons] = useState([]);
    const activityBookId = localStorage.getItem("activityBookId");
    const [customer, setCustomer] = useState([]);
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState([0]);
    const [date, setDate] = useState([]);
    const [pricePerPax, setPricePerPax] = useState([]);
    

    

    useEffect(() => {
        fetch(`http://localhost:5001/activity/${activityBookId}`)
        .then((response) => response.json())
        .then((data) => {
            setBookingActivity(data.data);
            setPricePerPax(data.data.price);
        })

        fetch(`http://localhost:5013/coupon/linked/${id}`)
            .then((response) => response.json())
            .then((details) => {
                if (details.data.coupon.length == 0){
                    setMyCoupons([]);
                }
                else{
                    setMyCoupons(details.data.coupon);
                    // console.log(details.data.coupon);
                }
                console.log(details.data.coupon);

            });    
        
        fetch(`http://localhost:5003/customer/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setCustomer(data.data);
            console.log(data.data);
        })

        
    }, []);

    const customerName = `${customer.first_name} ${customer.last_name}`;

    const goToCouponCheckout = (e) => {
        console.log(quantity);
        console.log(date);
        navigate(`/couponpayment/${quantity}/${date}`);
    };


    function activatecheckout() {
        return(
            fetch('http://localhost:5006/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "customer_id": `${id}`,
                        "activity_id": `${activityBookId}`,
                        "payment_amount": `${quantity * pricePerPax}`,
                        "total_pax" : `${quantity}`,
                        "datetime" : `${date}`
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

                    <Form.Group className="flex mb-3" id="firstName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control readOnly={true} type="text" value={customerName} required/>
                    </Form.Group>

                    <Form.Group className="flex mb-3" id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control readOnly={true} type="email" value={customer.email} />
                    </Form.Group>

                    <Form.Group className="flex mb-3" id="c_address">
                        <Form.Label>Your address</Form.Label>
                        <Form.Control readOnly={true} type="text" value={customer.address} />
                    </Form.Group>

                    <Form.Group className="flex mb-3" id="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control readOnly={true} type="text" value={customer.phone} />
                    </Form.Group>

                    <Form.Group className="flex mb-3" >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control 
                        onChange={(e) => {
                            setQuantity(e.target.value);
                            }} value={quantity}
                type="number" min="0"/>
                    </Form.Group>      

                    <Form.Group className="flex mb-3" id="phone">
                    <Form.Label>Booking Date</Form.Label>
                        <Form.Control 
                        onChange={(e) => {
                            setDate(e.target.value);
                            }} type="date" />
                    </Form.Group>

                </Form>
            </div>
            <div className = "booking__bottom">
                <ListGroup>
                    <ListGroupItem className = "border-0 px-0 total">
                        <h5>Total</h5>
                        <span>${pricePerPax * quantity}</span>
                    </ListGroupItem>
                </ListGroup>
                <div className="checkoutButton">
                    <Button onClick={activatecheckout} className = "btn primary__btn w-100 mt-4">Checkout Without Coupon</Button>
                    { myCoupons.length == 0 ? null :
                    (<Button onClick={goToCouponCheckout} className = "btn primary__btn w-100 mt-4">Checkout With Coupon</Button>)
                    }
                </div>
            </div>
        </div>
       
    )
}