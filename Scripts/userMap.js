var directionsService;
var directionsDisplay;
var origin = new google.maps.LatLng(13.02804601720666, 80.17689228057861);
var destination = new google.maps.LatLng(13.029739344613546, 80.17709612846375);
var selectedCategory = 5;//default road color
var userMapUrl = '../Views/Index.htm';
var liveMapUrl = '../Views/LiveMap.htm';
var categoryColors = ["#ff0000", "#FFA500", "#FFFF00", "#008000", "#00FFFF"];//category colors

$(document).ready(function () {
    google.maps.event.addDomListener(window, 'load', initialize);
});

function initialize() {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: categoryColors[selectedCategory - 1], strokeWeight: 5 } });
    directionsDisplay.setOptions({ suppressMarkers: true });
    //initialize map object
    var map = new google.maps.Map(document.getElementById('map'), {
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsDisplay, origin, destination);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, origin, destination) {
    directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.WALKING
    }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
function toggleMapForSelectedImage(obj)
{
    selectedCategory = +$(obj).attr('id').replace("category","")+0;
    initialize();
}
