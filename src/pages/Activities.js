import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/* images */
import fun2 from "../img/fun2.jpg";

export default function Activities() {
    return (
        <div class="activitiesContainer">
            <img src={fun2} />
            <div class="activitiesSearchItem">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"black"}} class="activitiesIcon"/>
                <input type="text" placeholder="Search activities" class="activitiesSearchText"></input>
                <button type="submit" class="button-submit">Search</button>
            </div>
        </div>
    );
}