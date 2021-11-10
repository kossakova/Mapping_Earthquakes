// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// latitude (40.7), longitude (-94.5), set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// coordinates appear in reverse order. The L.geoJSON()layer reverses the coordinates to plot them on the map

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data with poinToLayer function for pop up marker
//using anonymous function, function(), where pass each GeoJSON feature as feature, and any properties to the second argument, layer
L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    onEachFeature: function(feature, layer) {
        console.log(layer)
        layer.bindPopup("<h2>Arport code:" + feature.properties.faa + "</h2> <hr> <h3>Airport name:" + feature.properties.name +  "</h3>");
    }
}).addTo(map);



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);