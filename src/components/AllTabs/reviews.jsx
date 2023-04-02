import React, { useState, useEffect } from "react";
import "./reviews.css";

import Rating from "../rating/rating";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const id = localStorage.getItem("user_id");
    useEffect(() => {
        fetch(`http://localhost:5004/reviews/customer/${id}`)
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
                      <li className="row grid">
                          {/* <p>{review.review_text}</p>
                          <p>{review.rating}</p>
                          <p>{review.created}</p> */}
                          <Rating rating={review.rating} review_desc={review.review_text} date={review.created} name={review.activity_name}/>
                      </li>
                )
                })
        }
    </div>
  );
};
export default Reviews;