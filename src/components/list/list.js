import React, {useState, useContext} from "react";
import PlaceDetail from "../placeDetails/PlaceDetails"
import LocationContext from "../../context/LocationContext";
import ListCard from "./ListCard";
import styled from "styled-components";
const listsWrapper = styled.div`
  width:40%;
   `;

const List = () => {

  // have locations(restaurants array) available to us in the list component
  const { restaurants } = useContext(LocationContext);

    return (
      <listsWrapper>
        <h3>Restaurants</h3>
        <div >
            {restaurants?.map((restaurant) => (
                <ListCard  
                name={restaurant.name} 
                description={restaurant.description} 
                rating={restaurant.rating}
                phone={restaurant.phone} 
                address={restaurant.address}/>
            ))}

        </div>
      </listsWrapper>
    );
  };
    
export default List;
