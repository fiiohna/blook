import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./pending.css";


const Pending = () => {
  const id = localStorage.getItem("user_id");
  const [pending, setPending] = useState([]);
  const [showButton, setShowButton] = useState([]);
  const [error, setError] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5004/pendingReview/${id}`)
        .then((response) => 
        {
          if (!response.ok){
            setError('Request failed!');
          }
          else{
            return response.json();
          }
        })
        .then((data) => {
          setPending(data.data);
        })
      }, []);

          
          // }
          // else{
            // setPending([{id: "0", activity_name: "You have reviewed all activities! Great job!"}]);
          //   setShowButton(false);
          // }
        // console.log(data);
        // console.log(data.data);


    
  return (
    <div className="pendingTab">
      { error ? (
        <li className="row grid">
          <div className="icon-style">
            <div className="reviewListPending">
              <p className="reviewDescNull">You have reviewed all activities! Great job!</p>
            </div>
          </div>
        </li>
      ) : 
        pending.map((pendingReview) => {
            return (
              <li className="row grid">
                <div className="icon-style">
                  <div className="reviewListPending">
                    <p className="reviewDesc">{pendingReview.activity_name}</p>
                    { showButton ?
                      (<span><button className="btn"><NavLink to="/createreview" className="navLink" style={({ isActive }) => { return { color: isActive ? 'white' : '', background: isActive ? '#E58F65' : "", padding: isActive ? "6px" : '', borderRadius: isActive ? "12px" : '', textDecoration: "none" } }}>Review Here</NavLink></button></span>)
                      : (null)
                    }
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