import React from 'react';
// import GoogleMapReact from 'google-map-react'; 
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'; 


const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
// const options = {
//     styles: mapStyles,
//     disableDefaultUI: true,
//     zoomControl: true,
// };
const center = {
    lat: 43.6532,
    lng: -79.3832,
};
const libraries = ['places'];

const Map = () =>{
    


    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY, 
        libraries
    });

    if (loadError) return console.log("Error Loading maps");
    if (!isLoaded) return console.log("Loading Maps");

    return(
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
            >

            </GoogleMap>
        </div>
    )

}
export default Map;
