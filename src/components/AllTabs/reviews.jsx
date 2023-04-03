import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./reviews.css";

import RatingProfile from "../rating/ratingProfile";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [empty, setEmpty] = useState(false);
    const id = localStorage.getItem("user_id");
    const reviewEdit = localStorage.getItem("reviewEdit");
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:8000/api/review/customer/${id}`)
        .then((response) => response.json())
        .then((data) => {
        setReviews(data.data);
        console.log(data.data)
        if (data.data.length == 0) {
            setEmpty(true);
        }
        
      });
}, [])

    const handleEdit = (e) => {
        localStorage.setItem("reviewEdit", e.target.value);
        navigate("/editreview");
        // console.log(e.target.value);
    }

  return (
    <div className="reviewsTab">
        { empty ? <h1 className="emptyReviews">No reviews yet!</h1> :
            reviews.map((review) => {
                return (
                      <li className="row grid">
                          {/* <p>{review.review_text}</p>
                          <p>{review.rating}</p>
                          <p>{review.created}</p> */}
                          <RatingProfile rating={review.rating} review_desc={review.review_text} date={review.created} activity_name={review.activity_name}/>
                          <button value={JSON.stringify(review)} onClick={handleEdit} className="btn reviewBtn">Edit</button>
                      </li>
                )
                })
        }
    </div>
  );
};
export default Reviews;