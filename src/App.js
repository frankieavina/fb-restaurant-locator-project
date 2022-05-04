import { useState, useEffect } from 'react';
import './App.css';
import LocationContext from './context/LocationContext';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import PlaceDetails from './components/placeDetails/PlaceDetails'
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

import {getRestaurantData} from "./components/api/api-key";


function App() {

  // const [locations, setLocations] = useState([]);
  const [places, setPlaces] = useState ([]);
  useEffect(() =>{
    getRestaurantData()
    .then((data) =>{
      setPlaces(data);
      console.log(data)

    })

  }, []);

  return (
    <div className="App">
      
      {/* providing context  */}
      <LocationContext.Provider value={{restaurants: places}}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="placedetails/:id" element={<PlaceDetails/>} />
            <Route path="*" element={<NotFound />} />
          </Route>          
        </Routes>

      </LocationContext.Provider>
    </div>
  );
}

export default App;
