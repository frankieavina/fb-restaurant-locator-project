import {React, useCallback, useRef, useState, useContext, useEffect} from 'react'; 
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'; 
import LocationContext from '../../context/LocationContext';
 

// initializing some variable 
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
};
const libraries = ['places'];



const Map = () =>{
 
    // importing context to use coordinates and restaurants
    const { restaurants, coordinates, locations } = useContext(LocationContext);

    // useStates
    // when we click on the map "markers" will hold an object(s) with the lat,lng,and time of all the clicks
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    const [center, setCenter] = useState();

    useEffect(() =>{
        //setting the center
        const lat = parseFloat(coordinates.lat,10);
        const lng = parseFloat(coordinates.long,10);
        setCenter({lat:lat, lng:lng})
        //setting the markers 
        setMarkers(restaurants) 
      }, [locations,coordinates,restaurants]); 


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

    const panTo = useCallback(({lat,lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14); 
    })

    // check if theres and error or if map is still loading 
    if (loadError) return console.log("Error Loading maps");
    if (!isLoaded) return console.log("Loading Maps");
    //console.log("Center:",center);  
     
     

    return(
        <div>
            {/* The map component inside which all other components render */}
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={16}
                center={center}
                options={options}
                onClick={onMapClick} 
                onLoad={onMapLoad}
            > 
                {markers.map((marker) => (
                    <Marker 
                        key={marker.name} 
                        position={{lat: parseFloat(marker.latitude,10), lng: parseFloat(marker.longitude,10)}}
                        // onClick={() =>{
                        //     setSelected(marker);
                        // }}
                    /> 
                ))}
                {/* {selected  ?(<InfoWindow position={{lat:selected.lat, lng: selected.lng}} onCloseClick={()=>{setSelected(null);}}>
                    <div>
                        <h2> Restaurant Selected</h2>
                        <p> Lat:{selected.lat} Lng:{selected.lng} </p>
                    </div>
                </InfoWindow>) : null} */}
            </GoogleMap>
        </div>
    )

}
export default Map;
