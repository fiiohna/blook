import React, {useState, useEffect} from 'react'
import img from '../../assets/img4.jpg'
import './profilep.css'
import Tabs from "../TabComponent/tabs";
import Coupons from "../coupon/coupon";
import MyCoupons from '../myCoupons/myCoupons';




const ProfilePage = () =>{
    const id = localStorage.getItem("user_id");
    const [details, setDetails] = useState([]);
    const [test, setTest] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8000/api/customer/${id}`)
        .then((response) => response.json())
        .then((details) => {
            setDetails(details.data);
            // console.log(details.data.customers[id]);
            // console.log(details.data);
        });

        fetch(`http://localhost:8000/api/customer`)
        .then((response) => response.json())
        .then((test) => {
            setTest(test.data);
            // console.log(details.data.customers[id]);
            // console.log(test.data);
        });

        fetch(`http://localhost:8000/api/activity`)
        .then((response) => response.json())
        .then((test) => {
            setTest(test.data);
            // console.log(details.data.customers[id]);
            // console.log(test.data);
        });



        
    }, [id])
    

    return (

        <div className="profile">
            <div className="row flex">
                <div className="pictureBox">
                    <img className="picture" src={img} alt="" />
                </div>

                <div className="profileBox">
                    
                    <h1> {details.first_name} {details.last_name}</h1>
                    <div className="details">
                        <h2>My details</h2>
                        <div className="detail">
                            <span>Email: </span>
                            <span>{details.email}</span>
                        </div>

                        <div className="detail">
                            <span>Points: </span>
                            <span>{details.point}</span>
                        </div>

                        <div className="detail">
                            <span>Phone: </span>
                            <span>{details.phone}</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row">
                <Tabs />
            </div>

            <div className="row">
                <Coupons/>
            </div>

            <div className="row">
                <MyCoupons/>
            </div>
        </div>


    )
}


export default ProfilePage