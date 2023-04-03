import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './editReviewp.css'; // import the SCSS file

const EditReviewp = () => {
    const reviewEdit = JSON.parse(localStorage.getItem("reviewEdit"));
    const activity_id = reviewEdit.activity_id;
    const rating = reviewEdit.rating;
    const review_text = reviewEdit.review_text;
    const [review, setReview] = useState(review_text);
    const [ratings, setRatings] = useState([1,2,3,4,5]);
    const [selectedOption, setSelectedOption] = useState(activity_id);
    const [selectedRating, setSelectedRating] = useState(rating);

    const navigate = useNavigate();
    const id = localStorage.getItem("user_id");
    

//     useEffect(() => {
//         fetch(`http://localhost:5004/pendingReview/${id}`)
//         .then((response) => response.json())
//         .then((data) => {
//         setOptions(data.data);
//       });
// }, [])






    const handleSubmit = (e) => {
        e.preventDefault();
        // handle submit logic
        console.log(`Review submitted: ${id}, ${selectedOption}, ${selectedRating}, ${review}`);
        fetch(`http://localhost:5004/review/${selectedOption}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customer_id: id,
                activity_id: selectedOption,
                rating: selectedRating,
                review_text: review
            })
        })

        navigate("/createreviewsuccessful");
    };
    
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
    };

  return (
    <form className="create-review-form" onSubmit={handleSubmit}>
        <div>
            <h1>Edit your review</h1>
        </div>
        <div>
            <select required value={selectedRating} onChange={handleRatingChange}>
                <option value="">Select a rating</option>
                {ratings.map((rating, index) => (
                <option key={index} value={rating}>
                    {rating}
                </option>
                ))}
            </select>
        </div>

      <label>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default EditReviewp;