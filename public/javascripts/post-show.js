mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZW1vZGUtaW8iLCJhIjoiY2p2eWkzYW1yMDNjaTQ2bGNkOWNpZmVraCJ9.Kvn7Mj2Cw88RDmrkO16CbQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: post.geometry.coordinates,
    zoom: 5
});

// create a HTML element for our post location/marker
var el = document.createElement('div');
el.className = 'marker';

// make a marker for our location and add to the map
new mapboxgl.Marker(el)
    .setLngLat(post.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
    .addTo(map);

// Toggle edit review form
$('.toggle-edit-form').on('click', function() {
    // toggle the edit button text on click
    $(this).text() === 'Edit' ? $(this).text('Cancel') : $(this).text('Edit');
    //toggle visiblity of edit review form
    $(this).siblings('.edit-review-form').toggle();
});

// clear rating
$('.clear-rating').click(function() {
    $(this).siblings('.input-no-rate').click();
});