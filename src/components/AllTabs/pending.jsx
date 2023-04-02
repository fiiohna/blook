import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
                      <li className="row grid">
                        <div className="icon-style">
                          <div className="reviewListPending">
                            <p className="reviewDesc">{pendingReview.activity_name}</p>
                            <span><button className="btn"><NavLink to="/createreview" className="navLink" style={({ isActive }) => { return { color: isActive ? 'white' : '', background: isActive ? '#E58F65' : "", padding: isActive ? "6px" : '', borderRadius: isActive ? "12px" : '', textDecoration: "none" } }}>Review Here</NavLink></button></span>
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