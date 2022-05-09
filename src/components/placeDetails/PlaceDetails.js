import React, {useContext} from "react";
// importing Context (location context)
import LocationContext from "../../context/LocationContext";
import { Route, useParams } from 'react-router'; 
import styled from "styled-components";


const RestaurantCard = styled.div`
border: 1px solid lightgray;
border-radius: 10px;
padding: 1.5rem;
`

const PlaceDetails = () =>{

    let isOpen = 'Open'; 
    const { id: restId } = useParams();
    const { restaurants } = useContext(LocationContext); 
    
    console.log('rest id:', restId)
    // return the object of the restaurant who's id matches with the param id (eg.place-details/819237)
    const restaurant =  restaurants.find(({location_id}) =>  location_id == restId ); 
    // is restaurant open 
    ( !restaurant.is_closed )?( isOpen = 'Open'):( isOpen = 'Closed');

    return(
        <RestaurantCard>
            <div>
                <img src={restaurant.photo?.images.large.url} alt="Picture of Restaurant"/>
            </div>
            <div>
                <h1>{restaurant.name}</h1>
                <h3>{isOpen}</h3>
                <p>Rating:{restaurant.rating}</p>
                <hr/>
                <p>{restaurant.address}</p>
                <p>{restaurant.phone}</p>
                <p>{restaurant.website}</p>
                <hr/>
                <p>{restaurant.description}</p>

            </div>
        </RestaurantCard>
    );

}
export default PlaceDetails;