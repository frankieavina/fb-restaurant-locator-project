import axios from "axios";


const GEO_URL = ''
const URL=  'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'
const options = {
  method: 'GET',
  
  params: {
    latitude: '12.91285',
    longitude: '100.87808',
    limit: '10',
    currency: 'USD',
    distance: '2',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '5987d912d7mshbd750362dbe5760p12a664jsnd200d2e62d5d'
  }
};


 export const getRestaurantData = async ({lat, long}) => {
    try{
        options.params.latitude = lat;
        options.params.longitude = long; 
        const {data:{data}} = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}
