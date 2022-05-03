import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

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
  const [restaurantName, setRestaurantName] = useState('')
  const handleClick =(restaurantName) => {
    console.log(``)
  }
  
  return (
    < HeaderWrapper>
      <h1>Restaurant Search {restaurantName}:</h1>

      <div className="search-box">
        <input
          className="search-text"
          type="text"
          name=""
          value={restaurantName}
          placeholder="Type to search....."
          onChange={(e) => {setRestaurantName(e.target.value)}}
        />
        <button onClick={() => handleClick('')}>search</button>
      </div>
    </ HeaderWrapper>
  );
};
export default Header;
