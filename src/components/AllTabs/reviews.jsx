import React, { useState, useEffect } from "react";
import "./reviews.css";

import Rating from "../rating/rating";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5004/reviews/customer/1')
        .then((response) => response.json())
        .then((data) => {
        setReviews(data.data);
        console.log(data.data);
      });
}, [])
  return (
    <div className="reviewsTab">
        {
            reviews.map((review) => {
                return (
                      <li class="row grid">
                          {/* <p>{review.review_text}</p>
                          <p>{review.rating}</p>
                          <p>{review.created}</p> */}
                          <Rating rating={review.rating} review_desc={review.review_text} date={review.created}/>
                      </li>
                )
                })
        }
    </div>
  );
};
export default Reviews;