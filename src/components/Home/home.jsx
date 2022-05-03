import React from 'react';
import { Link } from 'react-router-dom';
import List from '../list/List';
import Map from '../map/Map';

function Home() {
  return (
    <>
        <List />
        <Map/>
    </>
  )
}

export default Home