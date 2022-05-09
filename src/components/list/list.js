import React, {useState, useContext} from "react";
import LocationContext from "../../context/LocationContext";
import { useNavigate } from "react-router-dom";
import ListCard from "./ListCard";
import styled from "styled-components";
const listsWrapper = styled.div`
  width:40%;
   `;

const List = () => {

  //navigate to different page with Router useNavigate
  const navigate = useNavigate(); 

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
                address={restaurant.address}
                location_id={restaurant.location_id}
                />
            ))}

        </div>
      </listsWrapper>
    );
  };
    
export default List;
