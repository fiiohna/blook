import React, { useState, useEffect } from "react";
import { MdRedeem } from "react-icons/md"
import "./coupon.css";



const Coupons = () => {
    const [coupons, setCoupons] = useState([]);
    const id = localStorage.getItem("user_id");
    useEffect(() => {
        fetch(`http://localhost:5014/get_coupons/${id}`)
        .then((response) => response.json())
        .then((data) => {
        setCoupons(data.data);
        // console.log(data.data);
      });
    }, [])


    const addCoupon = ((e) => {
        const points_deduct = e.currentTarget.value;
        const id = localStorage.getItem("user_id");

        fetch(`http://localhost:5014/get_coupons/${id}/${points_deduct}`)
            .then(response => response.json())
            .then(data => {
                console.log(points_deduct);
        })
        
        window.location.reload(false);
    });

  return (
    <div className="coupons">
        <h1>Redeem your points!  </h1> 
        <div className="row flex">
            {
            coupons.map((coupon) => {
                return (
                    <div className="singleCoupon">
                        <div className="couponPicture">
                            <MdRedeem className="icon redeem"/>
                        </div>
                        <div className="couponDetails">
                            <h2 className="couponCode">{coupon.coupon_code}</h2>
                            <p className="couponPoint">You need: {coupon.coupon_point} points</p>
                            <button value={coupon.coupon_point} onClick={addCoupon} className="btn">Redeem</button>
                        </div>
                    </div>
                );
            })    
        }
        </div>
    </div>
  );
};
export default Coupons;