function Route(id,originArray,destinationArray,colorIndex)
{
    this.userId = id;
    this.origin = new google.maps.LatLng(originArray[0], originArray[1]);
    this.destination = new google.maps.LatLng(destinationArray[0], destinationArray[1]);
    this.directionDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: categoryColors[colorIndex], strokeWeight: 5 } });
    this.directionDisplay.setOptions({ suppressMarkers: true });
}
