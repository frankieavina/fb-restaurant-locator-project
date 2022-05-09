import {React, useCallback, useRef, useState} from 'react'; 
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'; 
// initializing some variable 
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",    
};  
const options = {
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 43.6532,
    lng: -79.3832,
};
const libraries = ['places'];

const Map = () =>{
    // useStates
    // when we click on the map "markers" will hold an object(s) with the lat,lng,and time of all the clicks
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    // google maps hook the loads the google pai script 
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY, 
        libraries
    });

    const onMapClick = useCallback((event) => {
        setMarkers(current => [...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(), 
        }])
    },[])

    const mapRef = useRef(); 
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    })

    // check if theres and error or if map is still loading 
    if (loadError) return console.log("Error Loading maps");
    if (!isLoaded) return console.log("Loading Maps");
     
     

    return(
        <div>
            {/* The map component inside which all other components render */}
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            > 
                {markers.map((marker) => (
                    <Marker 
                        key={marker.time.toISOString()} 
                        position={{lat:marker.lat, lng:marker.lng}}
                        onClick={() =>{
                            setSelected(marker);
                        }}
                    /> 
                ))}
                {selected  ?(<InfoWindow position={{lat:selected.lat, lng: selected.lng}} onCloseClick={()=>{setSelected(null);}}>
                    <div>
                        <h2> Restaurant Selected</h2>
                        <p> Lat:{selected.lat} Lng:{selected.lng} </p>
                    </div>
                </InfoWindow>) : null}
            </GoogleMap>
        </div>
    )

}
export default Map;
