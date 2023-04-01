// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// /* images */
// import fun2 from "../img/fun2.jpg";

// export default function Activities() {
//     return (
//         <div class="activitiesContainer">
//             <img src={fun2} />
//             <div class="activitiesSearchItem">
//                 <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"#ffffff"}} class="activitiesIcon"/>
//                 <input type="text" placeholder="What do you want to do?" class="activitiesSearchText"></input>
//                 <button type="submit" class="button-submit">Search</button>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from "../img/deals/deal1.png";
import img2 from "../img/deals/deal2.png";
import img3 from "../img/deals/deal3.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Activities() {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
  
    // return (
    //     <div>
    //             <Carousel activeIndex={index} onSelect={handleSelect}>
    //                         <Carousel.Item>
    //                             <img
    //                                 className="d-block w-100"
    //                                 src={img}
    //                                 alt="First slide"
    //                             />
    //                         </Carousel.Item>
    //                         <Carousel.Item>
    //                             <img
    //                                 className="d-block w-100"
    //                                 src={img2}
    //                                 alt="Second slide"
    //                             />
    //                         </Carousel.Item>
    //                         <Carousel.Item>
    //                             <img
    //                                 className="d-block w-100"
    //                                 src={img3}
    //                                 alt="Third slide"
    //                             />
    //                         </Carousel.Item>
    //                     </Carousel>
    //     </div>
    // )
}