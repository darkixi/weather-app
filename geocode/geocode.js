const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    //var proxiedRequest = request.defaults({proxy: 'http://d895370:Ferds18Melbs!@http-gw.tcif.telstra.com.au:8080'});
    
    request.get({
            url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${encodedAddress}&key=AIzaSyAVt5fixLsWfb0ausv__pFqPfGU6umZ2iE`,
            json: true
        },
        (error, response, body) => {
            if (error){
                callback('unable to connect to Google servers');
            } else if (body.status === 'ZERO_RESULTS'){
                callback('unable to find that address');
            } else if (body.status === 'OK') {
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                })
            }
        }
    );
}

module.exports = {
    geocodeAddress
};