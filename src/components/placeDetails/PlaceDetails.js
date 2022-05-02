import React, {useContext} from "react";
// importing Context (location context)
import LocationContext from "../../context/LocationContext";

const PlaceDetails = () =>{

    // consuming or using location context 
    const {locations} = useContext(LocationContext)

    return(
        <div>
            
        </div>
    )

}
export default PlaceDetails;