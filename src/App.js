import { useState, useEffect } from 'react';
import './App.css';
import LocationContext from './context/LocationContext';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/home';
import PlaceDetails from './components/placeDetails/PlaceDetails'
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

import {getRestaurantData} from "./components/api/api-key";


function App() {

  const [locations, setLocations] = useState("Fresno, CA");
  const [places, setPlaces] = useState ([]);
  useEffect(() =>{
    getRestaurantData(locations)
    .then((data) =>{
      setPlaces(data);
      console.log(data)
    })

  }, [locations]);

  return (
    <div className="App">
      
      {/* providing context  */}
      <LocationContext.Provider 
        value={{
          locations:locations,
          restaurants: places,
          setLocationSearch:(searchLocation) => {
              setLocations(searchLocation);
          },
        }}
      >
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
