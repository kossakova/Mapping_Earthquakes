// Add console.log to check to see if our code is working.
console.log("working");

// Get data from cities.js
let cityData = cities;


// Create the map object with a center and zoom level.
// latitude (40.7), longitude (-94.5), set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([34.0522, -118.2437], 4);
//Alternative
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Loop through the cities array and create one CIRCLE for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius : city.population/100000
    })
    //toLocaleString() - thousand separator
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// Loop through the cities array and create one MARKER for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     //toLocaleString() - thousand separator
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });


// a function circleMarker
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: '#ffffa1',
// }).addTo(map);

// // regular marker
// let cities = L.marker([34.0522, -118.2437]).addTo(map);

// // regular circle 
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: '#ffffa1',
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);