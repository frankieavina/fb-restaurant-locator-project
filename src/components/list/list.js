import React, {useState, useContext} from "react";
import LocationContext from "../../context/LocationContext";
import { useNavigate } from "react-router-dom";


const List = () => {

  //navigate to different page with Router useNavigate
  const navigate = useNavigate(); 

  // have locations(restaurants array) available to us in the list component
  const { restaurants } = useContext(LocationContext);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

    return (
      <div className="list-container">
        <h3>Restaurants</h3>
        <form>
          <inputLabel> Type</inputLabel>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <menuItem value="restaurants"> Restaurants</menuItem>
          </select>
        </form>
        <form>
          <inputLabel>Rating</inputLabel>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <menuItem value={'0'}> All</menuItem>
            <menuItem value={'3'}> Above 3.0</menuItem>
            <menuItem value={'4'}> Above 4.0</menuItem>
            <menuItem value={'4.5'}> Above 4.5</menuItem>
          </select>
        </form>
        <div className="list">
            {restaurants?.map((data) => (
                <PlaceDetail place={data} onClick={() => navigate(`/place-details/${parseInt(restaurants.location_id)}`)}/>
            ))}

        </div>
      </div>
    );
  };
    
export default List;
