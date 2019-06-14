 navigator.geolocation.getCurrentPosition(function(position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;
        var accuracy = position.coords.accuracy;
        var altitudeAccuracy = position.coords.altitudeAccuracy;
        var heading = position.coords.height;
        var speed = position.coords.speed;
        var timestamp = position.timestamp;

    });

 function locationSuccess(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;
        var accuracy = position.coords.accuracy;
        var altitudeAccuracy = position.coords.altitudeAccuracy;
        var heading = position.coords.height;
        var speed = position.coords.speed;
        var timestamp = position.timestamp;

    }

function locationError(error) {
        var code = error.code;
        var message = error.message;

    }