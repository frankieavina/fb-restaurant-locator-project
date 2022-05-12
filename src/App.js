import { useState, useEffect } from 'react';
import './App.css';
import LocationContext from './context/LocationContext';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/home';
import PlaceDetails from './components/placeDetails/PlaceDetails'
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import {getRestaurantData} from "./components/api/api-key";
import { getCoordinates, getLocation} from './components/api/getCoords';
import { usePosition } from 'use-position';
import axios from 'axios'; 


function App() {

  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    heading,
    error,
  } = usePosition();

  const [locations, setLocations] = useState(getLocation(latitude,longitude));
  const [places, setPlaces] = useState ([]);
  // const [coordinates, setCoordinates] = useState({lat:"36.7394421" , long:"-119.7848307" });
  const [coordinates, setCoordinates] = useState({lat:latitude , long:longitude });
  const [ status, setStatus ] = useState(null); 

// run on every change to location 
  useEffect(() =>{
      getCoordinates(locations)
        .then((results)=>{

          getRestaurantData({ lat: results.data[0].lat , long: results.data[0].lon })
          .then((data) =>{
            setPlaces(data);
          }); 
          setCoordinates({ lat: results.data[0].lat , long: results.data[0].lon }); 
        });

  }, [locations]);




  return (
    <div className="App">
      
    { ( status === null)?
      <LocationContext.Provider 
        value={{
          locations:locations,
          restaurants: places,
          coordinates: coordinates,
          setLocationSearch:(searchLocation) => {
              setLocations(searchLocation);
          },
        }}
      >
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="place-details/:id" element={<PlaceDetails/>} />
            <Route path="*" element={<NotFound />} />
          </Route>          
        </Routes>

      </LocationContext.Provider> :
      <div>
        <h3>{status}</h3>  
      </div>      
    }

    </div>
  );
}

export default App;
