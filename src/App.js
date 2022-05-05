import { useState, useEffect } from 'react';
import './App.css';
import LocationContext from './context/LocationContext';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/home';
import PlaceDetails from './components/placeDetails/PlaceDetails'
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

import {getRestaurantData} from "./components/api/api-key";
import { getCoordinates } from './components/api/getCoords';


function App() {

  const [locations, setLocations] = useState("Fresno, CA");
  const [places, setPlaces] = useState ([]);
  const [coordinates, setCoordinates] = useState({lat:"36.7394421" , long:"-119.7848307" });

  useEffect(() =>{

    getCoordinates(locations)
      .then((results)=>{

        getRestaurantData({ lat: results.data[0].lat , long: results.data[0].lon })
        .then((data) =>{
          setPlaces(data);
          //console.log(data);
        });

        //console.log("Area",results.data[0]) 
        setCoordinates({ lat: results.data[0].lat , long: results.data[0].lon }); 
        
      });



  }, [locations]);




  return (
    <div className="App">
      
      {/* providing context  */}
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
            <Route path="placedetails/:id" element={<PlaceDetails/>} />
            <Route path="*" element={<NotFound />} />
          </Route>          
        </Routes>

      </LocationContext.Provider>
    </div>
  );
}

export default App;
