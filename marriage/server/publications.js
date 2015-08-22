//

ContentAreas.forEach(function (key) {
    Meteor.publish(key, function () {
        return App.collections[key].find();
    });
});

Meteor.publish("markers", function () {
   return Markers.find({}, {limit:6 });// TODO
});