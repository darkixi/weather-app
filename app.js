const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'address for the weather',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

console.log(yargs.argv);

var proxiedRequest = request.defaults({proxy: 'http://d895370:Ferds18Melbs!@http-gw.tcif.telstra.com.au:8080'});

proxiedRequest.get({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAVt5fixLsWfb0ausv__pFqPfGU6umZ2iE&address=242%20exhibition%20street%20melbourne',
        json: true
    },
    (error, response, body) => {
        console.log(`address: ${body.results[0].formatted_address}:`);
        console.log(`lat: ${body.results[0].geometry.location.lat}:`);
        console.log(`lng: ${body.results[0].geometry.location.lng}:`);
    }
);