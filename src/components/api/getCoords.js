import axios from "axios";

export const getCoordinates = async (location) => {
    try{
        const results = await axios.get(`https://geocode.maps.co/search?q=${location}`);
        return results;
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}


export const getLocation = async () => {
    try{
        const result = navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              console.log('Position',pos);
              return await axios.get(`https://geocode.maps.co/reverse?lat=${pos.lat}&lon=${pos.lng}`);
            }  
        )
        return result; 
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}