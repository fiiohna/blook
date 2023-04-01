import React, { useState, useEffect } from "react";
import "./pending.css";


const Pending = () => {
  const [pending, setPending] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5004/pendingReview/1')
        .then((response) => response.json())
        .then((data) => {
        setPending(data.data);
        console.log(data.data);
      });
}, [])
  return (
    <div className="pendingTab">
      {
            pending.map((pendingReview) => {
                return (
                      <li class="row grid">
                        <div className="icon-style">
                          <div className="reviewList">
                            <p className="reviewDesc">{pendingReview.activity_id}</p>
                          </div>
                        </div>
                      </li>
                )
                })
        }
    </div>
  );
};
export default Pending;