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
//         name: 'Bora Bora',
//         address: 'New Zealand',
//         grade: 'CULTURAL EXPERIENCE',
//         fees: '$700',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'

//     },
//     {
//         id: 2,
//         imgSrc: img2,
//         name: 'Machu Picchu',
//         address: 'Peru',
//         grade: 'CULTURAL EXPERIENCE',
//         fees: '$600',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
//     },
//     {
//         id: 3,
//         imgSrc: img3,
//         name: 'Bali Island',
//         address: 'Indonesia',
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
//                                     <img src={imgSrc} alt={name} />
//                                 </div> */}
//                                 <div className="cardInfo">
//                                     <h4 className="name">{activity.name}</h4>
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

import React, { useState, useEffect } from 'react'
import './main.css'
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

import aos from 'aos'
import 'aos/dist/aos.css'


// icons

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaSearch } from 'react-icons/fa';

// THIS IS HARD-CODED HERE!!!!

const Data = [
    {
        id: 1,
        imgSrc: img,
        name: 'Bora Bora',
        address: 'New Zealand',
        grade: 'CULTURAL EXPERIENCE',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'

    },
    {
        id: 2,
        imgSrc: img2,
        name: 'Machu Picchu',
        address: 'Peru',
        grade: 'CULTURAL EXPERIENCE',
        fees: '$600',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        id: 3,
        imgSrc: img3,
        name: 'Bali Island',
        address: 'Indonesia',
        grade: 'CULTURAL EXPERIENCE',
        fees: '$500',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
]

const Main = () => {
    const [activities, setActivities] = useState(Data)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        aos.init({ duration: 2000 })
    }, [])

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
      };
    
      useEffect(() => {
        const filteredActivities = Data.filter((activity) =>
          activity.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setActivities(filteredActivities);
      }, [searchQuery]);

    return (
        <section className="main container section">
            <div className="activitiesSearchItem">
                <span style={{marginRight: "20px"}}><FaSearch/></span>
                <input type="text" placeholder="What do you want to do?" className="activitiesSearchText" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
                <button type="submit" className="button-submit" onClick={handleSearch}>Search</button>
            </div>

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    See All Activities
                </h3>
            </div>

            <div className="secContent grid">
                {
                    activities.map((activity) => {
                        return (
                            <div key={activity.id} data-aos="fade-up" className="singleDestination">
                                {/* it will return single id from the map array */}
                                <div className="imageDiv">
                                    <img src={activity.imgSrc} alt="Activity img" />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="name">{activity.name}</h4>
                                    <span className="continent flex"><HiOutlineLocationMarker className='icon' /></span>
                                    <span className="name">{activity.address}</span>

                                    <div className="fees flex">
                                        <div className="price">
                                            <h3>SGD{activity.fees}</h3>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{activity.description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS/BOOK <HiOutlineClipboardCheck className='icon' />
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