// Use the commented out codes to connect to backend
// import React, {useState, useEffect} from 'react'
// import './main.css'
// import img from '../../assets/img.jpg'
// import img2 from '../../assets/img2.jpg'
// import img3 from '../../assets/img3.jpg'

// import aos from 'aos'
// import 'aos/dist/aos.css'


// // icons

// import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

// // THIS IS HARD-CODED HERE!!!!


// const Data = [
//     {
//         id: 1,
//         imgSrc: img,
//         destTitle: 'Bora Bora',
//         location: 'New Zealand',
//         grade: 'CULTURAL EXPERIENCE',
//         fees: '$700',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'

//     },
//     {
//         id: 2,
//         imgSrc: img2,
//         destTitle: 'Machu Picchu',
//         location: 'Peru',
//         grade: 'CULTURAL EXPERIENCE',
//         fees: '$600',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
//     },
//     {
//         id: 3,
//         imgSrc: img3,
//         destTitle: 'Bali Island',
//         location: 'Indonesia',
//         grade: 'CULTURAL EXPERIENCE',
//         fees: '$500',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
//     }
// ]

// const Main = () => {

//     const [activities, setActivity] = useState([]);
//     useEffect(() => {
//         aos.init({duration: 2000})
//         fetch('http://localhost:5001/activity')
//         .then((response) => response.json())
//         .then((data) => {
//         setActivity(data.data.activities);
//       });


//     }, [])


//     return (
//         <section className="main container section">
//             <div className="secTitle">
//                 <h3 data-aos="fade-right" className="title">
//                     Most visited destinations
//                 </h3>
//             </div>

//             <div className="secContent grid">
//                 {
//                     activities.map((activity) => {
//                         return(
//                             <div key={activity.id} data-aos="fade-up" className="singleDestination">
//                                 {/* it will return single id from the map array */}
//                                 {/* <div className="imageDiv">
//                                     <img src={imgSrc} alt={destTitle} />
//                                 </div> */}
//                                 <div className="cardInfo">
//                                     <h4 className="destTitle">{activity.name}</h4>
//                                     <span className="continent flex"><HiOutlineLocationMarker className='icon'/></span>
//                                     <span className="name">{activity.address}</span>

//                                     <div className="fees flex">
//                                         <div className="price">
//                                             <h3>USD{activity.price}</h3>
//                                         </div>
//                                     </div>

//                                     <div className="desc">
//                                         <p>{activity.description}</p>
//                                     </div>

//                                     <button className='btn flex'>
//                                         DETAILS <HiOutlineClipboardCheck className='icon'/>
//                                     </button>
//                                 </div>
//                             </div>


//                         )
//                     })
//                 }

//             </div>
//         </section>
//     )
// }

// export default Main

import React, { useEffect } from 'react'
import './main.css'
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import { FaSearch } from 'react-icons/fa';

import aos from 'aos'
import 'aos/dist/aos.css'


// icons

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

// THIS IS HARD-CODED HERE!!!!

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL EXPERIENCE',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'

    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL EXPERIENCE',
        fees: '$600',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL EXPERIENCE',
        fees: '$500',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
]

const Main = () => {

    useEffect(() => {
        aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Popular Activities
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/* it will return single id from the map array */}
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex"><HiOutlineLocationMarker className='icon' /></span>
                                    <span className="name">{location}</span>

                                    <div className="fees flex">
                                        <div className="price">
                                            <h3>{fees}</h3>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="activitiesSearchItem">
                <FaSearch />
                <input type="text" placeholder="What do you want to do?" className="activitiesSearchText"></input>
                <button type="submit" className="button-submit">Search</button>
            </div>

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    See All Activities
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/* it will return single id from the map array */}
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex"><HiOutlineLocationMarker className='icon' /></span>
                                    <span className="name">{location}</span>

                                    <div className="fees flex">
                                        <div className="price">
                                            <h3>{fees}</h3>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main