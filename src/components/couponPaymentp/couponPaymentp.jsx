import React, { useState, useEffect } from "react";
import { MdRedeem } from "react-icons/md";
import "./couponPaymentp.css";
import { useParams } from "react-router-dom";

const CouponPaymentp = () => {
    var  { quantity,  date } = useParams();
    const [myCoupons, setMyCoupons] = useState([]);
    const [bookingActivity, setBookingActivity] = useState([]);
    const id = localStorage.getItem("user_id");
    const activityBookId = localStorage.getItem("activityBookId");
    const [pricePerPax, setPricePerPax] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/get_coupons/${id}`)
        .then((response) => response.json())
        .then((data) => {
        setMyCoupons(data.data.coupon);
        
        fetch(`http://localhost:8000/api/activity/${activityBookId}`)
        .then((response) => response.json())
        .then((data) => {
            setBookingActivity(data.data);
            setPricePerPax(data.data.price);
        })
    });
    }, [])

    function checkoutWithCoupon(e) {
        const coupon_id = e.currentTarget.value;
        return(
            fetch(`http://localhost:8000/api/payment/${coupon_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "customer_id": `${id}`,
                        "activity_id": `${activityBookId}`,
                        "payment_amount":`${pricePerPax * quantity}`,
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
    <div className="coupons">
        <h1>My Coupons</h1> 
        <div className="row flex">
            {
                myCoupons.map((coupon) => {
                    return (
                        <div className="mySingleCoupon" key={coupon.coupon_customer_id}>
                            <div className="couponPicture">
                                <MdRedeem className="icon redeem"/>
                            </div>
                            <div className="couponDetails">
                                <span className="couponCode">{coupon.coupon_point}</span>
                                <h3 className="couponDesc">Get ${coupon.coupon_point/100} off!</h3>
                            </div>
                            <button onClick={checkoutWithCoupon} value={coupon.coupon_id} className = "btn bookingbtn">Pay With Coupon</button>
                        </div>
                    );
                })  
            }
        </div>
        
    </div>
    );
};
export default CouponPaymentp;