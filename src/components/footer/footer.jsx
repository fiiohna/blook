
import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4'
import { FiSend, FiChevronRight } from 'react-icons/fi';
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';

import aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        aos.init({duration: 2000})
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className='btn flex' type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="/#" className="logo flex">
                                blook
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* group 1 */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">OUR AGENCY</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                        </div>

                        {/* group 2 */}
                        <div data-aos="fade-up" data-aos-duration="4000"className="linkGroup">
                            <span className="groupTitle">PARTNERS</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentals
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Grab
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>Copyright All Rights Reserved</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer