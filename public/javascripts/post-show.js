mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZW1vZGUtaW8iLCJhIjoiY2p2eWkzYW1yMDNjaTQ2bGNkOWNpZmVraCJ9.Kvn7Mj2Cw88RDmrkO16CbQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: post.coordinates,
    zoom: 5
});

// create a HTML element for our post location/marker
var el = document.createElement('div');
el.className = 'marker';

// make a marker for our location and add to the map
new mapboxgl.Marker(el)
    .setLngLat(post.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
    .addTo(map);