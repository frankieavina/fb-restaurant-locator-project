import axios from "axios";

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '5987d912d7mshbd750362dbe5760p12a664jsnd200d2e62d5d'
  }
};

 export const getRestaurantData = async () => {
    try{
        const {data:{data}} = await axios.get(URL, options);
        return data;
    } catch (error){

    }
}
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });