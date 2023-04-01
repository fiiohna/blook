import React, { useState, useEffect } from "react";
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5004/review')
        .then((response) => response.json())
        .then((data) => {
        setReviews(data);
        console.log(data);
      });
}, [])
  return (
    <div className="reviewsTab">
      <p>Reviews test</p>
      
    </div>
  );
};
export default Reviews;