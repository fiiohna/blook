import React, {useEffect} from 'react'
import './homep.css'
import video3 from '../../assets/video3.mp4'

import aos from 'aos'
import 'aos/dist/aos.css'

const Homep = () => {
    // create react hook to add scroll animation

    useEffect(() => {
        aos.init({duration: 2000})
    }, [])



    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={video3} muted autoPlay loop type="video/mp4"></video> 

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                    BRINGING THE BEST ACTIVITIES TO YOU
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search for your <span style={{color: "#E58F65"}}>fun</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Homep