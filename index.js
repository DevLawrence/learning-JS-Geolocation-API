 navigator.geolocation.getCurrentPosition(function(position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;
        var accuracy = position.coords.accuracy;
        
        // work with this information however you'd like!
    });