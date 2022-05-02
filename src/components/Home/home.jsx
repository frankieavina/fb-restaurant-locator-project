import React from 'react';
import { Link } from 'react-router-dom';
import List from '../list';
import Map from '../map';

function Home() {
  return (
    <>
        <List />
        <Map/>
    </>
  )
}

export default Home