import React, { useEffect } from 'react'
import './recommendation.css'
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

import aos from 'aos'
import 'aos/dist/aos.css'

// icons
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

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

export default function Recommendation() {
    useEffect(() => {
        aos.init({ duration: 2000 })
    }, [])


    return (
        <section className='recommendation section container'>
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <div className="secTitle">
                            <h3 data-aos="fade-right" className="title">
                                Most Popular Activities
                            </h3>
                        </div>
                    </div>

                    {/* <div className="iconsDiv flex">
                        <BsArrowLeftShort className='icon' />
                        <BsArrowRightShort className='icon' />
                    </div> */}
                </div>

                <div className="secContent grid">

                    {
                        Data.map(({ id, imgSrc, name, address, grade, fees, description }) => {
                            return (

                                <div key={id} className="singleDestination">
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt="image name" />
                                    </div>
                                    <div className="cardInfo">
                                        <h4 className="name">{name}</h4>
                                        <span className="continent flex"><HiOutlineLocationMarker className='icon' /></span>
                                        <span className="name">{address}</span>

                                        <div className="fees flex">
                                            <div className="price">
                                                <h3>SGD{fees}</h3>
                                            </div>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
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
            </div>

        </section>


        // useEffect(() => {
        //     aos.init({ duration: 2000 })
        // }, [])

        // useEffect(() => {
        //     aos.init({ duration: 2000 })
        // }, [])

        // return (
        //     <section className="recommendation container section">
        //         <div className="secTitle">
        //             <h3 data-aos="fade-right" className="title">
        //                 Most Popular Activities
        //             </h3>
        //         </div>


        //         <div className="secContent grid">
        //         <div className="iconsDiv flex">
        //             <BsArrowLeftShort className='icon'/>
        //             <BsArrowRightShort className='icon'/>
        //         </div>
        //             {
        //                 Data.map(({ id, imgSrc, name, address, grade, fees, description }) => {
        //                     return (
        //                         <div key={id} data-aos="fade-up" className="singleDestination">
        //                             {/* it will return single id from the map array */}
        //                             <div className="imageDiv">
        //                                 <img src={imgSrc} alt={name} />
        //                             </div>
        //                             <div className="cardInfo">
        //                                 <h4 className="name">{name}</h4>
        //                                 <span className="continent flex"><HiOutlineLocationMarker className='icon' /></span>
        //                                 <span className="name">{address}</span>

        //                                 <div className="fees flex">
        //                                     <div className="price">
        //                                         <h3>{fees}</h3>
        //                                     </div>
        //                                 </div>

        //                                 <div className="desc">
        //                                     <p>{description}</p>
        //                                 </div>

        //                                 <button className='btn flex'>
        //                                     DETAILS <HiOutlineClipboardCheck className='icon' />
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     )
        //                 })
        //             }
        //         </div>
        //     </section>
    )
}