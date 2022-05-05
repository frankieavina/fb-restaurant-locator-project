import React, {useState, useContext} from "react";
import PlaceDetail from "../placeDetails/PlaceDetails"
import LocationContext from "../../context/LocationContext";
import ListCard from "./ListCard";


const List = () => {

  // have locations(restaurants array) available to us in the list component
  const { restaurants } = useContext(LocationContext);

    return (
      <div className="list-container">
        <h3>Restaurants</h3>
        <div className="list">
            {restaurants?.map((restaurant) => (
                <ListCard  
                name={restaurant.name} 
                description={restaurant.description} 
                rating={restaurant.rating}
                phone={restaurant.phone} 
                address={restaurant.address}/>
            ))}

        </div>
      </div>
    );
  };
    
export default List;
