import React, {useState, useContext} from "react";
import LocationContext from "../../context/LocationContext";
import { useNavigate } from "react-router-dom";
import ListCard from "./ListCard";


const List = () => {

  //navigate to different page with Router useNavigate
  const navigate = useNavigate(); 

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
                address={restaurant.address}
                onClick={() => navigate(`/place-details/${parseInt(restaurants.location_id)}`)}
                />
            ))}

        </div>
      </div>
    );
  };
    
export default List;
