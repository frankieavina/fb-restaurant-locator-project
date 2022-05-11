import React from 'react';
import { Link } from 'react-router-dom';
import List from '../list/list';
import Map from '../map/Map';

import styled from "styled-components";
  
const HomeWrapper = styled.section`
  display:flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #666; 
  flex-direction:row;
  background-color:white;   
  flex-wrap:wrap;
  justify-content:space-evenly;
   `;

function Home() {
  return (
    <HomeWrapper >
      <Map/>
      <List />           
    </HomeWrapper>
  )
}

export default Home;