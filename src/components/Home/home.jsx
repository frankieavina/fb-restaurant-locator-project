import React from 'react';
import { Link } from 'react-router-dom';
import List from '../list/list';
import Map from '../map/Map';

import styled from "styled-components";
  
const homeWrapper = styled.div`
  display:flex; 
  flex-direction:row;
  background-color:white;   
  flex-wrap:wrap;
  justify-content:space-evenly;
   `;

function Home() {
  return (
    <homeWrapper >
    <List /> 
    <Map/>    
    </homeWrapper>
  )
}

export default Home;