import React, { useState, useEffect } from 'react';
import './createReviewp.css'; // import the SCSS file

const CreateReviewp = () => {
    const [review, setReview] = useState('');
    const [options, setOptions] = useState([]);
    const [ratings, setRatings] = useState([1,2,3,4,5]);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedRating, setSelectedRating] = useState('');

    useEffect(() => {
        fetch('http://localhost:5004/pendingReview/1')
        .then((response) => response.json())
        .then((data) => {
        setOptions(data.data);
        console.log(data.data);
      });
}, [])






    const handleSubmit = (e) => {
        e.preventDefault();
        // handle submit logic
        console.log(`Review submitted: ${review}, ${selectedOption}, ${selectedRating}`);
        setReview('');
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
            <h1>Write a review</h1>
        </div>
        <div>
            <select required value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select an option</option>
                {options.map((option) => (
                <option key={option.num} value={option.activity_id}>
                    {option.activity_name}
                </option>
                ))}
            </select>

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

export default CreateReviewp;