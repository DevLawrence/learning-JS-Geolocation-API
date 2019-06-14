 navigator.geolocation.getCurrentPosition(function(position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;
        var accuracy = position.coords.accuracy;
        var altitudeAccuracy = position.coords.altitudeAccuracy;
        var heading = position.coords.height;
        var speed = position.coords.speed;
        

        // work with this information however you'd like!
    });