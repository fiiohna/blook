import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const RatingProfile = ({rating, review_desc, date, activity_name}) => {
    
    const stars = Array.from({ length : 5}, (elem, idx) => {
        let num = idx + 0.5;

        return <span key={idx}>
            {
                rating >= idx + 1 ? (<FaStar className="icon" />) : rating >= num ? (<FaStarHalfAlt className="icon"/>) : (<AiOutlineStar className="icon"/>)
            }
        </span>

    })


  return (
    <>
        <div className="icon-style">
            {stars}
            <div className="reviewList">
                <p>{activity_name}</p>  
                <h2 className="reviewDesc">{review_desc}</h2>
                <small className="reviewDates">{date}</small>
            </div>
        </div>
    </>
  );
}

export default RatingProfile