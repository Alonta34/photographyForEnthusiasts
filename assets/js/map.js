function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 35.143025309731456,
            lng: -89.98312485272889
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat:35.15266689459473, lng:-90.01448901801162 },
        { lat:35.13589184921598, lng:-90.06328684445594 },
        { lat:35.13922342203885, lng:-89.83231883101311 },
        { lat:35.14048047572584, lng:-90.05486726004249 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}