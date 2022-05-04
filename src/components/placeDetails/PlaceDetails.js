// import React, {useContext} from "react";
// importing Context (location context)
// import LocationContext from "../../context/LocationContext";

const PlaceDetails = ({place}) =>{

    // consuming or using location context 
    // const {locations} = useContext(LocationContext)

    return(
        <div>
            <h1>{place.name}</h1>
        </div>
    );

}
export default PlaceDetails;