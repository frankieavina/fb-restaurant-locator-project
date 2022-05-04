import React, {useState} from "react";
import PlaceDetail from "../placeDetails/PlaceDetails"
const List = () => {
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");

    const places = [
        { name: 'cool place'},
        { name: 'betst food'},
        { name: ' perfect place'},
        { name: 'wondefull place'},
        { name: 'cool place'},
        { name: 'betst food'},
        { name: ' perfect place'},
        { name: 'wondefull place'},
    ]
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
            {places?.map((place,i) => (
                <PlaceDetail place={place}/>
            ))}

        </div>
      </div>
    );
  };
    
export default List;
