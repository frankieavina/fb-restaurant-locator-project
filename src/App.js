import { useState } from 'react';
import './App.css';
import LocationContext from './context/LocationContext';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import PlaceDetails from './components/placeDetails/PlaceDetails'
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';


function App() {

  const [locations, setLocations] = useState([]); 

  return (
    <div className="App">
      {/* providing context  */}
      <LocationContext.Provider value={{locations:locations}}>

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
