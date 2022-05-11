import { useState, useEffect } from 'react';
import './App.css';
import LocationContext from './context/LocationContext';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/home';
import PlaceDetails from './components/placeDetails/PlaceDetails'
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import {getRestaurantData} from "./components/api/api-key";
import { getCoordinates , getLocation} from './components/api/getCoords';


function App() {

  const [locations, setLocations] = useState('');
  const [places, setPlaces] = useState ([]);
  const [coordinates, setCoordinates] = useState();
  const [ isCurrExist, setIsCurrExist ] = useState(false); 

  if (navigator.geolocation) { 
          getLocation()
            .then((results) =>{
              setLocations(results[0]);
              setCoordinates(results[1]);
            });  
        }
  
  else{
      alert("Cannot verify/locate users location. Will use default Location of Fresno, CA.")
      setCoordinates({lat:"36.7394421" , long:"-119.7848307" }); 
      setLocations('Fresno, CA');
  }

  
// on run on initialization to set current users location 
  // useEffect(() => { 
  //   if (navigator.geolocation) { 
  //         getLocation()
  //           .then((results) =>{
  //             setLocations(results[0]);
  //             setCoordinates(results[1]);
  //           });  
  //       }
  
  //   else{
  //     alert("Cannot verify/locate users location. Will use default Location of Fresno, CA.")
  //     setCoordinates({lat:"36.7394421" , long:"-119.7848307" }); 
  //     setLocations('Fresno, CA');
  //   }
  // },[])

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
            <Route path="place-details/:id" element={<PlaceDetails/>} />
            <Route path="*" element={<NotFound />} />
          </Route>          
        </Routes>

      </LocationContext.Provider>
    </div>
  );
}

export default App;
