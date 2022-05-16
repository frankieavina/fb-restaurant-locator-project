import React, {useState, useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
// importing Context (location context)
import LocationContext from "../../context/LocationContext";
// import { Autocomplete } from "@react-google-maps/api";

const HeaderWrapper = styled.header`
  align-items:flex-start;
  background-color:grey;
  color: #fefefe;
  display: block;
  justify-content: space-between;
  align-content: start;
  h1 {
    margin: 1rem 0;
    text-align:start;

  }
  search-box{
    border-radius:1px solid black;
  }
  input{
    font-size:25px;
    width:600px;
    height:50%;
    background-color: white;
    color:black;
    float: left;
  }
  button{
    background-color:blue;
    color:white;
    float: left;
  }
  `;

const Header = () => {

  // consuming or using location context 
  const { setLocationSearch } = useContext(LocationContext)
  const [locationName, setLocationName] = useState('')
  const handleClick =(e) => {
    e.preventDefault();
    setLocationSearch(locationName);
  }
  
  return (
    < HeaderWrapper>
      <h1>Location Search {locationName}:</h1>

      <div className="search-box">
        {/* <Autocomplete> */}
          <input
            className="search-text"
            type="text"
            name=""
            value={locationName}
            placeholder="Type to search location....."
            onChange={(e) => {setLocationName(e.target.value)}}
          />
        {/* </Autocomplete> */}
        <button onClick={handleClick}>Search</button>
      </div>
    </ HeaderWrapper>
  );
};
export default Header;
