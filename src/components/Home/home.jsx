import React from 'react';
import { Link } from 'react-router-dom';
import List from '../list/list';
import Map from '../map/Map';

import styled from "styled-components";
  
const HomeWrapper = styled.div`
  display:flex; 
  flex-direction:column;
  background-color:white;   
  flex-wrap:wrap;
  /* justify-content:space-evenly; */
   `;

function Home() {
  return (
    <HomeWrapper >
    <List /> 
    <Map/>    
    </HomeWrapper>
  )
}

export default Home;