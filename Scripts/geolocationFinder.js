function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true });
    }
}
function successLocation(position) {
     userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
}

function errorLocation(msg) {
    alert('error: ' + msg);
}