import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Rating = ({rating, review_desc, date}) => {
    
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
                <p className="reviewDesc">{review_desc}</p>
                <small className="reviewDates">{date}</small>
            </div>
        </div>
    </>
  );
}

export default Rating