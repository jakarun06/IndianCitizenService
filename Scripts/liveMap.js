var directionsService;
var selectedCategory = 5;//default road color
var userMapUrl = '../Views/Index.htm';
var liveMapUrl = '../Views/LiveMap.htm';
var categoryColors = ["#ff0000", "#FFA500", "#FFFF00", "#008000", "#00FFFF"];//category colors
var mapAreaCollection = [
                        new Route(100, [13.02804601720666, 80.17689228057861], [13.029739344613546, 80.17709612846375], 0),
                        new Route(101, [13.029676628990178, 80.1773750782013], [13.02815054392516, 80.17746090888977], 3),
                        new Route(102, [13.029776173702682, 80.17733115702868], [13.02997477304234, 80.17655331641436], 1),
                        new Route(103, [13.029823210402792, 80.17680544406176], [13.028067167538422, 80.17633873969316], 1),
                        new Route(104, [13.029237864165133, 80.17666596919298], [13.029190827353828, 80.17695028334856], 2),
                        new Route(105, [13.029169922101476, 80.17704147845507], [13.029154243161068, 80.17732042819262], 1),
                        new Route(106, [13.028124657234136, 80.17644602805376], [13.028124657234136, 80.17644602805376], 3),
                        new Route(107, [13.028051488528181, 80.17694491893053], [13.028051488528181, 80.17694491893053], 0),
                        ];
$(document).ready(function () {
    google.maps.event.addDomListener(window, 'load', initialize);
});

function initialize() {
    directionsService = new google.maps.DirectionsService();
    //map created
    var map = new google.maps.Map(document.getElementById('livemap'), {
        disableDefaultUI: true,
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    google.maps.event.addListener(map, "click", mapClickEventListener);
    lookUpMapCollection(map, directionsService);
    
}

function lookUpMapCollection(map, directionsService)
{
    mapAreaCollection.forEach(function (object, index) {
        object.directionDisplay.setMap(map);
        calculateAndDisplayRoute(map,directionsService, object.directionDisplay, object.origin, object.destination);
    });
 }

function calculateAndDisplayRoute(map,directionsService, directionsDisplay, origin, destination) {
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
function mapClickEventListener(event)
{
    $('#latLng').text(event.latLng);
}
