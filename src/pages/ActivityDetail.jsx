import React from 'react';
import { useParams } from 'react-router-dom';
import activities from "../assets/data/activities"
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import Booking from '../components/booking/booking';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

import { HiOutlineLocationMarker } from 'react-icons/hi'

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
                    <Col lg= '8'>
                        <div className="activitityContent">
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

                            </div>
                        </div>
                    </Col>

                    <Col lg= '6'>
                        <Booking activity={activity}></Booking>
                    </Col>
                </Row>
            </Container>
        </section>
        
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
        
    );
};