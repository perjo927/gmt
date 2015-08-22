Template.map.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('swedenMap', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });
    });
});

Template.map.onRendered(function () {
    // Access a map instance any time by using the maps object.
    // GoogleMaps.maps.exampleMap.instance

});

Template.map.helpers({
    swedenMapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(59.4307669, 17.9006465),
                zoom: 5
            };
        }
    }
});

