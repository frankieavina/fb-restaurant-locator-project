
# Project Title: Restaurant Locator Project , by Frankie Avina and Betelihem Hayle

This Restaurant Locator app that  loads Yelp restaurant data for a diffirent location (State), and shows this data both as restaurant list items and as pushpins on a Leaflet map. A user can then click on individual restaurants to be directed to that restaurant's details page, or choose instead to search for restaurants in a new location.This app  firmed up by using our existing knowledge of the React basics (components, JSX, props, event handling, using forms, making API calls, basic hooks) and also utilize newer skills like handling styles using styled-components and conditionally rendering components using react-router-dom.

## Getting Started:
To work on this project go to the githab and search for a user name called:bettykonjo and clone it on your local machine. 
open your terminal and intialized the progect by runing npm i or npm install

### Prerequisites and Installing
 * There are some dependency you need to install:
 * npm i axios
 * npm i @mui/material
 * npm i @material-ui/icons
 * npm i @material-ui/core
 * npm install react-router-dom
 * npm i @react-google-maps/api
 * get an api key from https://rapidapi.com/apidojo/api/travel-advisor/ to get the Restaurant information. 
 * get an api key from https://mapsplatform.google.com/ to get the map and related functionality, 
 * use npm start to run the app

### Technology used 

Google Maps API -> Display the Map and Markers
Directions API -> Display Directions from two points on the map
Places -> enable AutoComplete feature , allow us to suggest locations to user
Travel-advisor api -> fetch information about the restaurants or locations 
Get geocode -> to either get the location or coordinates 

Node packages :

@react-google-maps/api 
	- components that helped with the implementation of Mapping out the location
	- place markers on the map
UsePlacesAutoComplete/Combobox 
	- give the user suggestions to user nearby locations with the same search name

Navigator.geolocation tool to accès users current geolocation. 

React Context -> pass down and consume data in whatever component we need in our React app without 
Using props. (Create, provide, consume) 

Styled components for styling

React Router -> route from home to restaurant details and back 

### Features

 * Pins by default to Fresno location. 
 * When searching it gives you suggestions(autocomplete) of places similar to search
 * Will mark restaurants near location picked
 * There will be a list next to the nap with details of the restaurant 
 * When you click on the marker gives you small details of location (info window) 
 * If you click on a list component or title of restaurant on the marker it will route you to details page 
 * If you click on top right corner compass icon it will pan to users location 
 * If you click on the directions icon , located on markers info window, if will give you directions to locations
 * With additional info such as how far and how Long it would take you to get there. 

