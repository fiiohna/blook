import { TypeAnimation } from "react-type-animation";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

/* images */
import deal1 from "../img/deals/deal1.png";
import deal2 from "../img/deals/deal2.png";
import deal3 from "../img/deals/deal3.png";

export default function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div class="homeContainer">
            <div class="row">
                <div class="float-child left">
                    <div class="leftContent">
                        <TypeAnimation
                            sequence={["BRINGING THE BEST ACTIVITIES TO YOU!"]}
                            wrapper="span"
                            cursor={true}
                            style={{ fontSize: '2em', color: '#fae5e5' }}
                        />
                        {/* <p>'There's no fear when you're having <span style={{ color: '#D05353', fontWeight: 'bold' }}>fun</span>.' - Will Thomas.</p> */}
                        <p>Discover endless fun and adventure with <span style={{color:"#D05353", fontWeight: "bold"}}>BLOOK</span>!</p>
                        <p>Find the best activities for you and your loved ones to enjoy together.</p>
                        <p>Explore new places and try new things with just a few taps.</p>
                        <p>Create unforgettable memories and make every day an adventure!</p>
                    </div>
                </div>

                <div class="float-child right">
                    <div class="rightContent">
                        <h2 style={{ fontWeight: 'bold' }}>Offers for you</h2>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={deal1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={deal2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={deal3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <p>Catch these offers while they last!</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <h1>Popular Activities</h1>
            </div>
        </div>
    )
}