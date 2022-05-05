import {React, useCallback, useRef, useState, useContext, useEffect} from 'react'; 
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'; 
import LocationContext from '../../context/LocationContext';
import mapStyles from "./mapStyles";
 

// initializing some variable 
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
const options = {
    styles: mapStyles, 
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

    // const panTo = useCallback(({lat,lng}) => {
    //     mapRef.current.panTo({lat, lng});
    //     mapRef.current.setZoom(14); 
    // })

    // check if theres and error or if map is still loading 
    if (loadError) return console.log("Error Loading maps");
    if (!isLoaded) return console.log("Loading Maps");
    //console.log("Center:",center);  
     
     

    return(
        <div>
            {/* The map component inside which all other components render */}
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                options={options}
                onClick={onMapClick} 
                onLoad={onMapLoad}
            > 
                {markers.map((marker) => (
                    <Marker 
                        key={marker.location_id} 
                        position={{lat: parseFloat(marker.latitude,10), lng: parseFloat(marker.longitude,10)}}
                        // icon={{
                        //     url:'../../../public/bear.svg',
                        //     scaledSized: new window.google.maps.Point(30,30),
                        //     origin: new window.google.maps.Point(0,0),
                        //     anchor: new window.google.maps.Point(15,15),
                        // }}
                        onClick={() =>{
                            setSelected(marker);
                        }}
                    /> 
                ))}
                {selected  ?(<InfoWindow position={{lat: parseFloat(selected.latitude,10), lng: parseFloat(selected.longitude,10)}} onCloseClick={()=>{setSelected(null);}}>
                    <div>
                        <h2>{selected.name}</h2>
                        <p> Address:{selected.address_obj.street1} {selected.address_obj.city}, {selected.address_obj.state}</p>
                        <p> Phone Number: {selected.phone}</p>
                    </div>
                </InfoWindow>) : null}
            </GoogleMap>
        </div>
    )

}
export default Map;
