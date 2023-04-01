import React, { useState } from "react";
import Reviews from "../AllTabs/reviews";
import Pending from "../AllTabs/pending";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const changeToReviews = () => {
        setActiveTab("tab1");
    };

    const changeToPending = () => {
        setActiveTab("tab2");
    }

    return (
        <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={changeToReviews}
        >
          Reviews
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={changeToPending}
        >
          Yet To Review
        </li>
      </ul>
 
      <div className="outlet">
        {activeTab === "tab1" ? <Reviews /> : <Pending />}
      </div>
    </div>
    );
};

export default Tabs;