import React, { useState, useEffect } from "react";
import { MdRedeem } from "react-icons/md";
import "./myCoupons.css";

const MyCoupons = () => {
    const [myCoupons, setMyCoupons] = useState([]);
    const id = localStorage.getItem("user_id");
        useEffect(() => {
            fetch(`http://localhost:5013/coupon/linked/${id}`)
            .then((response) => response.json())
            .then((details) => {
                if (details.data.coupon.length == 0){
                    setMyCoupons([{id: "0", coupon_code: "No coupons yet!"}]);
                }
                else{
                    setMyCoupons(details.data.coupon);
                    console.log(details.data.coupon);
                }
                // console.log(details.data.coupon);

            });       
        }, [])
    
    return (
        <div className="myCoupons">
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
                                    <h3 className="couponDesc">Get ${coupon.coupon_point} off your next activity!</h3>
                                </div>
                            </div>
                        );
                    })  
                    
                }
            </div>
        </div>
    )
}

export default MyCoupons;

// @app.route("/coupon/linked/<string:customer_id>")
