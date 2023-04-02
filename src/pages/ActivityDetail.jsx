import React from 'react';
import { useParams } from 'react-router-dom';
import activities from "../assets/data/activities"
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
// import Col from 'react-bootstrap/Col';
import Booking from '../components/booking/booking';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import "../components/activityDetail/activityDetail.css"

export default function ActivityDetail() {
    const { id } = useParams()

    // this is a static data, laer we will need to use API to load our data from database
    const activity = activities.find(activity => activities.id === id)

    // destructure properties from activity object
    const { imgSrc, name, address, price, description } = activity

    // const {totalRating, avgRating} = calculateAvgRating

    // This component will display the details of the activity
    return (
        <section style={{ paddingTop: "100px" }}>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="activityContent">
                            <img src={imgSrc} alt="image" />

                            <div className="activityInfo">
                                <h4 className="name">{name}</h4>
                                <span className="continent flex"><HiOutlineLocationMarker className='icon' /></span>
                                <span className="name">{address}</span>

                                <div className="price flex">
                                    <div className="price">
                                        <h3>SGD{price}</h3>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                {/* Tour Reviews */}
                                <div className="activity__reviews mt-4">
                                    <h1>Reviews</h1>
                                    <Form>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            {/* <span><i class="ri-star-s-fill"></i></span>
                                            <span><i class="ri-star-s-fill"></i></span>
                                            <span><i class="ri-star-s-fill"></i></span>
                                            <span><i class="ri-star-s-fill"></i></span>
                                            <span><i class="ri-star-s-fill"></i></span> */}
                                            <div className="review__input">
                                                <input type = "text" placeholder = "share your thoughts">
                                                    
                                                </input>
                                                <button className = "btn primary__btn text-white" type = "submit">
                                                        Submit
                                                    </button>

                                            </div>
                                        </div>
                                    </Form>
                                    <ListGroup className = "user__reviews">
                                            <div className = "review__item">
                                                {/* <img src = {ImgSrc} alt = ""/> */}
                                                <div className = "w-100">
                                                    <div className = "d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h2>name</h2>
                                                            <p>customer id</p>
                                                        </div>
                                                        <span className = "d-flex align-items-center">
                                                            <p>Rating: 5 star</p>
                                                        </span>
                                                    </div>
                                                    <h3>Amazing tour</h3>
                                                </div>
                                            </div>

                                            <div className = "review__item">
                                                {/* <img src = {ImgSrc} alt = ""/> */}
                                                <div className = "w-100">
                                                    <div className = "d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h2>name</h2>
                                                            <p>customer id</p>
                                                        </div>
                                                        <span className = "d-flex align-items-center">
                                                            <p>Rating: 5 star</p>
                                                        </span>
                                                    </div>
                                                    <h3>Amazing tour</h3>
                                                </div>
                                            </div>
                                    </ListGroup>
                                </div>


                            </div>
                        </div>

                    </Col>


                    <Col lg="4">

                        <Booking activity={activity}></Booking>


                    </Col>
                </Row>
            </Container>
        </section>


    );
};

// <section style={{ paddingTop: "100px" }}>
        //     <Container>
        //          <Row>
        //              <Col lg={8}>
        //                  <div className="activitityContent">
        //                      <img src={imgSrc} alt="image" />

        //                     <div className="activityInfo">
        //                         <h4 className="name">{name}</h4>
        //                         <span className="continent flex"><HiOutlineLocationMarker className='icon' /></span>
        //                         <span className="name">{address}</span>

        //                         <div className="price flex">
        //                                  <h3>SGD{price}</h3>
        //                             </div>
        //                         </div>

        //                        <div className="desc">
        //                             <p>{description}</p>
        //                         </div>

        //                      </div>
        //                 </div>
        //              </Col>

        //             <Col lg={4}>
        //                  <Booking activity={activity}></Booking>
        //              </Col>
        //          </Row>
        //      </Container>
        // </section>

